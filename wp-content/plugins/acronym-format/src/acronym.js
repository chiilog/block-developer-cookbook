/**
 * WordPress dependencies
 */
import { registerFormatType } from '@wordpress/rich-text';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './editor.scss';
import AcronymEdit from './edit';

// The name of the format type.
export const name = 'block-developer-cookbook/acronym';

// The format type definition.
export const acronymFormat = {
	title: __( 'Acronym', 'block-developers-cookbook' ),
	tagName: 'abbr',
	className: 'bdc-acronym',
	edit: AcronymEdit,
};

registerFormatType( name, acronymFormat );
