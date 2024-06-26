/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 */
export default function Edit( { attributes: { continuous }, setAttributes } ) {
	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps(
		{ className: 'slider-container' },
		{ allowedBlocks: [ 'core/cover', 'core/image', 'core/media-text' ] }
	);
	return (
		<div { ...blockProps }>
			<div { ...innerBlockProps }></div>
			<InspectorControls>
				<PanelBody title={ __( 'Slider Controls' ) }>
					<ToggleControl
						label={ __( 'Continuous' ) }
						help={ __(
							'If enabled, the slider will loop back to the first slide after the last slide.'
						) }
						checked={ continuous }
						onChange={ () =>
							setAttributes( { continuous: ! continuous } )
						}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
