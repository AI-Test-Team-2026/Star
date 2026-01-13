<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------
| DATABASE CONNECTIVITY SETTINGS WITH FALLBACK
| -------------------------------------------------------------------
| This configuration implements automatic fallback from MySQL to SQLite
| when MySQL is unavailable (offline mode).
|
| The system will:
| 1. Attempt to connect to MySQL first
| 2. If MySQL is unavailable, automatically switch to SQLite
| 3. Log the active backend for debugging
|
| Configuration is loaded from db_config.php and can be overridden
| with environment variables in .env file.
*/

// Load fallback configuration
if (file_exists(APPPATH . 'config/db_config.php')) {
    require_once APPPATH . 'config/db_config.php';
} else {
    // Fallback defaults if db_config.php doesn't exist
    $db_fallback_config = array(
        'mysql' => array(
            'hostname' => 'localhost',
            'username' => 'root',
            'password' => '',
            'database' => 'Himax_Automobile',
            'port' => 3306,
            'timeout' => 3,
        ),
        'sqlite' => array(
            'path' => APPPATH . '../db/cache.db',
        ),
        'settings' => array(
            'force_sqlite' => false,
            'enable_logging' => true,
            'log_file' => APPPATH . 'logs/db_fallback.log',
        ),
    );
}

$active_group = 'default';
$query_builder = TRUE;

// Function to test MySQL connection
function test_mysql_connection($config) {
    try {
        // Set a short timeout for the connection test
        $old_timeout = ini_get('default_socket_timeout');
        ini_set('default_socket_timeout', $config['timeout']);
        
        $connection = @new mysqli(
            $config['hostname'],
            $config['username'],
            $config['password'],
            $config['database'],
            $config['port']
        );
        
        // Restore original timeout
        ini_set('default_socket_timeout', $old_timeout);
        
        if ($connection->connect_error) {
            return false;
        }
        
        $connection->close();
        return true;
    } catch (Exception $e) {
        return false;
    }
}

// Function to log database connection info
function log_db_connection($backend, $message) {
    global $db_fallback_config;
    
    if (!isset($db_fallback_config['settings']['enable_logging']) ||
        !$db_fallback_config['settings']['enable_logging']) {
        return;
    }
    
    $logFile = isset($db_fallback_config['settings']['log_file']) 
        ? $db_fallback_config['settings']['log_file']
        : APPPATH . 'logs/db_fallback.log';
    
    $logDir = dirname($logFile);
    if (!is_dir($logDir)) {
        @mkdir($logDir, 0755, true);
    }
    
    $timestamp = date('Y-m-d H:i:s');
    $logMessage = sprintf("[%s] [%s] %s\n", $timestamp, strtoupper($backend), $message);
    @file_put_contents($logFile, $logMessage, FILE_APPEND);
}

// Determine which database to use
$use_sqlite = false;
$force_sqlite = isset($db_fallback_config['settings']['force_sqlite']) 
    && $db_fallback_config['settings']['force_sqlite'];

if ($force_sqlite) {
    $use_sqlite = true;
    log_db_connection('sqlite', 'Forced SQLite mode enabled');
} else {
    // Test MySQL connection
    if (!test_mysql_connection($db_fallback_config['mysql'])) {
        $use_sqlite = true;
        log_db_connection('sqlite', 'MySQL connection failed, falling back to SQLite');
    } else {
        log_db_connection('mysql', 'Successfully connected to MySQL');
    }
}

// Configure database based on test result
if ($use_sqlite) {
    // SQLite Configuration
    $sqlitePath = $db_fallback_config['sqlite']['path'];
    
    // Ensure directory exists
    $dbDir = dirname($sqlitePath);
    if (!is_dir($dbDir)) {
        @mkdir($dbDir, 0755, true);
    }
    
    // Initialize SQLite schema if needed
    if (file_exists($sqlitePath)) {
        $db_size = filesize($sqlitePath);
        if ($db_size == 0 || $db_size === false) {
            // Empty or unreadable file, initialize
            $schemaFile = APPPATH . '../db/schema.sql';
            if (file_exists($schemaFile)) {
                try {
                    $pdo = new PDO('sqlite:' . $sqlitePath);
                    $pdo->exec('PRAGMA foreign_keys = ON');
                    $sql = file_get_contents($schemaFile);
                    $pdo->exec($sql);
                    log_db_connection('sqlite', 'SQLite schema initialized');
                } catch (Exception $e) {
                    log_db_connection('sqlite', 'Error initializing schema: ' . $e->getMessage());
                }
            }
        }
    }
    
    $db['default'] = array(
        'dsn'=> '',
        'hostname' => '',
        'username' => '',
        'password' => '',
        'database' => $sqlitePath,
        'dbdriver' => 'sqlite3',
        'dbprefix' => '',
        'pconnect' => FALSE,
        'db_debug' => (ENVIRONMENT !== 'production'),
        'cache_on' => FALSE,
        'cachedir' => '',
        'char_set' => 'utf8',
        'dbcollat' => 'utf8_general_ci',
        'swap_pre' => '',
        'encrypt' => FALSE,
        'compress' => FALSE,
        'stricton' => FALSE,
        'failover' => array(),
        'save_queries' => TRUE
    );
    
    // Store backend info for later retrieval
    define('DB_BACKEND', 'sqlite');
} else {
    // MySQL Configuration
    $mysql_config = $db_fallback_config['mysql'];
    
    $db['default'] = array(
        'dsn'=> '',
        'hostname' => $mysql_config['hostname'],
        'username' => $mysql_config['username'],
        'password' => $mysql_config['password'],
        'database' => $mysql_config['database'],
        'dbdriver' => 'mysqli',
        'dbprefix' => '',
        'pconnect' => FALSE,
        'db_debug' => (ENVIRONMENT !== 'production'),
        'cache_on' => FALSE,
        'cachedir' => '',
        'char_set' => 'utf8',
        'dbcollat' => 'utf8_general_ci',
        'swap_pre' => '',
        'encrypt' => FALSE,
        'compress' => FALSE,
        'stricton' => FALSE,
        'failover' => array(),
        'save_queries' => TRUE
    );
    
    // Store backend info for later retrieval
    define('DB_BACKEND', 'mysql');
}
