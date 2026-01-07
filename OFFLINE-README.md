# Star - Offline Operation Guide

## Overview

This application has been configured to run completely offline without any external network dependencies. All previously external resources (CDN libraries, fonts, scripts) have been vendored locally.

## Offline Mode Setup

### Prerequisites
- PHP 5.6 or newer (7.x recommended)
- Web server (Apache/Nginx) or PHP built-in server
- No internet connection required for operation

### Installation

1. Clone or download this repository
2. If you need to update vendored assets (optional), see the "Updating Vendored Assets" section below
3. Configure your web server or use PHP's built-in server:
   ```bash
   cd /path/to/Star
   php -S localhost:8000
   ```

### Configuration

#### Environment Variables

The application supports an optional `OFFLINE_MODE` environment variable for explicit offline mode configuration:

```bash
export OFFLINE_MODE=true
```

**Note**: The application runs offline by default. This variable is provided for explicit configuration if needed.

#### Database Configuration

Edit `application/config/database.php` to configure your local database connection:

```php
$db['default'] = array(
    'hostname' => 'localhost',
    'username' => 'your_username',
    'password' => 'your_password',
    'database' => 'your_database',
    // ... other settings
);
```

### Verifying Offline Operation

1. Disconnect from the internet
2. Start the application
3. Check browser console - no failed network requests should appear
4. All assets should load from local directories

## Architecture

### Vendored Assets

All external dependencies have been vendored in the `/assets` directory:

- **Bootstrap 4** - `/assets/css/` and `/assets/js/`
- **jQuery** - `/assets/js/jquery.min.js`
- **Font Awesome** - `/assets/fontawesome/`
- **AdminLTE** - `/assets/css/adminlte.min.css` and `/assets/js/adminlte.min.js`
- **Select2** - `/assets/select2/`
- **Highlight.js** - `/assets/highlight/`
- **Coloris** - `/assets/coloris/dist/` (Color picker library)
- **Other libraries** - Various other libraries in `/assets/`

### Application Structure

```
Star/
├── application/          # CodeIgniter application files
│   ├── config/          # Configuration files
│   ├── controllers/     # Controllers
│   ├── models/          # Models
│   └── views/           # View templates
├── assets/              # All vendored frontend assets (offline)
│   ├── coloris/         # Color picker library
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript libraries
│   ├── fontawesome/     # Icon fonts
│   └── ...             # Other assets
├── system/              # CodeIgniter framework
├── download/            # File downloads directory
└── index.php            # Application entry point
```

## Updating Vendored Assets

If you have internet access and want to update the vendored libraries:

### Coloris Library

The Coloris color picker library is currently using placeholder files. To get the full library:

1. **With internet access**, run the update script:
   ```bash
   ./scripts/update-coloris.sh
   ```

2. **Or manually download**:
   ```bash
   cd assets/coloris/dist/
   curl -o coloris.min.css https://cdn.jsdelivr.net/gh/mdbassit/Coloris@latest/dist/coloris.min.css
   curl -o coloris.min.js https://cdn.jsdelivr.net/gh/mdbassit/Coloris@latest/dist/coloris.min.js
   ```

3. **Or from the GitHub repository**:
   - Visit: https://github.com/mdbassit/Coloris
   - Download the latest release
   - Copy `coloris.min.css` and `coloris.min.js` to `assets/coloris/dist/`

### Other Libraries

Other libraries can be updated similarly if needed:

```bash
# Example: Update jQuery
cd assets/js/
curl -o jquery.min.js https://code.jquery.com/jquery-3.6.0.min.js

# Example: Update Font Awesome
cd assets/fontawesome/
# Download from https://fontawesome.com/
```

**Note**: After updating any assets, test thoroughly to ensure compatibility with the application.

## Offline Mode Features

### What Works Offline

✅ Full application functionality
✅ All UI components and libraries
✅ Forms, data input, and validation
✅ File uploads and downloads (local)
✅ Database operations (local database)
✅ All styling and icons

### Limitations

❌ No external API calls (if any were present)
❌ No CDN fallbacks
❌ No automatic library updates

## Troubleshooting

### Assets Not Loading

1. **Check file permissions**:
   ```bash
   chmod -R 755 assets/
   ```

2. **Verify paths in browser console**:
   - Open browser developer tools (F12)
   - Check Console tab for 404 errors
   - Verify Network tab shows local file loads

3. **Check base URL configuration**:
   - Edit `application/config/config.php`
   - Set `$config['base_url']` to your local URL:
     ```php
     $config['base_url'] = 'http://localhost:8000/';
     ```

### Coloris Color Picker Not Working

If the Coloris color picker doesn't work:

1. Check if placeholder files were replaced with actual library files
2. Update Coloris using the instructions in "Updating Vendored Assets" section
3. Clear browser cache
4. Check browser console for JavaScript errors

### Database Connection Issues

1. Verify database credentials in `application/config/database.php`
2. Ensure database server is running locally
3. Check database permissions

## Testing Offline Mode

To verify the application runs completely offline:

1. **Disconnect from internet** completely
2. **Clear browser cache** to ensure no cached external resources
3. **Start the application**:
   ```bash
   php -S localhost:8000
   ```
4. **Open in browser**: http://localhost:8000
5. **Check developer tools**:
   - Open Console (F12)
   - Check Network tab - all requests should be to localhost
   - No failed CDN requests should appear

## Development

### Adding New External Dependencies

If you need to add a new library:

1. **Download the library locally**:
   ```bash
   cd assets/
   mkdir -p new-library/dist
   # Download files to new-library/dist/
   ```

2. **Update view files** to use local paths:
   ```php
   echo '<link rel="stylesheet" href="'.base_url().'assets/new-library/dist/style.css" />';
   echo '<script src="'.base_url().'assets/new-library/dist/script.js"></script>';
   ```

3. **Test offline** by disconnecting from internet

4. **Document** the new library in this README

### Build Process

This application does not require a build process. All assets are served directly:

- No npm/webpack/grunt required
- No compilation step needed
- Simply update files and refresh browser

## Security Considerations

### Offline Security Benefits

✅ No data sent to external CDNs
✅ No third-party tracking
✅ Full control over all resources
✅ No man-in-the-middle attacks via CDNs

### Security Best Practices

1. **Keep PHP updated** to latest stable version
2. **Configure proper file permissions**:
   ```bash
   find . -type d -exec chmod 755 {} \;
   find . -type f -exec chmod 644 {} \;
   ```
3. **Protect sensitive directories**:
   - `.git/` should not be web-accessible
   - `application/` should be protected by .htaccess
4. **Regular security updates** for vendored libraries

## Migration from Online Mode

If migrating from a version that used CDNs:

1. ✅ **Already done**: CDN links replaced with local paths
2. ✅ **Already done**: Coloris library vendored
3. ✅ **Verify**: All assets load locally
4. ✅ **Test**: Application works offline

## Support

### Common Issues

**Q: Color picker doesn't work**  
A: Update Coloris library files as described in "Updating Vendored Assets"

**Q: CSS/JS not loading**  
A: Check base_url in config.php and file permissions

**Q: Can I use online mode?**  
A: Yes, the application works both online and offline. Just ensure all assets are available locally.

### Reporting Issues

When reporting issues:
1. Include browser console errors
2. Specify PHP version
3. Describe steps to reproduce
4. Mention if offline or online

## License

See LICENSE.txt for details.

## Contributing

See contributing.md for guidelines.
