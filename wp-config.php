<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //

if(strstr($_SERVER['SERVER_NAME'], 'fictional-university.local')) {
	define( 'DB_NAME', 'local' );
	define( 'DB_USER', 'root' );
	define( 'DB_PASSWORD', 'root' );
	define( 'DB_HOST', 'localhost' );
} else {
	define( 'DB_NAME', 'dbsataoapeui04' );
	define( 'DB_USER', 'u5tw5mgmokhvu' );
	define( 'DB_PASSWORD', 'h2J}1#4k@36F' );
	define( 'DB_HOST', '127.0.0.1' );
}

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'm+sCQ0Oz21AGgPnkr76LZdJVjSdSPirNisIyKizJgqdcjaNTzWPE8er0Z5gtHHgLDtq8rOgNjZsPn8VSqQgeCA==');
define('SECURE_AUTH_KEY',  'hvK/71c7gvifxjz9Yal8P3JScmgF5hzwur4KtJrACxuArf+JHL9rhNs9RKWvKc7M5yi3qpAZv+ZypIagVG0MyA==');
define('LOGGED_IN_KEY',    'Cy5arDv2qnG2RhmLpWZJYN2sh8JaE4iX5nrSJEmhjstMjbpmTKuhvZpug30ZT6oRe/aTwMi2DLDbP6bAXz9neQ==');
define('NONCE_KEY',        'da6DYuM3BHwbtGC8tI1ajbHGdc8BwRY+9x9v1A7ygGq5Fv3PqcFXABUgyWiUVOpL4IAA6vS4tMcxeryUzcgo5g==');
define('AUTH_SALT',        'RIPv+fRMUiCHn3OBe66YjrOtbxiVlQifIKJ5Nt+a4F/y4Ln2BpzEOYXCW+t7MXEt7t7kkJgcEwQzHMTfFW+Dlw==');
define('SECURE_AUTH_SALT', 'Lrjx1IyrfCkOMlNfIXZr1Jqjp9jU5BzDyyPexGAAn7ai0YaKab/lZ3h92V2qhZRcYN0O+SzrIuYmkjQHxCJUKA==');
define('LOGGED_IN_SALT',   'yaXRIFs5NYq8fKb+m2Bx/H1ZYQlar4rXHnqukjPYsCjCWZJs4b/+skCkezP5+mPvkBJGDxYgCPe6LwQZYi8rjA==');
define('NONCE_SALT',       '4yiwbAPlcZGmy9DmYs5X25KF8SAB1V3vlZqr6eIxxBstvX+sUgBoSY7/RNS+qZeU2qOkhUzgc//49aQcpf5nvw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
