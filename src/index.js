/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

import { IpadAttributes } from './components/attributes/ipad/IpadAttributes';
import { DesktopAttributes } from './components/attributes/desktop/DesktopAttributes';
import { MobileHorizontalAttributes } from './components/attributes/mobileHorizontal/MobileHorizontalAttributes';
import { MobileVerticalAttributes } from './components/attributes/mobileVertical/MobileVerticalAttributes';


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

const attributes = 
{
  attrImages: {
    type: "array",
    default: []
  },
  accessibility: {
    type: 'boolean',
    default: true,
  },
  ...IpadAttributes, 
  ...DesktopAttributes,
  ...MobileHorizontalAttributes,
  ...MobileVerticalAttributes
};

registerBlockType( metadata.name, {

  attributes: attributes,
  
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
