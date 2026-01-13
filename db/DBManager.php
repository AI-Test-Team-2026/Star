<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Database Manager with MySQL/SQLite Fallback
 * 
 * This class provides a centralized database connection manager that attempts
 * to connect to MySQL first and falls back to SQLite when MySQL is unreachable.
 * 
 * @package    Star
 * @subpackage Database
 * @category   Database
 * @author     Star Team
 */
class DBManager {
    
    private static $instance = null;
    private $pdo = null;
    private $activeBackend = null; // 'mysql' or 'sqlite'
    private $config = array();
    private $logFile = null;
    
    /**
     * Private constructor to enforce singleton pattern
     */
    private function __construct() {
        $this->loadConfig();
        $this->logFile = APPPATH . 'logs/db_fallback.log';
        $this->connect();
    }
    
    /**
     * Get singleton instance
     * 
     * @return DBManager
     */
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * Load database configuration
     */
    private function loadConfig() {
        // Load from CodeIgniter config
        if (file_exists(APPPATH . 'config/db_config.php')) {
            require APPPATH . 'config/db_config.php';
            $this->config = $db_fallback_config;
        } else {
            // Fallback to default database.php config
            require APPPATH . 'config/database.php';
            $this->config = array(
                'mysql' => array(
                    'hostname' => $db['default']['hostname'],
                    'username' => $db['default']['username'],
                    'password' => $db['default']['password'],
                    'database' => $db['default']['database'],
                    'port' => isset($db['default']['port']) ? $db['default']['port'] : 3306,
                    'timeout' => 3, // Connection timeout in seconds
                ),
                'sqlite' => array(
                    'path' => APPPATH . '../db/cache.db',
                )
            );
        }
    }
    
    /**
     * Attempt to connect to database with fallback logic
     */
    private function connect() {
        // Try MySQL first
        if ($this->connectMySQL()) {
            $this->activeBackend = 'mysql';
            $this->log('Successfully connected to MySQL database');
            return true;
        }
        
        // Fallback to SQLite
        $this->log('MySQL connection failed, falling back to SQLite');
        if ($this->connectSQLite()) {
            $this->activeBackend = 'sqlite';
            $this->log('Successfully connected to SQLite database');
            return true;
        }
        
        // Both failed
        $this->log('ERROR: Both MySQL and SQLite connections failed', 'error');
        throw new Exception('Database connection failed: Unable to connect to MySQL or SQLite');
    }
    
