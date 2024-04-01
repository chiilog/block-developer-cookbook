/*
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { count } from '@wordpress/wordcount';
import { serialize } from '@wordpress/blocks';

const Render = () => {
	// Get the blocks from the editor.
	const blocks = useSelect(
		( select ) => select( blockEditorStore ).getBlocks(),
		[]
	);

	// 日本語をカウントしたいので、characters_excluding_spaces を使う
	const numberOfWordsInContent = count( serialize( blocks ), 'characters_excluding_spaces' );

	return (
		<PluginPostStatusInfo>
			{ `There are ${ numberOfWordsInContent } words in the content` }
		</PluginPostStatusInfo>
	);
};

registerPlugin( 'block-developer-cookbook-word-counter', {
	render: Render,
} );
