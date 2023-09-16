import React from "react";

import {
	CheckboxControl,
	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
	PanelBody,
} from "@wordpress/components";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

export const DesktopAdvanceSettings = (props) => {
	const { attributes, setAttributes } = props;

	const {
		cssEase,
		dotsClass,
		focusOnSelect,
		easing,
		edgeFriction,
		initialSlide,
		lazyLoad,
		respondTo,
		rows,
		slidesPerRow,
		speed,
		swipeToSlide,
		useCSS,
		useTransform,
		variableWidth,
		verticalSwiping,
		waitForAnimate,
		zIndex,
	} = attributes;

	function advanceSettingsClick(e) {
		e.target.classList.toggle("down");
		e.target.classList.toggle("up");
		e.target
			.closest(".components-panel__body")
			.querySelector(".advanceSettings")
			.classList.toggle("wcHide");
	}

	function onChangeCssEase(newValue) {
		setAttributes({ cssEase: newValue });
	}

	function onChangeDotsClass(newValue) {
		setAttributes({ dotsClass: newValue });
	}

	function onChangeFocusOnSelect(newValue) {
		setAttributes({ focusOnSelect: newValue });
	}

	function onChangeEasing(newValue) {
		setAttributes({ easing: newValue });
	}

	function onChangeEdgeFriction(newValue) {
		setAttributes({ edgeFriction: newValue });
	}

	function onChangeInitialSlide(newValue) {
		setAttributes({ initialSlide: newValue });
	}

	function onChangeLazyLoad(newValue) {
		setAttributes({ lazyLoad: newValue });
	}

	function onChangeRespondTo(newValue) {
		setAttributes({ respondTo: newValue });
	}

	function onChangeRows(newValue) {
		setAttributes({ rows: newValue });
	}

	function onChangeSlidesPerRow(newValue) {
		setAttributes({ slidesPerRow: newValue });
	}

	function onChangeSpeed(newValue) {
		setAttributes({ speed: newValue });
	}

	function onChangeSwipeToSlide(newValue) {
		setAttributes({ swipeToSlide: newValue });
	}

	function onChangeUseCSS(newValue) {
		setAttributes({ useCSS: newValue });
	}

	function onChangeUseTransform(newValue) {
		setAttributes({ useTransform: newValue });
	}

	function onChangeVariableWidth(newValue) {
		setAttributes({ variableWidth: newValue });
	}

	function onChangeVerticalSwiping(newValue) {
		setAttributes({ verticalSwiping: newValue });
	}

	function onChangeWaitForAnimate(newValue) {
		setAttributes({ waitForAnimate: newValue });
	}

	function onChangeZIndex(newValue) {
		setAttributes({ zIndex: newValue });
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
					value={cssEase}
					onChange={onChangeCssEase}
				/>

				<TextControl
					label="Dots Class"
					help="Class for slide indicator dots container"
					value={dotsClass}
					onChange={onChangeDotsClass}
				/>

				<ToggleControl
					label="Focus On Select"
					help="Enable focus on selected element (click)"
					checked={focusOnSelect}
					onChange={onChangeFocusOnSelect}
				/>

				<TextControl
					label="Easing"
					help="Add easing for jQuery animate. Use with easing libraries or default easing methods"
					value={easing}
					onChange={onChangeEasing}
				/>

				<NumberControl
					label="Edge Friction"
					help="Resistance when swiping edges of non-infinite carousels"
					value={edgeFriction}
					onChange={onChangeEdgeFriction}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<NumberControl
					label="Initial Slide"
					help="Slide to start on"
					value={initialSlide}
					onChange={onChangeInitialSlide}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<RadioControl
					label="Lazy Load"
					help="Set lazy loading technique"
					selected={lazyLoad}
					options={[
						{ label: "Ondemand", value: "ondemand" },
						{ label: "Progressive", value: "progressive" },
					]}
					onChange={onChangeLazyLoad}
				/>

				{/* <ToggleControl
							label="Mobile First"
							help="Responsive settings use mobile first calculation"
							checked={mobileFirst}
							onChange={onChangeMobileFirst}
						/> */}

				<SelectControl
					label="Respond To"
					value={respondTo}
					options={[
						{ value: "window", label: "window" },
						{ value: "slider", label: "slider" },
						{ value: "min", label: "min" },
					]}
					onChange={onChangeRespondTo}
				/>

				<NumberControl
					label="Rows"
					help="Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row."
					value={rows}
					onChange={onChangeRows}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<NumberControl
					label="slides Per Row"
					help="With grid mode intialized via the rows option, this sets how many slides are in each grid row. dver."
					value={slidesPerRow}
					onChange={onChangeSlidesPerRow}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<NumberControl
					label="Slide fade animation speed"
					help="Slide/Fade animation speed"
					value={speed}
					onChange={onChangeSpeed}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<ToggleControl
					label="Swipe To Slide"
					help="Allow users to drag or swipe directly to a slide irrespective of slidesToScroll"
					checked={swipeToSlide}
					onChange={onChangeSwipeToSlide}
				/>

				<ToggleControl
					label="Use CSS"
					help="Enable/Disable CSS Transforms"
					checked={useCSS}
					onChange={onChangeUseCSS}
				/>

				<ToggleControl
					label="Use Transform"
					help="Enable/Disable CSS Transforms"
					checked={useTransform}
					onChange={onChangeUseTransform}
				/>

				<ToggleControl
					label="Variable Width"
					help="Variable width slides"
					checked={variableWidth}
					onChange={onChangeVariableWidth}
				/>

				<ToggleControl
					label="Vertical Swiping"
					help="Vertical swipe mode"
					checked={verticalSwiping}
					onChange={onChangeVerticalSwiping}
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
					checked={waitForAnimate}
					onChange={onChangeWaitForAnimate}
				/>

				<NumberControl
					label="Z-Index"
					help="Set the zIndex values for slides, useful for IE9 and lower"
					value={zIndex}
					onChange={onChangeZIndex}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>
			</div>
		</>
	);
};
