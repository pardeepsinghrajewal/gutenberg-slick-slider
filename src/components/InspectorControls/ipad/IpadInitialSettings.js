import React from "react";

import { ToggleControl } from "@wordpress/components";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

export const IpadInitialSettings = (props) => 
{
  
  const { attributes, setAttributes } = props;
  

  const {
    dotsIpad,
    arrowsIpad,
    slidesToShowIpad,
    slidesToScrollIpad,
    breakpointIpad
  } = attributes;

  function onChangeDotsIpad(newValue) {
		setAttributes({ dotsIpad: newValue });
	}

  function onChangeArrowsIpad(newValue) {
		setAttributes({ arrowsIpad: newValue });
	}

  function onChangeSlidesToShowIpad(newValue) {
		setAttributes({ slidesToShowIpad: newValue });
	}

  function onChangeSlidesToScrollIpad(newValue) {
		setAttributes({ slidesToScrollIpad: newValue });
	}

  function onChangeBreakPointIpad(newValue) {
		setAttributes({ breakpointIpad: newValue });
	}


	return (
		<>
      <NumberControl
				label="Break point"
				help="# Break point."
				value={breakpointIpad}
				onChange={onChangeBreakPointIpad}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>

			<ToggleControl
				label="Dots"
				help="Show dot indicators"
				checked={dotsIpad}
				onChange={onChangeDotsIpad}
			/>

			<ToggleControl
				label="Arrows"
				help="Prev/Next Arrows"
				checked={arrowsIpad}
				onChange={onChangeArrowsIpad}
			/>

			<NumberControl
				label="slides To Show"
				help="# of slides to show."
				value={slidesToShowIpad}
				onChange={onChangeSlidesToShowIpad}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>

			<NumberControl
				label="Slides To Scroll"
				help="# of slides to scroll."
				value={slidesToScrollIpad}
				onChange={onChangeSlidesToScrollIpad}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>
		</>
	);
};
