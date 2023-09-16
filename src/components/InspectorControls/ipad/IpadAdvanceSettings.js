import React from "react";

import {

	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
	
} from "@wordpress/components";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

export const IpadAdvanceSettings = (props) => {
	const { attributes, setAttributes } = props;

	const {
		cssEaseIpad,
		dotsClassIpad,
		focusOnSelectIpad,
		easingIpad,
		edgeFrictionIpad,
		initialSlideIpad,
		lazyLoadIpad,
		respondToIpad,
		rowsIpad,
		slidesPerRowIpad,
		speedIpad,
		swipeToSlideIpad,
		useCSSIpad,
		useTransformIpad,
		variableWidthIpad,
		verticalSwipingIpad,
		waitForAnimateIpad,
		zIndexIpad,
	} = attributes;

	function advanceSettingsClick(e) {
		e.target.classList.toggle("down");
		e.target.classList.toggle("up");
		e.target
			.closest(".components-panel__body")
			.querySelector(".advanceSettings")
			.classList.toggle("wcHide");
	}

	function onChangeCssEaseIpad(newValue) {
		setAttributes({ cssEaseIpad: newValue });
	}

	function onChangeDotsClassIpad(newValue) {
		setAttributes({ dotsClassIpad: newValue });
	}

	function onChangeFocusOnSelectIpad(newValue) {
		setAttributes({ focusOnSelectIpad: newValue });
	}

	function onChangeEasingIpad(newValue) {
		setAttributes({ easingIpad: newValue });
	}

	function onChangeEdgeFrictionIpad(newValue) {
		setAttributes({ edgeFrictionIpad: newValue });
	}

	function onChangeInitialSlideIpad(newValue) {
		setAttributes({ initialSlideIpad: newValue });
	}

	function onChangeLazyLoadIpad(newValue) {
		setAttributes({ lazyLoadIpad: newValue });
	}

	function onChangeRespondToIpad(newValue) {
		setAttributes({ respondToIpad: newValue });
	}

	function onChangeRowsIpad(newValue) {
		setAttributes({ rowsIpad: newValue });
	}

	function onChangeSlidesPerRowIpad(newValue) {
		setAttributes({ slidesPerRowIpad: newValue });
	}

	function onChangeSpeedIpad(newValue) {
		setAttributes({ speedIpad: newValue });
	}

	function onChangeSwipeToSlideIpad(newValue) {
		setAttributes({ swipeToSlideIpad: newValue });
	}

	function onChangeUseCSSIpad(newValue) {
		setAttributes({ useCSSIpad: newValue });
	}

	function onChangeUseTransformIpad(newValue) {
		setAttributes({ useTransformIpad: newValue });
	}

	function onChangeVariableWidthIpad(newValue) {
		setAttributes({ variableWidthIpad: newValue });
	}

	function onChangeVerticalSwipingIpad(newValue) {
		setAttributes({ verticalSwipingIpad: newValue });
	}

	function onChangeWaitForAnimateIpad(newValue) {
		setAttributes({ waitForAnimateIpad: newValue });
	}

	function onChangeZIndexIpad(newValue) {
		setAttributes({ zIndexIpad: newValue });
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
					value={cssEaseIpad}
					onChange={onChangeCssEaseIpad}
				/>

				<TextControl
					label="Dots Class"
					help="Class for slide indicator dots container"
					value={dotsClassIpad}
					onChange={onChangeDotsClassIpad}
				/>

				<ToggleControl
					label="Focus On Select"
					help="Enable focus on selected element (click)"
					checked={focusOnSelectIpad}
					onChange={onChangeFocusOnSelectIpad}
				/>

				<TextControl
					label="Easing"
					help="Add easing for jQuery animate. Use with easing libraries or default easing methods"
					value={easingIpad}
					onChange={onChangeEasingIpad}
				/>

				<NumberControl
					label="Edge Friction"
					help="Resistance when swiping edges of non-infinite carousels"
					value={edgeFrictionIpad}
					onChange={onChangeEdgeFrictionIpad}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<NumberControl
					label="Initial Slide"
					help="Slide to start on"
					value={initialSlideIpad}
					onChange={onChangeInitialSlideIpad}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<RadioControl
					label="Lazy Load"
					help="Set lazy loading technique"
					selected={lazyLoadIpad}
					options={[
						{ label: "Ondemand", value: "ondemand" },
						{ label: "Progressive", value: "progressive" },
					]}
					onChange={onChangeLazyLoadIpad}
				/>

				{/* <ToggleControl
							label="Mobile First"
							help="Responsive settings use mobile first calculation"
							checked={mobileFirst}
							onChange={onChangeMobileFirst}
						/> */}

				<SelectControl
					label="Respond To"
					value={respondToIpad}
					options={[
						{ value: "window", label: "window" },
						{ value: "slider", label: "slider" },
						{ value: "min", label: "min" },
					]}
					onChange={onChangeRespondToIpad}
				/>

				<NumberControl
					label="Rows"
					help="Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row."
					value={rowsIpad}
					onChange={onChangeRowsIpad}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<NumberControl
					label="slides Per Row"
					help="With grid mode intialized via the rows option, this sets how many slides are in each grid row. dver."
					value={slidesPerRowIpad}
					onChange={onChangeSlidesPerRowIpad}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<NumberControl
					label="Slide fade animation speed"
					help="Slide/Fade animation speed"
					value={speedIpad}
					onChange={onChangeSpeedIpad}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<ToggleControl
					label="Swipe To Slide"
					help="Allow users to drag or swipe directly to a slide irrespective of slidesToScroll"
					checked={swipeToSlideIpad}
					onChange={onChangeSwipeToSlideIpad}
				/>

				<ToggleControl
					label="Use CSS"
					help="Enable/Disable CSS Transforms"
					checked={useCSSIpad}
					onChange={onChangeUseCSSIpad}
				/>

				<ToggleControl
					label="Use Transform"
					help="Enable/Disable CSS Transforms"
					checked={useTransformIpad}
					onChange={onChangeUseTransformIpad}
				/>

				<ToggleControl
					label="Variable Width"
					help="Variable width slides"
					checked={variableWidthIpad}
					onChange={onChangeVariableWidthIpad}
				/>

				<ToggleControl
					label="Vertical Swiping"
					help="Vertical swipe mode"
					checked={verticalSwipingIpad}
					onChange={onChangeVerticalSwipingIpad}
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
					checked={waitForAnimateIpad}
					onChange={onChangeWaitForAnimateIpad}
				/>

				<NumberControl
					label="Z-Index"
					help="Set the zIndex values for slides, useful for IE9 and lower"
					value={zIndexIpad}
					onChange={onChangeZIndexIpad}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>
			</div>
		</>
	);
};
