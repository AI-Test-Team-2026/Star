<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Database Fallback Library for CodeIgniter
 * 
 * This library integrates the DBManager with CodeIgniter's database system.
 * It provides a wrapper to make the fallback system work seamlessly with
 * existing CodeIgniter code.
 * 
 * @package    Star
 * @subpackage Libraries
 * @category   Database
 */

require_once(APPPATH . '../db/DBManager.php');

class DB_Fallback {
    
    private $dbManager;
    private $CI;
    
    public function __construct() {
        $this->CI =& get_instance();
        
        try {
            // Initialize DBManager
            $this->dbManager = DBManager::getInstance();
            
            // Set up CodeIgniter's $this->db to use our fallback system
            // This is done by creating a custom database connection
            $this->setupCodeIgniterDB();
            
        } catch (Exception $e) {
            log_message('error', 'DB_Fallback initialization failed: ' . $e->getMessage());
            show_error('Database initialization failed. Please check your configuration.');
        }
    }
    
    /**
     * Setup CodeIgniter's database to use the fallback system
     */
    private function setupCodeIgniterDB() {
        // Get the active backend type
        $backend = $this->dbManager->getActiveBackend();
        
        if ($backend === 'sqlite') {
            // Reconfigure CodeIgniter to use SQLite
            $this->setupSQLiteForCodeIgniter();
        }
        // If MySQL, CodeIgniter's default configuration will work
    }
    
    /**
     * Setup SQLite for CodeIgniter
     */
    private function setupSQLiteForCodeIgniter() {
        // Load database config
        require APPPATH . 'config/db_config.php';
        
        // Create a new database configuration for SQLite
        $db['sqlite'] = array(
            'dsn'   => '',
            'hostname' => '',
            'username' => '',
            'password' => '',
            'database' => $db_fallback_config['sqlite']['path'],
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
        
        // Load the database with SQLite configuration
        $this->CI->load->database($db['sqlite']);
    }
    
    /**
     * Get DBManager instance
     * 
     * @return DBManager
     */
    public function getManager() {
        return $this->dbManager;
    }
    
    /**
     * Get active backend type
     * 
     * @return string
     */
    public function getActiveBackend() {
        return $this->dbManager->getActiveBackend();
    }
    
    /**
     * Check if using MySQL
     * 
     * @return bool
     */
    public function isMySQL() {
        return $this->dbManager->isMySQL();
    }
    
    /**
     * Check if using SQLite
     * 
     * @return bool
     */
    public function isSQLite() {
        return $this->dbManager->isSQLite();
    }
    
    /**
     * Get backend indicator for display
     * 
     * @return array
     */
    public function getIndicator() {
        return $this->dbManager->getBackendIndicator();
    }
}
