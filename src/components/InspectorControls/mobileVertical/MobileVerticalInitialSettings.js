import React from "react";

import { ToggleControl } from "@wordpress/components";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

export const MobileVerticalInitialSettings = (props) => 
{
  
  const { attributes, setAttributes } = props;
  

  const {
    dotsMV,
    arrowsMV,
    slidesToShowMV,
    slidesToScrollMV,
    breakpointMV
  } = attributes;

  function onChangeDotsMV(newValue) {
		setAttributes({ dotsMV: newValue });
	}

  function onChangeArrowsMV(newValue) {
		setAttributes({ arrowsMV: newValue });
	}

  function onChangeSlidesToShowMV(newValue) {
		setAttributes({ slidesToShowMV: newValue });
	}

  function onChangeSlidesToScrollMV(newValue) {
		setAttributes({ slidesToScrollMV: newValue });
	}

  function onChangeBreakPointMV(newValue) {
		setAttributes({ breakpointMV: newValue });
	}


	return (
		<>
      <NumberControl
				label="Break point"
				help="# Break point."
				value={breakpointMV}
				onChange={onChangeBreakPointMV}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>

			<ToggleControl
				label="Dots"
				help="Show dot indicators"
				checked={dotsMV}
				onChange={onChangeDotsMV}
			/>

			<ToggleControl
				label="Arrows"
				help="Prev/Next Arrows"
				checked={arrowsMV}
				onChange={onChangeArrowsMV}
			/>

			<NumberControl
				label="slides To Show"
				help="# of slides to show."
				value={slidesToShowMV}
				onChange={onChangeSlidesToShowMV}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>

			<NumberControl
				label="Slides To Scroll"
				help="# of slides to scroll."
				value={slidesToScrollMV}
				onChange={onChangeSlidesToScrollMV}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>
		</>
	);
};
