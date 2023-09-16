/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
import React from "react";


import { DesktopSettings } from './components/save/DesktopSettings';
import { IpadSettings } from './components/save/IpadSettings';
import { MobileHorizontalSettings } from './components/save/MobileHorizontalSettings';
import { MobileVerticalSettings } from './components/save/MobileVerticalSettings';

export default function save({ attributes }) {
	
  let settings = {};

  let settingsIpad = {}
  
  let settingsMH = {}

  let settingsMV = {}

  settings = DesktopSettings(attributes);

  settingsIpad = IpadSettings(attributes);

  settingsMH = MobileHorizontalSettings(attributes);

  settingsMV = MobileVerticalSettings(attributes);

  settings['responsive'] = [];

  if(Object.keys(settingsIpad).length > 0) 
  {
    settings['responsive'].push(settingsIpad);
  }
  
  if(Object.keys(settingsMH).length > 0) 
  {
    settings['responsive'].push(settingsMH);
  }

  if(Object.keys(settingsMV).length > 0) 
  {
    settings['responsive'].push(settingsMV);
  }
  

	return (
		<>
			<div {...useBlockProps.save()}>
				{attributes.attrImages !== null &&
					attributes.attrImages !== undefined &&
					attributes.attrImages.length > 0 && (
						<>
							<ul className="slick-ul" data-settings={JSON.stringify(settings)} >
								{attributes.attrImages.map((image, index) => (
									<li key={index}>
										<img src={image.url} alt={`Image ${image.id}`} />
									</li>
								))}
							</ul>
						</>
					)}
			</div>
		</>
	);
}