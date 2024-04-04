<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$context = array_merge(
	$attributes,
	array(
		'slides'       => array(),
		'currentSlide' => 0,
		'totalSlides'  => 0,
	)
);
var_dump($attributes);
?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	data-wp-interactive="gallery-slider"
	<?php echo wp_interactivity_data_wp_context( $context ); ?>
>
	<div class="slider-container">
		<?php echo wp_kses_post( $content ); ?>
	</div>
	<div class="buttons">
		<button aria-label="go to previous slide" data-wp-on--click="actions.prevSlide">&lt;</button>
		<p>1/10</p>
		<button aria-label="go to next slide" data-wp-on--click="actions.nextSlide">&gt;</button>
	</div>
</div>
