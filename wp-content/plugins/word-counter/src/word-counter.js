/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { count } from '@wordpress/wordcount';
import { serialize } from '@wordpress/blocks';
import { useEffect, useState } from '@wordpress/element';
import { store as editorStore } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import WordCountDisplayComponent from './components/wordCountDisplay';

const Render = () => {
	// Get the blocks from the editor.,
	const blocks = useSelect(
		( select ) => select( blockEditorStore ).getBlocks(),
		[]
	);
	// Get the lockPostSaving and unlockPostSaving functions from the editor
	const { lockPostSaving, unlockPostSaving } = useDispatch( editorStore );

	// Define the word count display state.
	const [ wordCountDisplay, setWordCountDisplay ] = useState( 0 );

	// Track the changes in the content
	useEffect( () => {
		// Define a variable to track whether the post should be locked
		let lockPost = false;

		// Get the WordCount
		const currentWordCount = count( serialize( blocks ), 'characters_excluding_spaces' );
		setWordCountDisplay( currentWordCount );

		// If the word count is less than the required, lock the post saving.
		if ( currentWordCount < requiredWordCount ) {
			lockPost = true;
		}

		// Lock or enable saving.
		if ( lockPost === true ) {
			lockPostSaving();
		} else {
			unlockPostSaving();
		}
	}, [ blocks, lockPostSaving, unlockPostSaving ] );

	// The required number of words;
	const requiredWordCount = 10;

	return (
		<PluginPostStatusInfo>
			<WordCountDisplayComponent
				wordCount={ wordCountDisplay }
				required={ requiredWordCount }
			/>
		</PluginPostStatusInfo>
	);
};

registerPlugin( 'block-developer-cookbook-word-counter', {
	render: Render,
} );
