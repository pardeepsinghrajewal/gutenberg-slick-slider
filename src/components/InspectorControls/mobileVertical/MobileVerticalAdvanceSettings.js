import React from "react";

import {

	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
	
} from "@wordpress/components";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

export const MobileVerticalAdvanceSettings = (props) => {
	const { attributes, setAttributes } = props;

	const {
		cssEaseMV,
		dotsClassMV,
		focusOnSelectMV,
		easingMV,
		edgeFrictionMV,
		initialSlideMV,
		lazyLoadMV,
		respondToMV,
		rowsMV,
		slidesPerRowMV,
		speedMV,
		swipeToSlideMV,
		useCSSMV,
		useTransformMV,
		variableWidthMV,
		verticalSwipingMV,
		waitForAnimateMV,
		zIndexMV,
	} = attributes;

	function advanceSettingsClick(e) {
		e.target.classList.toggle("down");
		e.target.classList.toggle("up");
		e.target
			.closest(".components-panel__body")
			.querySelector(".advanceSettings")
			.classList.toggle("wcHide");
	}

	function onChangeCssEaseMV(newValue) {
		setAttributes({ cssEaseMV: newValue });
	}

	function onChangeDotsClassMV(newValue) {
		setAttributes({ dotsClassMV: newValue });
	}

	function onChangeFocusOnSelectMV(newValue) {
		setAttributes({ focusOnSelectMV: newValue });
	}

	function onChangeEasingMV(newValue) {
		setAttributes({ easingMV: newValue });
	}

	function onChangeEdgeFrictionMV(newValue) {
		setAttributes({ edgeFrictionMV: newValue });
	}

	function onChangeInitialSlideMV(newValue) {
		setAttributes({ initialSlideMV: newValue });
	}

	function onChangeLazyLoadMV(newValue) {
		setAttributes({ lazyLoadMV: newValue });
	}

	function onChangeRespondToMV(newValue) {
		setAttributes({ respondToMV: newValue });
	}

	function onChangeRowsMV(newValue) {
		setAttributes({ rowsMV: newValue });
	}

	function onChangeSlidesPerRowMV(newValue) {
		setAttributes({ slidesPerRowMV: newValue });
	}

	function onChangeSpeedMV(newValue) {
		setAttributes({ speedMV: newValue });
	}

	function onChangeSwipeToSlideMV(newValue) {
		setAttributes({ swipeToSlideMV: newValue });
	}

	function onChangeUseCSSMV(newValue) {
		setAttributes({ useCSSMV: newValue });
	}

	function onChangeUseTransformMV(newValue) {
		setAttributes({ useTransformMV: newValue });
	}

	function onChangeVariableWidthMV(newValue) {
		setAttributes({ variableWidthMV: newValue });
	}

	function onChangeVerticalSwipingMV(newValue) {
		setAttributes({ verticalSwipingMV: newValue });
	}

	function onChangeWaitForAnimateMV(newValue) {
		setAttributes({ waitForAnimateMV: newValue });
	}

	function onChangeZIndexMV(newValue) {
		setAttributes({ zIndexMV: newValue });
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
					value={cssEaseMV}
					onChange={onChangeCssEaseMV}
				/>

				<TextControl
					label="Dots Class"
					help="Class for slide indicator dots container"
					value={dotsClassMV}
					onChange={onChangeDotsClassMV}
				/>

				<ToggleControl
					label="Focus On Select"
					help="Enable focus on selected element (click)"
					checked={focusOnSelectMV}
					onChange={onChangeFocusOnSelectMV}
				/>

				<TextControl
					label="Easing"
					help="Add easing for jQuery animate. Use with easing libraries or default easing methods"
					value={easingMV}
					onChange={onChangeEasingMV}
				/>

				<NumberControl
					label="Edge Friction"
					help="Resistance when swiping edges of non-infinite carousels"
					value={edgeFrictionMV}
					onChange={onChangeEdgeFrictionMV}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<NumberControl
					label="Initial Slide"
					help="Slide to start on"
					value={initialSlideMV}
					onChange={onChangeInitialSlideMV}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<RadioControl
					label="Lazy Load"
					help="Set lazy loading technique"
					selected={lazyLoadMV}
					options={[
						{ label: "Ondemand", value: "ondemand" },
						{ label: "Progressive", value: "progressive" },
					]}
					onChange={onChangeLazyLoadMV}
				/>

				{/* <ToggleControl
							label="Mobile First"
							help="Responsive settings use mobile first calculation"
							checked={mobileFirst}
							onChange={onChangeMobileFirst}
						/> */}

				<SelectControl
					label="Respond To"
					value={respondToMV}
					options={[
						{ value: "window", label: "window" },
						{ value: "slider", label: "slider" },
						{ value: "min", label: "min" },
					]}
					onChange={onChangeRespondToMV}
				/>

				<NumberControl
					label="Rows"
					help="Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row."
					value={rowsMV}
					onChange={onChangeRowsMV}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<NumberControl
					label="slides Per Row"
					help="With grid mode intialized via the rows option, this sets how many slides are in each grid row. dver."
					value={slidesPerRowMV}
					onChange={onChangeSlidesPerRowMV}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<NumberControl
					label="Slide fade animation speed"
					help="Slide/Fade animation speed"
					value={speedMV}
					onChange={onChangeSpeedMV}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<ToggleControl
					label="Swipe To Slide"
					help="Allow users to drag or swipe directly to a slide irrespective of slidesToScroll"
					checked={swipeToSlideMV}
					onChange={onChangeSwipeToSlideMV}
				/>

				<ToggleControl
					label="Use CSS"
					help="Enable/Disable CSS Transforms"
					checked={useCSSMV}
					onChange={onChangeUseCSSMV}
				/>

				<ToggleControl
					label="Use Transform"
					help="Enable/Disable CSS Transforms"
					checked={useTransformMV}
					onChange={onChangeUseTransformMV}
				/>

				<ToggleControl
					label="Variable Width"
					help="Variable width slides"
					checked={variableWidthMV}
					onChange={onChangeVariableWidthMV}
				/>

				<ToggleControl
					label="Vertical Swiping"
					help="Vertical swipe mode"
					checked={verticalSwipingMV}
					onChange={onChangeVerticalSwipingMV}
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
					checked={waitForAnimateMV}
					onChange={onChangeWaitForAnimateMV}
				/>

				<NumberControl
					label="Z-Index"
					help="Set the zIndex values for slides, useful for IE9 and lower"
					value={zIndexMV}
					onChange={onChangeZIndexMV}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>
			</div>
		</>
	);
};