    /**
     * Attempt MySQL connection
     * 
     * @return bool
     */
    private function connectMySQL() {
        try {
            $config = $this->config['mysql'];
            $timeout = isset($config['timeout']) ? $config['timeout'] : 3;
            
            $dsn = sprintf(
                'mysql:host=%s;port=%d;dbname=%s;charset=utf8',
                $config['hostname'],
                $config['port'],
                $config['database']
            );
            
            $options = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
                PDO::ATTR_EMULATE_PREPARES => false,
                PDO::ATTR_TIMEOUT => $timeout,
            );
            
            $this->pdo = new PDO(
                $dsn,
                $config['username'],
                $config['password'],
                $options
            );
            
            return true;
        } catch (PDOException $e) {
            $this->log('MySQL connection error: ' . $e->getMessage());
            return false;
        }
    }
    
    /**
     * Attempt SQLite connection
     * 
     * @return bool
     */
    private function connectSQLite() {
        try {
            $sqlitePath = $this->config['sqlite']['path'];
            
            // Ensure directory exists
            $dir = dirname($sqlitePath);
            if (!is_dir($dir)) {
                mkdir($dir, 0755, true);
            }
            
            // Create DSN
            $dsn = 'sqlite:' . $sqlitePath;
            
            $options = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
            );
            
            $this->pdo = new PDO($dsn, null, null, $options);
            
            // Enable foreign keys for SQLite
            $this->pdo->exec('PRAGMA foreign_keys = ON');
            
            // Initialize schema if needed
            $this->initializeSQLiteSchema();
            
            return true;
        } catch (PDOException $e) {
            $this->log('SQLite connection error: ' . $e->getMessage(), 'error');
            return false;
        }
    }
    
    /**
     * Initialize SQLite schema if tables don't exist
     */
    private function initializeSQLiteSchema() {
        try {
            // Check if main table exists
            $stmt = $this->pdo->query(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='pa5478_projects'"
            );
            
            if ($stmt->fetch() === false) {
                // Load and execute schema
                $schemaFile = APPPATH . '../db/schema.sql';
                if (file_exists($schemaFile)) {
                    $sql = file_get_contents($schemaFile);
                    $this->pdo->exec($sql);
                    $this->log('SQLite schema initialized');
                } else {
                    $this->log('WARNING: SQLite schema file not found at ' . $schemaFile, 'warning');
                }
            }
        } catch (PDOException $e) {
            $this->log('Error initializing SQLite schema: ' . $e->getMessage(), 'error');
        }
    }
    
    /**
     * Get PDO connection
     * 
     * @return PDO
     */
    public function getConnection() {
        return $this->pdo;
    }
    
    /**
     * Get active backend type
     * 
     * @return string 'mysql' or 'sqlite'
     */
    public function getActiveBackend() {
        return $this->activeBackend;
    }
    
    /**
     * Check if using MySQL
     * 
     * @return bool
     */
    public function isMySQL() {
        return $this->activeBackend === 'mysql';
    }
    
    /**
     * Check if using SQLite
     * 
     * @return bool
     */
    public function isSQLite() {
        return $this->activeBackend === 'sqlite';
    }
    
    /**
     * Execute a query
     * 
     * @param string $sql SQL query
     * @param array $params Parameters for prepared statement
     * @return PDOStatement
     */
    public function query($sql, $params = array()) {
        try {
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        } catch (PDOException $e) {
            $this->log('Query error: ' . $e->getMessage() . ' SQL: ' . $sql, 'error');
            throw $e;
        }
    }
    
    /**
     * Begin transaction
     */
    public function beginTransaction() {
        return $this->pdo->beginTransaction();
    }
    
    /**
     * Commit transaction
     */
    public function commit() {
        return $this->pdo->commit();
    }
    
    /**
     * Rollback transaction
     */
    public function rollback() {
        return $this->pdo->rollBack();
    }
    
    /**
     * Get last insert ID
     * 
     * @return string
     */
    public function lastInsertId() {
        return $this->pdo->lastInsertId();
    }
    
    /**
     * Log message to file
     * 
     * @param string $message Message to log
     * @param string $level Log level (info, warning, error)
     */
    private function log($message, $level = 'info') {
        $timestamp = date('Y-m-d H:i:s');
        $backend = $this->activeBackend ? strtoupper($this->activeBackend) : 'NONE';
        $logMessage = sprintf(
            "[%s] [%s] [%s] %s\n",
            $timestamp,
            strtoupper($level),
            $backend,
            $message
        );
        
        // Ensure log directory exists
        $logDir = dirname($this->logFile);
        if (!is_dir($logDir)) {
            mkdir($logDir, 0755, true);
        }
        
        // Write to log file
        @file_put_contents($this->logFile, $logMessage, FILE_APPEND);
        
        // Also log to PHP error log for critical errors
        if ($level === 'error') {
            error_log($logMessage);
        }
    }
    
    /**
     * Get backend indicator for display
     * 
     * @return array Array with 'backend', 'color', and 'message' keys
     */
    public function getBackendIndicator() {
        $indicator = array(
            'backend' => $this->activeBackend,
            'color' => $this->isMySQL() ? 'success' : 'warning',
            'message' => $this->isMySQL() 
                ? 'Connected to MySQL (Online)' 
                : 'Connected to SQLite (Offline)',
            'icon' => $this->isMySQL() ? 'fa-database' : 'fa-hdd',
        );
        
        return $indicator;
    }
    
    /**
     * Prevent cloning of singleton
     */
    private function __clone() {}
    
    /**
     * Prevent unserialization of singleton
     */
    private function __wakeup() {}
}
