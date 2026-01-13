# Star Application

## Overview

This is a CodeIgniter-based web application for automotive testing and data management with **dynamic database fallback** support.

## Key Features

- ✅ **Dynamic Database Fallback** - Automatically switches between MySQL (online) and SQLite (offline)
- ✅ Fully offline operation with no external network dependencies
- ✅ No CDN dependencies - all assets vendored locally
- ✅ Automotive test data management
- ✅ File upload and parsing
- ✅ Project and test management

## Database System

The application features an intelligent database system that:

1. **Attempts MySQL Connection First** - Tries to connect to MySQL server
2. **Automatic SQLite Fallback** - Switches to local SQLite when MySQL unavailable
3. **Transparent Operation** - All database operations work identically on both backends
4. **Runtime Indicator** - Shows which database backend is currently active

For detailed information, see **[DATABASE-FALLBACK.md](DATABASE-FALLBACK.md)**

## Quick Start

### Prerequisites
- PHP 5.6+ (7.x recommended)
- PHP extensions: `pdo_mysql`, `pdo_sqlite`, `sqlite3`, `mysqli`
- Web server or PHP built-in server
- **Database**: MySQL/MariaDB (online) OR SQLite (offline) - automatic fallback

### Installation

1. Clone the repository
2. Copy `.env.example` to `.env` and configure database settings
3. **Database Setup** (choose one):
   - **Online (MySQL)**: Configure MySQL credentials in `.env` or `application/config/db_config.php`
   - **Offline (SQLite)**: No setup needed - SQLite database auto-initializes
4. Start the server:
   ```bash
   php -S localhost:8000
   ```
5. Access at http://localhost:8000

The application will automatically:
- Connect to MySQL if available (online mode)
- Fall back to SQLite if MySQL unavailable (offline mode)

### Configuration

- Copy `.env.example` to `.env` and configure as needed
- See OFFLINE-README.md for detailed configuration options

## Features

- ✅ Fully offline operation
- ✅ No CDN dependencies
- ✅ All assets vendored locally
- ✅ Automotive test data management
- ✅ File upload and parsing
- ✅ Project and test management

## Documentation

- **[Database Fallback Guide](DATABASE-FALLBACK.md)** - MySQL/SQLite automatic fallback system
- **[Offline Operation Guide](OFFLINE-README.md)** - Complete offline setup and usage
- **[Contributing Guidelines](contributing.md)** - How to contribute
- **[License](license.txt)** - License information

## Support

For issues, questions, or contributions, please refer to the documentation above.

## License

See license.txt for license information.
