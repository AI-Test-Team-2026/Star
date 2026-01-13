<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Database Indicator Helper
 * 
 * Provides functions to display the current database backend status
 */

if (!function_exists('get_db_backend_indicator')) {
    /**
     * Get database backend indicator information
     * 
     * @return array Array with backend info
     */
    function get_db_backend_indicator() {
        $backend = defined('DB_BACKEND') ? DB_BACKEND : 'unknown';
        
        $indicator = array(
            'backend' => $backend,
            'color' => ($backend === 'mysql') ? 'success' : 'warning',
            'message' => ($backend === 'mysql') 
                ? 'Connected to MySQL (Online)' 
                : (($backend === 'sqlite') ? 'Connected to SQLite (Offline)' : 'Unknown Database'),
            'icon' => ($backend === 'mysql') ? 'fa-database' : 'fa-hdd',
        );
        
        return $indicator;
    }
}

if (!function_exists('db_backend_badge')) {
    /**
     * Generate HTML badge for database backend indicator
     * 
     * @return string HTML for badge
     */
    function db_backend_badge() {
        $indicator = get_db_backend_indicator();
        
        $html = sprintf(
            '<span class="badge badge-%s" title="%s"><i class="fas %s"></i> %s</span>',
            $indicator['color'],
            $indicator['message'],
            $indicator['icon'],
            strtoupper($indicator['backend'])
        );
        
        return $html;
    }
}

if (!function_exists('is_using_mysql')) {
    /**
     * Check if currently using MySQL
     * 
     * @return bool
     */
    function is_using_mysql() {
        return defined('DB_BACKEND') && DB_BACKEND === 'mysql';
    }
}

if (!function_exists('is_using_sqlite')) {
    /**
     * Check if currently using SQLite
     * 
     * @return bool
     */
    function is_using_sqlite() {
        return defined('DB_BACKEND') && DB_BACKEND === 'sqlite';
    }
}
