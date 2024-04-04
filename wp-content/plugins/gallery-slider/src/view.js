/**
 * WordPress dependencies
 */
import { store } from '@wordpress/interactivity';

store( "gallery-slider", {
	state: {},
	actions: {
		prevSlide: () => {
			console.log( 'Previous image' );
		},
		nextSlide: () => {
			console.log( 'Next image' );
		},
	},
	callbacks: {},
} );
