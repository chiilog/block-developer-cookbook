<?php
/**
 * Plugin Name:       Word Counter
 * Description:       A tutorial on how to lock post saving based on the word count.
 * Requires at least: 6.4
 * Requires PHP:      7.0
 * Version:           1.0.1
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       word-counter
 *
 * @package block-developers-cookbook
 */

namespace BlockDevelopersCookbook;

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_files_for_word_counter' );

/**
 * Enqueue the files for the format.
 */
function enqueue_files_for_word_counter() {
	$word_counter_file = plugin_dir_path( __FILE__ ) . '/build/word-counter.asset.php';

	if ( file_exists( $word_counter_file ) ) {
		$assets = include $word_counter_file;
		wp_enqueue_script(
			'word-counter',
			plugin_dir_url( __FILE__ ) . 'build/word-counter.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}
}
