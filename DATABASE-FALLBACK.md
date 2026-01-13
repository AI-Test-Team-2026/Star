# Database Fallback System

## Overview

The Star application now implements a dynamic database fallback system that automatically switches between MySQL (online mode) and SQLite (offline mode). This ensures the application continues to work seamlessly even when the MySQL database server is unavailable.

## How It Works

### Automatic Detection

When the application starts, it:

1. **Tests MySQL Connection** - Attempts to connect to MySQL server with a 3-second timeout
2. **Fallback Decision** - If MySQL is unreachable, automatically switches to SQLite
3. **Transparent Operation** - All database operations work identically regardless of backend
4. **Logging** - Records which backend is active in `application/logs/db_fallback.log`

### Backend Indicator

The application provides runtime indicators showing which database backend is active:

- **MySQL (Online)** - Green badge with database icon
- **SQLite (Offline)** - Orange badge with HDD icon

## Configuration

### Primary Configuration File

Edit `application/config/db_config.php` to configure database settings:

```php
// MySQL Configuration (Online Mode)
$db_fallback_config['mysql'] = array(
    'hostname' => 'localhost',
    'username' => 'root',
    'password' => '',
    'database' => 'Himax_Automobile',
    'port'     => 3306,
    'timeout'  => 3, // Connection timeout in seconds
);

// SQLite Configuration (Offline Mode)
$db_fallback_config['sqlite'] = array(
    'path' => APPPATH . '../db/cache.db',
);

// Behavior Settings
$db_fallback_config['settings'] = array(
    'force_sqlite' => false,      // Force SQLite for testing
    'enable_logging' => true,      // Enable detailed logging
    'log_file' => APPPATH . 'logs/db_fallback.log',
);
```

### Environment Variables

You can override configuration using environment variables in `.env` file:

```bash
# MySQL Settings
DB_HOSTNAME=localhost
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=Himax_Automobile
DB_PORT=3306

# SQLite Settings
SQLITE_PATH=db/cache.db

# Force SQLite mode (useful for testing offline)
FORCE_SQLITE=false

# Enable fallback logging
DB_FALLBACK_LOGGING=true
```

## Database Schema

### SQLite Schema

The SQLite database schema is defined in `db/schema.sql` and automatically initialized when SQLite is first used. The schema includes:

#### Core Tables

- **pa5478_projects** - Project information
- **pa5478_version_lists** - Version release information
- **pa5478_table_flash_func** - Flash function data
- **pa5478_table_flash_header** - Flash header data
- **pa5478_table_hw_config_1_cod_fw_config** - Hardware configuration
- **pa5478_table_tp_hw_config_1_auto_self** - Auto self-test configuration
- **pa5478_table_tp_adc_config_normal_f0** - ADC configuration F0
- **pa5478_table_tp_adc_config_normal_f1** - ADC configuration F1
- **pa5478_table_dd_header** - DD header data
- **pa5478_table_tp_p2p_table** - P2P table data
- **pa5478_table_tp_version_table** - TP version data
- **pa5478_table_others** - Other configuration data
- **pa_users** - User authentication

#### Indexes

Automatically created for performance:

- `idx_version_lists_project` - On project_id
- `idx_version_lists_version` - On version
- `idx_projects_panel` - On panel_name

### Schema Compatibility

The SQLite schema is designed to be compatible with the MySQL schema. Key considerations:

- **AUTO_INCREMENT** → **AUTOINCREMENT** in SQLite
- **VARCHAR** lengths maintained for compatibility
- **FOREIGN KEY** constraints enabled
- **TEXT** type used for large data fields
- **REAL** type for floating-point numbers

## Extending the Schema

### Adding New Tables

To add new tables to the SQLite schema:

1. **Edit schema.sql**:

