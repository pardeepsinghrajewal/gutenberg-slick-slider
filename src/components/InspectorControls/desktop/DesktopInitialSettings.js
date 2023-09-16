import React from "react";

import { ToggleControl } from "@wordpress/components";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

export const DesktopInitialSettings = (props) => 
{
  
  const { attributes, setAttributes } = props;
  

  const {
    dots,
    arrows,
    slidesToShow,
    slidesToScroll
  } = attributes;

  function onChangeDots(newValue) {
		setAttributes({ dots: newValue });
	}

  function onChangeArrows(newValue) {
		setAttributes({ arrows: newValue });
	}

  function onChangeSlidesToShow(newValue) {
		setAttributes({ slidesToShow: newValue });
	}

  function onChangeSlidesToScroll(newValue) {
		setAttributes({ slidesToScroll: newValue });
	}


	return (
		<>
			<ToggleControl
				label="Dots"
				help="Show dot indicators"
				checked={dots}
				onChange={onChangeDots}
			/>

			<ToggleControl
				label="Arrows"
				help="Prev/Next Arrows"
				checked={arrows}
				onChange={onChangeArrows}
			/>

			<NumberControl
				label="slides To Show"
				help="# of slides to show."
				value={slidesToShow}
				onChange={onChangeSlidesToShow}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>

			<NumberControl
				label="Slides To Scroll"
				help="# of slides to scroll."
				value={slidesToScroll}
				onChange={onChangeSlidesToScroll}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>
		</>
	);
};
