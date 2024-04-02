<?php
/**
 * Plugin Name:       Acronym Format
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           2.0.3
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       acronym-format
 *
 * @package block-developers-cookbook
 */

namespace BlockDevelopersCookbook;

// Hooks.
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_files_for_acronym_format' );

/**
 * Enqueue the files for the format.
 */
function enqueue_files_for_acronym_format() {
	$acronym_file = plugin_dir_path( __FILE__ ) . '/build/acronym.asset.php';

	if ( file_exists( $acronym_file ) ) {
		$assets = include $acronym_file;
		wp_enqueue_script(
			'acronym-format',
			plugin_dir_url( __FILE__ ) . 'build/acronym.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);

		wp_enqueue_style(
			'acronym-format-styles',
			plugin_dir_url( __FILE__ ) . 'build/acronym.css',
			array(),
			$assets['version']
		);
	}
}
