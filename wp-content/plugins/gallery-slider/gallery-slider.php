<?php
/**
 * Plugin Name:       Gallery Slider
 * Description:       A gallery slider built using the Interactivity API
 * Requires at least: 6.4
 * Requires PHP:      7.0
 * Version:           1.0.2
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gallery-slider
 *
 * @package           block-developers-cookbook
 */

namespace BlockDevelopersCookbook;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function gallery_slider_block_init() {
	register_block_type_from_metadata( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\gallery_slider_block_init' );
