import React from "react";

import {

	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
	
} from "@wordpress/components";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

export const MobileHorizontalAdvanceSettings = (props) => {
	const { attributes, setAttributes } = props;

	const {
		cssEaseMH,
		dotsClassMH,
		focusOnSelectMH,
		easingMH,
		edgeFrictionMH,
		initialSlideMH,
		lazyLoadMH,
		respondToMH,
		rowsMH,
		slidesPerRowMH,
		speedMH,
		swipeToSlideMH,
		useCSSMH,
		useTransformMH,
		variableWidthMH,
		verticalSwipingMH,
		waitForAnimateMH,
		zIndexMH,
	} = attributes;

	function advanceSettingsClick(e) {
		e.target.classList.toggle("down");
		e.target.classList.toggle("up");
		e.target
			.closest(".components-panel__body")
			.querySelector(".advanceSettings")
			.classList.toggle("wcHide");
	}

	function onChangeCssEaseMH(newValue) {
		setAttributes({ cssEaseMH: newValue });
	}

	function onChangeDotsClassMH(newValue) {
		setAttributes({ dotsClassMH: newValue });
	}

	function onChangeFocusOnSelectMH(newValue) {
		setAttributes({ focusOnSelectMH: newValue });
	}

	function onChangeEasingMH(newValue) {
		setAttributes({ easingMH: newValue });
	}

	function onChangeEdgeFrictionMH(newValue) {
		setAttributes({ edgeFrictionMH: newValue });
	}

	function onChangeInitialSlideMH(newValue) {
		setAttributes({ initialSlideMH: newValue });
	}

	function onChangeLazyLoadMH(newValue) {
		setAttributes({ lazyLoadMH: newValue });
	}

	function onChangeRespondToMH(newValue) {
		setAttributes({ respondToMH: newValue });
	}

	function onChangeRowsMH(newValue) {
		setAttributes({ rowsMH: newValue });
	}

	function onChangeSlidesPerRowMH(newValue) {
		setAttributes({ slidesPerRowMH: newValue });
	}

	function onChangeSpeedMH(newValue) {
		setAttributes({ speedMH: newValue });
	}

	function onChangeSwipeToSlideMH(newValue) {
		setAttributes({ swipeToSlideMH: newValue });
	}

	function onChangeUseCSSMH(newValue) {
		setAttributes({ useCSSMH: newValue });
	}

	function onChangeUseTransformMH(newValue) {
		setAttributes({ useTransformMH: newValue });
	}

	function onChangeVariableWidthMH(newValue) {
		setAttributes({ variableWidthMH: newValue });
	}

	function onChangeVerticalSwipingMH(newValue) {
		setAttributes({ verticalSwipingMH: newValue });
	}

	function onChangeWaitForAnimateMH(newValue) {
		setAttributes({ waitForAnimateMH: newValue });
	}

	function onChangeZIndexMH(newValue) {
		setAttributes({ zIndexMH: newValue });
	}

	return (
		<>
			<button
				type="button"
				className="wc-arrow down"
				onClick={advanceSettingsClick}
			>
				Advance Settings
			</button>

			<div className="advanceSettings wcHide">
				<TextControl
					label="Css Ease"
					help="CSS3 Animation Easing"
					value={cssEaseMH}
					onChange={onChangeCssEaseMH}
				/>

				<TextControl
					label="Dots Class"
					help="Class for slide indicator dots container"
					value={dotsClassMH}
					onChange={onChangeDotsClassMH}
				/>

				<ToggleControl
					label="Focus On Select"
					help="Enable focus on selected element (click)"
					checked={focusOnSelectMH}
					onChange={onChangeFocusOnSelectMH}
				/>

				<TextControl
					label="Easing"
					help="Add easing for jQuery animate. Use with easing libraries or default easing methods"
					value={easingMH}
					onChange={onChangeEasingMH}
				/>

				<NumberControl
					label="Edge Friction"
					help="Resistance when swiping edges of non-infinite carousels"
					value={edgeFrictionMH}
					onChange={onChangeEdgeFrictionMH}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<NumberControl
					label="Initial Slide"
					help="Slide to start on"
					value={initialSlideMH}
					onChange={onChangeInitialSlideMH}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<RadioControl
					label="Lazy Load"
					help="Set lazy loading technique"
					selected={lazyLoadMH}
					options={[
						{ label: "Ondemand", value: "ondemand" },
						{ label: "Progressive", value: "progressive" },
					]}
					onChange={onChangeLazyLoadMH}
				/>

				{/* <ToggleControl
							label="Mobile First"
							help="Responsive settings use mobile first calculation"
							checked={mobileFirst}
							onChange={onChangeMobileFirst}
						/> */}

				<SelectControl
					label="Respond To"
					value={respondToMH}
					options={[
						{ value: "window", label: "window" },
						{ value: "slider", label: "slider" },
						{ value: "min", label: "min" },
					]}
					onChange={onChangeRespondToMH}
				/>

				<NumberControl
					label="Rows"
					help="Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row."
					value={rowsMH}
					onChange={onChangeRowsMH}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<NumberControl
					label="slides Per Row"
					help="With grid mode intialized via the rows option, this sets how many slides are in each grid row. dver."
					value={slidesPerRowMH}
					onChange={onChangeSlidesPerRowMH}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<NumberControl
					label="Slide fade animation speed"
					help="Slide/Fade animation speed"
					value={speedMH}
					onChange={onChangeSpeedMH}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<ToggleControl
					label="Swipe To Slide"
					help="Allow users to drag or swipe directly to a slide irrespective of slidesToScroll"
					checked={swipeToSlideMH}
					onChange={onChangeSwipeToSlideMH}
				/>

				<ToggleControl
					label="Use CSS"
					help="Enable/Disable CSS Transforms"
					checked={useCSSMH}
					onChange={onChangeUseCSSMH}
				/>

				<ToggleControl
					label="Use Transform"
					help="Enable/Disable CSS Transforms"
					checked={useTransformMH}
					onChange={onChangeUseTransformMH}
				/>

				<ToggleControl
					label="Variable Width"
					help="Variable width slides"
					checked={variableWidthMH}
					onChange={onChangeVariableWidthMH}
				/>

				<ToggleControl
					label="Vertical Swiping"
					help="Vertical swipe mode"
					checked={verticalSwipingMH}
					onChange={onChangeVerticalSwipingMH}
				/>

				{/* <ToggleControl
							label="RTL"
							help="Change the slider's direction to become right-to-left"
							checked={rtl}
							onChange={onChangeRtl}
						/> */}

				<ToggleControl
					label="Wait For Animate"
					help="Ignores requests to advance the slide while animating"
					checked={waitForAnimateMH}
					onChange={onChangeWaitForAnimateMH}
				/>

				<NumberControl
					label="Z-Index"
					help="Set the zIndex values for slides, useful for IE9 and lower"
					value={zIndexMH}
					onChange={onChangeZIndexMH}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>
			</div>
		</>
	);
};
