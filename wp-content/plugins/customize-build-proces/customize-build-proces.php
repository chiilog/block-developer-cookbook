<?php
/**
 * Plugin Name:       Customize Build Proces
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.5
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       customize-build-proces
 *
 * @package block-developers-cookbook
 */

namespace BlockDevelopersCookbook;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function customize_build_proces_init_block() {
	register_block_type( __DIR__ . '/build/custom-block' );
}
add_action( 'init', __NAMESPACE__ . '\customize_build_proces_init_block' );

/**
 * Enqueue the JS and CSS in the block editor
 */
function customize_build_proces_enqueue_js_and_css() {
		customize_build_proces_enqueue_variation_js();
		customize_build_proces_enqueue_variation_css();
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\customize_build_proces_enqueue_js_and_css' );


/**
 * Enqueue the CSS on the front end.
 */
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\customize_build_proces_enqueue_variation_css' );


/**
 * Function to enqueue the variation JS.
 */
function customize_build_proces_enqueue_variation_js() {
	$js_file = plugin_dir_path( __FILE__ ) . '/build/variations.asset.php';
	if ( file_exists( $js_file ) ) {
		// Enqueue the JS file.
		$js_assets = include $js_file;
		wp_enqueue_script(
			'variation-script',
			plugin_dir_url( __FILE__ ) . '/build/variations.js',
			$js_assets['dependencies'],
			$js_assets['version'],
			true
		);
	}
}

/**
 * Function to enqueue the variation CSS.
 */
function customize_build_proces_enqueue_variation_css() {
	$css_file = plugin_dir_path( __FILE__ ) . '/build/variation-styles.asset.php';
	if ( file_exists( $css_file ) ) {
		// Enqueue the CSS file.
		$css_assets = include $css_file;
		wp_enqueue_style(
			'variation-style',
			plugin_dir_url( __FILE__ ) . '/build/variation-styles.css',
			$css_assets['dependencies'],
			$css_assets['version']
		);
	}
}

