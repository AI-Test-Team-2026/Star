# Quick Start: Database Fallback System

This guide will help you quickly test the database fallback system in the Star application.

## What is Database Fallback?

The Star application automatically switches between:
- **MySQL (Online Mode)** - When MySQL server is available
- **SQLite (Offline Mode)** - When MySQL server is unavailable

This happens automatically with no configuration needed!

## Quick Test

### 1. Test Offline Mode (SQLite)

Simply start the application without MySQL running:

```bash
# Navigate to project directory
cd /path/to/Star

# Start PHP server
php -S localhost:8000

# Open browser
# Visit: http://localhost:8000
```

**Expected Result:**
- Application loads successfully
- Top navigation shows: 🟠 **SQLITE** badge
- All features work normally

### 2. Test Online Mode (MySQL)

If you have MySQL installed and running:

```bash
# Configure MySQL credentials
cp .env.example .env

# Edit .env and set your MySQL credentials:
# DB_HOSTNAME=localhost
# DB_USERNAME=root
# DB_PASSWORD=your_password
# DB_DATABASE=Himax_Automobile

# Start PHP server
php -S localhost:8000

# Open browser
# Visit: http://localhost:8000
```

**Expected Result:**
- Application loads successfully
- Top navigation shows: 🟢 **MYSQL** badge
- All features work normally

### 3. Test Automatic Fallback

Test that the system automatically switches:

```bash
# Start with MySQL running
php -S localhost:8000
# (Should show MYSQL badge)

# In another terminal, stop MySQL:
sudo service mysql stop  # Linux
# or
net stop MySQL          # Windows

# Restart the application
# (Should now show SQLITE badge)
```

## Visual Indicators

Look for the badge in the top-right navigation:

- 🟢 **MYSQL** (Green badge) = Online mode
- 🟠 **SQLITE** (Orange badge) = Offline mode

## Checking Logs

View which database backend is being used:

```bash
# View fallback log
cat application/logs/db_fallback.log

# Or watch in real-time
tail -f application/logs/db_fallback.log
```

Example log output:
```
[2026-01-13 10:30:45] [INFO] [MYSQL] Successfully connected to MySQL database
```

or

```
[2026-01-13 10:35:12] [INFO] [SQLITE] MySQL connection failed, falling back to SQLite
[2026-01-13 10:35:12] [INFO] [SQLITE] Successfully connected to SQLite database
```

## Force Offline Mode (for Testing)

To test offline mode even when MySQL is available:

Edit `.env`:
```bash
FORCE_SQLITE=true
```

Restart the application - it will now use SQLite regardless of MySQL availability.

## Troubleshooting

### "Database connection failed" error

**Check:**
1. PHP extensions installed: `php -m | grep -E 'pdo|sqlite|mysqli'`
2. File permissions: `chmod 755 db/ && chmod 644 db/*.db`
3. SQLite path exists: `mkdir -p db/`

### No database badge showing

**Check:**
1. Helper is loaded in view: `$this->load->helper('db_indicator');`
2. Bootstrap CSS is loaded (for badge styling)
3. View file includes the badge code

### SQLite not initializing

**Check:**
1. `db/schema.sql` file exists
2. Directory is writable: `chmod 755 db/`
3. Check logs: `cat application/logs/db_fallback.log`

## Next Steps

- Read [DATABASE-FALLBACK.md](DATABASE-FALLBACK.md) for complete documentation
- Learn about SQL compatibility between MySQL and SQLite
- Explore advanced configuration options

## Summary

✅ **No configuration needed** - Works out of the box  
✅ **Automatic detection** - Switches based on MySQL availability  
✅ **Visual feedback** - Badge shows current backend  
✅ **Transparent operation** - All features work on both backends  

The fallback system ensures your application works in any environment!
