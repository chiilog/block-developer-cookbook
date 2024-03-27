/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transformers = {
	to: [
		{
			type: 'block',
			blocks: [ 'core/cover' ],
			transform: ( attributes, innerBlocks ) => {
				/**
				 * カバーブロックはインナーブロックを持つから、インナーブロック内で段落タグをつくり、
				 * 段落タグのcontent に対して attributes.message の内容を入れる
				 */
				const coverInnerBlocks = [
					...innerBlocks,
					createBlock( 'core/paragraph', {
						content: attributes.message,
					} )
				];
				return createBlock( 'core/cover', {}, coverInnerBlocks );
			},
		},
	],
	from: [
		{
			type: 'block',
			blocks: [ 'core/cover' ],
			transform: ( attributes, innerBlocks ) => {
				/**
				 * カバーブロック内の最初のブロックのcontent を Transformブロックのmessageにいれる。
				 * contentが空だったら「Transform Block Message」が入る
				 */
				const [ firstBlock ] = innerBlocks;
				return createBlock( 'block-developers-cookbook/transforms', {
					message: firstBlock.attributes.content || 'Transform Block Message',
				} );
			},
		},
	],
};
export default transformers;
