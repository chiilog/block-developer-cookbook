import { registerBlockVariation } from '@wordpress/blocks';

registerBlockVariation( 'core/group', {
	attributes: { className: 'is-custom-variation' },
} );
