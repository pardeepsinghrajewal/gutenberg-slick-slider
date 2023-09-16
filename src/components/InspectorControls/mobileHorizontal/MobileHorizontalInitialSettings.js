import React from "react";

import { ToggleControl } from "@wordpress/components";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

export const MobileHorizontalInitialSettings = (props) => 
{
  
  const { attributes, setAttributes } = props;
  

  const {
    dotsMH,
    arrowsMH,
    slidesToShowMH,
    slidesToScrollMH,
    breakpointMH
  } = attributes;

  function onChangeDotsMH(newValue) {
		setAttributes({ dotsMH: newValue });
	}

  function onChangeArrowsMH(newValue) {
		setAttributes({ arrowsMH: newValue });
	}

  function onChangeSlidesToShowMH(newValue) {
		setAttributes({ slidesToShowMH: newValue });
	}

  function onChangeSlidesToScrollMH(newValue) {
		setAttributes({ slidesToScrollMH: newValue });
	}

  function onChangeBreakPointMH(newValue) {
		setAttributes({ breakpointMH: newValue });
	}


	return (
		<>
      <NumberControl
				label="Break point"
				help="# Break point."
				value={breakpointMH}
				onChange={onChangeBreakPointMH}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>

			<ToggleControl
				label="Dots"
				help="Show dot indicators"
				checked={dotsMH}
				onChange={onChangeDotsMH}
			/>

			<ToggleControl
				label="Arrows"
				help="Prev/Next Arrows"
				checked={arrowsMH}
				onChange={onChangeArrowsMH}
			/>

			<NumberControl
				label="slides To Show"
				help="# of slides to show."
				value={slidesToShowMH}
				onChange={onChangeSlidesToShowMH}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>

			<NumberControl
				label="Slides To Scroll"
				help="# of slides to scroll."
				value={slidesToScrollMH}
				onChange={onChangeSlidesToScrollMH}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>
		</>
	);
};
