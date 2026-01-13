<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Database Fallback Configuration
 * 
 * This configuration file defines settings for the dynamic database fallback system.
 * The system attempts to connect to MySQL first, then falls back to SQLite if MySQL
 * is unavailable.
 * 
 * You can override these settings using environment variables in .env file.
 */

// Load from .env if available
$env_file = (defined('FCPATH') ? FCPATH : APPPATH . '../') . '.env';
if (file_exists($env_file)) {
    $lines = file($env_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue; // Skip comments
        if (strpos($line, '=') === false) continue; // Skip invalid lines
        list($key, $value) = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);
        if (!empty($key) && !isset($_ENV[$key])) {
            $_ENV[$key] = $value;
            putenv("$key=$value");
        }
    }
}

// MySQL Configuration
$db_fallback_config['mysql'] = array(
    'hostname' => getenv('DB_HOSTNAME') ?: 'localhost',
    'username' => getenv('DB_USERNAME') ?: 'root',
    'password' => getenv('DB_PASSWORD') ?: '',
    'database' => getenv('DB_DATABASE') ?: 'Himax_Automobile',
    'port'     => getenv('DB_PORT') ?: 3306,
    'timeout'  => 3, // Connection timeout in seconds
);

// SQLite Configuration
$db_fallback_config['sqlite'] = array(
    'path' => getenv('SQLITE_PATH') ?: (APPPATH . '../db/cache.db'),
);

// Fallback behavior settings
$db_fallback_config['settings'] = array(
    // Force SQLite mode (useful for testing offline mode)
    'force_sqlite' => getenv('FORCE_SQLITE') === 'true',
    
    // Enable detailed logging
    'enable_logging' => getenv('DB_FALLBACK_LOGGING') !== 'false',
    
    // Log file path
    'log_file' => APPPATH . 'logs/db_fallback.log',
);
