/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Icon from './icon';
import AcronymPopover from './popover';

/**
 * The component to render in the toolbar.
 *
 * @param {Object}   props            The component props.
 * @param {boolean}  props.isActive   Whether the format is active.
 * @param {Function} props.onChange   Function to apply the format.
 * @param {Object}   props.value      The value of the rich text.
 * @param {Object}   props.contentRef Reference to the editable content.
 *
 * @return {WPElement} Element to render.
 */
function AcronymEdit( { isActive, onChange, value, contentRef } ) {
	const [ isPopoverVisible, setIsPopoverVisible ] = useState( false );

	const togglePopover = () => setIsPopoverVisible( ( state ) => ! state );

	return (
		<>
			<RichTextToolbarButton
				icon={ Icon }
				title={ __( 'Acronym', 'block-developer-cookbook' ) }
				isActive={ isActive }
				onClick={ () => togglePopover() }
			/>
			{ isPopoverVisible && (
				<AcronymPopover
					value={ value }
					onChange={ onChange }
					onClose={ togglePopover }
					contentRef={ contentRef }
				/>
			) }
		</>
	);
}

export default AcronymEdit;