```sql
CREATE TABLE IF NOT EXISTS your_new_table (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    data TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

2. **Add indexes if needed**:

```sql
CREATE INDEX IF NOT EXISTS idx_your_table_name ON your_new_table(name);
```

3. **Delete existing SQLite database** to force re-initialization:

```bash
rm db/cache.db
```

4. **Restart the application** - Schema will be automatically initialized

### Modifying Existing Tables

To modify existing tables:

1. Update `db/schema.sql` with new structure
2. Delete `db/cache.db` to force fresh initialization
3. Restart application

**Note**: For production systems, consider implementing proper migrations instead of deleting the database.

## SQL Compatibility

### Compatible Queries

Most SQL queries work identically in both MySQL and SQLite:

```php
// SELECT queries
$query = $this->db->get_where('pa5478_projects', array('project_id' => $id));

// INSERT queries
$this->db->insert('pa5478_projects', $data);

// UPDATE queries
$this->db->where('project_id', $id);
$this->db->update('pa5478_projects', $data);

// DELETE queries
$this->db->where('project_id', $id);
$this->db->delete('pa5478_projects');
```

### Potential Incompatibilities

Be aware of these differences:

#### 1. String Concatenation

**MySQL**:
```sql
CONCAT('prefix_', field_name)
```

**SQLite**:
```sql
'prefix_' || field_name
```

#### 2. Date Functions

**MySQL**:
```sql
NOW(), CURDATE(), DATE_FORMAT()
```

**SQLite**:
```sql
datetime('now'), date('now'), strftime()
```

#### 3. LIMIT with OFFSET

Both support, but syntax slightly different:

**MySQL/SQLite (both work)**:
```sql
SELECT * FROM table LIMIT 10 OFFSET 20
```

#### 4. Boolean Values

**MySQL**: Uses TINYINT(1)  
**SQLite**: Uses INTEGER (0 or 1)

Both are compatible in CodeIgniter's Active Record.

### Writing Compatible Queries

**Best Practice**: Use CodeIgniter's Query Builder for automatic compatibility:

```php
// This works on both backends
$this->db->select('*')
         ->from('pa5478_projects')
         ->where('project_id', $id)
         ->limit(10, 20)
         ->get();
```

## Usage in Code

### Checking Active Backend

```php
// Load helper
$this->load->helper('db_indicator');

// Check which backend is active
if (is_using_mysql()) {
    // MySQL-specific code
    echo "Online mode - using MySQL";
} else if (is_using_sqlite()) {
    // SQLite-specific code
    echo "Offline mode - using SQLite";
}
```

### Displaying Backend Indicator

In your views:

```php
<?php $this->load->helper('db_indicator'); ?>

<div class="database-status">
    <?php echo db_backend_badge(); ?>
</div>
```

This will display a badge like:
- 🟢 **MYSQL** (green) when online
- 🟠 **SQLITE** (orange) when offline

### Getting Backend Information

```php
$this->load->helper('db_indicator');
$indicator = get_db_backend_indicator();

// Returns array:
// [
//     'backend' => 'mysql' or 'sqlite',
//     'color' => 'success' or 'warning',
//     'message' => 'Connected to MySQL (Online)' or 'Connected to SQLite (Offline)',
//     'icon' => 'fa-database' or 'fa-hdd'
// ]
```

## Testing

### Test MySQL Mode

1. Ensure MySQL server is running
2. Configure correct MySQL credentials in `.env`
3. Start application
4. Check logs: `tail -f application/logs/db_fallback.log`
5. Should see: `[MYSQL] Successfully connected to MySQL`

### Test SQLite Mode

**Option 1: Stop MySQL Server**

```bash
# On Linux/Mac
sudo service mysql stop

