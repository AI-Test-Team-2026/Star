# Star Application

## Overview

This is a CodeIgniter-based web application for automotive testing and data management.

## Offline Operation

**This application runs completely offline with no external network dependencies.**

For complete offline setup and operation instructions, see **[OFFLINE-README.md](OFFLINE-README.md)**

## Quick Start

### Prerequisites
- PHP 5.6+ (7.x recommended)
- Web server or PHP built-in server
- Local database (MySQL/MariaDB)

### Installation

1. Clone the repository
2. Configure database in `application/config/database.php`
3. Start the server:
   ```bash
   php -S localhost:8000
   ```
4. Access at http://localhost:8000

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

- **[Offline Operation Guide](OFFLINE-README.md)** - Complete offline setup and usage
- **[Contributing Guidelines](contributing.md)** - How to contribute
- **[License](license.txt)** - License information

## Support

For issues, questions, or contributions, please refer to the documentation above.

## License

See license.txt for license information.
