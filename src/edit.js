/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

/** wc **/
import React, { useState, useEffect } from "react";
import {  InspectorControls } from "@wordpress/block-editor";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

import {
	PanelBody,
} from "@wordpress/components";


import { DesktopInitialSettings } from './components/InspectorControls/desktop/DesktopInitialSettings';

import { DesktopMoreSettings } from './components/InspectorControls/desktop/DesktopMoreSettings';

import { DesktopAdvanceSettings } from './components/InspectorControls/desktop/DesktopAdvanceSettings';



import { IpadInitialSettings } from './components/InspectorControls/ipad/IpadInitialSettings';

import { IpadMoreSettings } from './components/InspectorControls/ipad/IpadMoreSettings';

import { IpadAdvanceSettings } from './components/InspectorControls/ipad/IpadAdvanceSettings';



import { MobileHorizontalInitialSettings } from './components/InspectorControls/mobileHorizontal/MobileHorizontalInitialSettings';

import { MobileHorizontalMoreSettings } from './components/InspectorControls/mobileHorizontal/MobileHorizontalMoreSettings';

import { MobileHorizontalAdvanceSettings } from './components/InspectorControls/mobileHorizontal/MobileHorizontalAdvanceSettings';



import { MobileVerticalInitialSettings } from './components/InspectorControls/mobileVertical/MobileVerticalInitialSettings';

import { MobileVerticalMoreSettings } from './components/InspectorControls/mobileVertical/MobileVerticalMoreSettings';

import { MobileVerticalAdvanceSettings } from './components/InspectorControls/mobileVertical/MobileVerticalAdvanceSettings';



const ALLOWED_MEDIA_TYPES = ["image"];

export default function Edit(props) 
{
	const { attributes, setAttributes } = props;

	const { attrImages } = attributes; // used to store into database

	const [images, setImages] = useState([]); // used for code logic

	useEffect(() => {
		showImagesOnPageLoad();
	}, []);

  /** sortable function **/
  jQuery(document).ready(function ($) 
  {
    $('.slick-ul').sortable(
    {
      update: function (event, ui) 
      {        
        const newOrder = [];
        jQuery('.slick-ul li img').each(function () 
        {
          newOrder.push({ url: $(this).attr('src') });
        });
        setAttributes({ attrImages: newOrder });
      },
    });
  });

  function showImagesOnPageLoad() 
  {
		let imagesArr = [];
		if (Array.isArray(attrImages)) 
    {
			imagesArr = attrImages.map((ele) => ({ url: ele.url }));
			setImages(imagesArr);
		}
	}

	function selectImages(media) 
  {
		if (Array.isArray(media)) 
    {
      let imagesArr = [];
		  if (Array.isArray(attrImages)) 
      {
			  imagesArr = attrImages.map((ele) => ({ url: ele.url })); 
		  }

      if (Array.isArray(media)) 
      {
        imagesArr = imagesArr.concat(media.map((ele) => ({ url: ele.url })));
      }      

			setImages(imagesArr);
			setAttributes({ attrImages: imagesArr });

		}
	}

	function removeImage(e) 
  {
		const li = getParentByTagName(e.target, "li");
		if (li && typeof li === "object") 
    {
			const indx = parseInt(li.getAttribute("data-index"), 10);
			const updatedImages = images.filter((image, index) => index !== indx);
			setImages(updatedImages);
      setAttributes({ attrImages:updatedImages });

			wp.data.dispatch("core/editor").editPost({ meta: { _my_meta_data: 1 } });
		}
	}	

	function getParentByTagName(element, tagName) 
  {
		tagName = tagName.toLowerCase();
		while (element.parentNode) {
			element = element.parentNode;

			if (element.tagName.toLowerCase() === tagName) 
      {
				return element;
			}
		}

		return null;
	}

	return (
		<>
			<InspectorControls>
         
				<PanelBody title={__("Desktop")}   initialOpen={ false }>
          <DesktopInitialSettings  attributes={props.attributes} setAttributes={props.setAttributes} />
          <DesktopMoreSettings  attributes={props.attributes} setAttributes={props.setAttributes} />
          <DesktopAdvanceSettings  attributes={props.attributes} setAttributes={props.setAttributes} />
				</PanelBody>

        <PanelBody title={__("Ipad")} initialOpen={ false }>
          <IpadInitialSettings  attributes={props.attributes} setAttributes={props.setAttributes} />
          <IpadMoreSettings  attributes={props.attributes} setAttributes={props.setAttributes} />
          <IpadAdvanceSettings  attributes={props.attributes} setAttributes={props.setAttributes} />
				</PanelBody>

        <PanelBody title={__("Mobile Horizontal")} initialOpen={ false }>
          <MobileHorizontalInitialSettings  attributes={props.attributes} setAttributes={props.setAttributes} />
          <MobileHorizontalMoreSettings  attributes={props.attributes} setAttributes={props.setAttributes} />
          <MobileHorizontalAdvanceSettings  attributes={props.attributes} setAttributes={props.setAttributes} />
				</PanelBody>


        <PanelBody title={__("Mobile Vertical")} initialOpen={ false }>
          <MobileVerticalInitialSettings  attributes={props.attributes} setAttributes={props.setAttributes} />
          <MobileVerticalMoreSettings  attributes={props.attributes} setAttributes={props.setAttributes} />
          <MobileVerticalAdvanceSettings  attributes={props.attributes} setAttributes={props.setAttributes} />
				</PanelBody>

        
			</InspectorControls>    

			<div {...useBlockProps()}>
				{images !== null && images !== undefined && images.length > 0 && (
					<ul className="slick-ul">
						{images.map((image, index) => {
							return (
								<li key={index} data-index={index} className="ui-state-default">
									<img src={image["url"]} style={{ maxWidth: 200 }} />
									<span onClick={removeImage} className="close-icon">
									</span>
								</li>
							);
						})}
					</ul>
				)}
				<MediaUploadCheck>
					<MediaUpload
						multiple={true}
						title={"Please select images for slider"}
						modalClass={"modalClassForAdmin"}
						allowedTypes={ALLOWED_MEDIA_TYPES}
						addToGallery={false}
						gallery={false}
						// value={imagesIds}
						onSelect={(media) => selectImages(media)}
						render={({ open }) => (
							<Button onClick={open} className="wc-select-image">Please select images for slider</Button>
						)}
					/>
				</MediaUploadCheck>
			</div>
		</>
	);
}