# On Windows
net stop MySQL
```

**Option 2: Use Force SQLite Mode**

Edit `.env`:
```bash
FORCE_SQLITE=true
```

### Test Automatic Fallback

1. Start with MySQL running (should use MySQL)
2. Stop MySQL server
3. Restart application
4. Should automatically switch to SQLite
5. Check logs to confirm fallback occurred

### Verify Data Consistency

```php
// Test script to verify both backends work
public function test_database() {
    $this->load->helper('db_indicator');
    
    // Test insert
    $data = array(
        'panel_name' => 'test_panel_' . time(),
        'ic_ver' => 'v1.0',
        'panel_ver' => 1,
        'type' => 'A',
        'cascade_ic_num' => 1
    );
    $this->db->insert('pa5478_projects', $data);
    $insert_id = $this->db->insert_id();
    
    // Test select
    $query = $this->db->get_where('pa5478_projects', 
        array('project_id' => $insert_id));
    
    // Test update
    $this->db->where('project_id', $insert_id);
    $this->db->update('pa5478_projects', array('panel_ver' => 2));
    
    // Test delete
    $this->db->where('project_id', $insert_id);
    $this->db->delete('pa5478_projects');
    
    echo "Backend: " . $indicator['backend'] . " - All operations successful!";
}
```

## Troubleshooting

### Issue: Both MySQL and SQLite connections fail

**Check**:
1. MySQL credentials in `application/config/db_config.php`
2. SQLite directory permissions: `chmod 755 db/`
3. SQLite file permissions: `chmod 644 db/cache.db`
4. PHP PDO and SQLite3 extensions enabled

**Solution**:
```bash
# Check PHP extensions
php -m | grep -E 'pdo|sqlite'

# Should show:
# pdo_mysql
# pdo_sqlite
# sqlite3
```

### Issue: Schema not initialized in SQLite

**Check**:
1. `db/schema.sql` file exists
2. SQLite file is writable
3. Check logs: `application/logs/db_fallback.log`

**Solution**:
```bash
# Delete and let it reinitialize
rm db/cache.db

# Or manually initialize
cd db
sqlite3 cache.db < schema.sql
```

### Issue: Foreign key constraint failures in SQLite

**Check**:
1. Foreign keys are enabled: `PRAGMA foreign_keys = ON`
2. Parent records exist before inserting child records
3. Tables are created in correct order (parents before children)

**Solution**: The schema.sql file already handles this, but if issues persist:

```sql
-- Disable foreign keys temporarily
PRAGMA foreign_keys = OFF;

-- Do your operations

-- Re-enable foreign keys
PRAGMA foreign_keys = ON;
```

### Issue: Queries work in MySQL but fail in SQLite

**Common causes**:
1. MySQL-specific SQL functions
2. Different date/time handling
3. ENUM types (not supported in SQLite)

**Solution**: Use CodeIgniter's Query Builder for compatibility.

### Issue: Performance is slow in SQLite

**Solutions**:

```sql
-- Run these optimizations on SQLite
PRAGMA journal_mode = WAL;       -- Write-Ahead Logging
PRAGMA synchronous = NORMAL;     -- Less strict durability
PRAGMA cache_size = 10000;       -- Larger cache
PRAGMA temp_store = MEMORY;      -- Use memory for temp tables
```

Add to `db/schema.sql`:
```sql
-- Performance optimizations
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
PRAGMA cache_size = 10000;
PRAGMA temp_store = MEMORY;
```

## Logging

### Log File Location

`application/logs/db_fallback.log`

### Log Format

```
[YYYY-MM-DD HH:MM:SS] [LEVEL] [BACKEND] Message
```

### Example Log Entries

```
[2026-01-13 10:30:45] [INFO] [MYSQL] Successfully connected to MySQL database
[2026-01-13 10:35:12] [INFO] [SQLITE] MySQL connection failed, falling back to SQLite
[2026-01-13 10:35:12] [INFO] [SQLITE] Successfully connected to SQLite database
[2026-01-13 10:35:13] [INFO] [SQLITE] SQLite schema initialized
```

### Viewing Logs

```bash
# View all logs
cat application/logs/db_fallback.log

# View last 20 lines
tail -20 application/logs/db_fallback.log

# Follow logs in real-time
tail -f application/logs/db_fallback.log
```

### Disabling Logging

In `.env`:
```bash
DB_FALLBACK_LOGGING=false
```

## Backup and Migration

### Backup MySQL Database

```bash
mysqldump -u root -p Himax_Automobile > backup.sql
```

### Backup SQLite Database

```bash
cp db/cache.db db/cache.db.backup
```

Or:
```bash
sqlite3 db/cache.db ".backup db/cache.db.backup"
```

### Migrate from MySQL to SQLite

```bash
# Export from MySQL
mysqldump --compatible=ansi --skip-extended-insert \
  -u root -p Himax_Automobile > mysql_dump.sql

# Convert and import to SQLite (manual process)
# - Remove MySQL-specific syntax
# - Adjust AUTO_INCREMENT to AUTOINCREMENT
# - Import into SQLite
```

### Migrate from SQLite to MySQL

```bash
# Export from SQLite
sqlite3 db/cache.db .dump > sqlite_dump.sql

# Import to MySQL
mysql -u root -p Himax_Automobile < sqlite_dump.sql
```

## Best Practices

### 1. Use Query Builder

Always use CodeIgniter's Query Builder for maximum compatibility:

```php
// Good - works on both backends
$this->db->select('*')
         ->from('table')
         ->where('id', $id)
         ->get();

// Avoid - may not work on both
$this->db->query("SELECT * FROM table WHERE id = $id");
```

### 2. Test Both Backends

During development, regularly test with both MySQL and SQLite:

```bash
# Test with MySQL
FORCE_SQLITE=false php -S localhost:8000

# Test with SQLite
FORCE_SQLITE=true php -S localhost:8000
```

### 3. Handle Backend Differences

If you must use backend-specific features:

```php
$this->load->helper('db_indicator');

if (is_using_mysql()) {
    // MySQL-specific query
    $sql = "SELECT CONCAT(first_name, ' ', last_name) as full_name FROM users";
} else {
    // SQLite equivalent
    $sql = "SELECT first_name || ' ' || last_name as full_name FROM users";
}

$query = $this->db->query($sql);
```

### 4. Keep Schema in Sync

When modifying database structure:
1. Update MySQL schema
2. Update `db/schema.sql` 
3. Test both backends
4. Document changes

### 5. Regular Backups

```bash
# Automated backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)

# Backup MySQL
mysqldump -u root -p Himax_Automobile > backup_mysql_$DATE.sql

# Backup SQLite
cp db/cache.db backup_sqlite_$DATE.db
```

## Security Considerations

### SQLite File Permissions

```bash
# Set proper permissions
chmod 755 db/
chmod 644 db/cache.db
chown www-data:www-data db/cache.db  # Linux/Apache
```

### Protect Database Files

Ensure `.htaccess` protects the db directory:

```apache
# In /db/.htaccess
Deny from all
```

### Connection Timeouts

The 3-second MySQL timeout prevents long hangs but adjust if needed:

```php
// In db_config.php
'timeout' => 5,  // Increase for slow networks
```

## Performance Optimization

### SQLite Optimizations

In `db/schema.sql`, add:

```sql
-- Enable Write-Ahead Logging for better concurrency
PRAGMA journal_mode = WAL;

-- Reduce disk sync frequency (trades durability for speed)
PRAGMA synchronous = NORMAL;

-- Increase cache size (in pages, negative = KB)
PRAGMA cache_size = -64000;  -- 64MB cache

-- Store temp tables in memory
PRAGMA temp_store = MEMORY;
```

### MySQL Optimizations

In MySQL configuration:

```ini
[mysqld]
query_cache_type = 1
query_cache_size = 128M
```

## Support

For issues or questions:

1. Check logs: `application/logs/db_fallback.log`
2. Review this documentation
3. Test with both backends
4. Check CodeIgniter documentation for database usage

## Changelog

### Version 1.0.0 (2026-01-13)

- Initial implementation of database fallback system
- MySQL to SQLite automatic fallback
- Runtime backend detection
- Configuration via environment variables
- Comprehensive logging
- Helper functions for backend detection
- Complete SQLite schema matching MySQL
- Documentation and testing guidelines
