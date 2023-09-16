import React from "react";

import {
	
	TextControl,
	ToggleControl,
	
} from "@wordpress/components";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

export const IpadMoreSettings = (props) => {
	const { attributes, setAttributes } = props;


	const {
		accessibilityIpad,
		adaptiveHeightIpad,
		autoplayIpad,
		autoplaySpeedIpad,
		centerModeIpad,
		centerPaddingIpad,
		fadeIpad,
		infiniteIpad,
		draggableIpad,
		pauseOnFocusIpad,
		pauseOnHoverIpad,
		pauseOnDotsHoverIpad,
		touchMoveIpad,
		swipeIpad,
		verticalIpad
	} = attributes;

	function moreSettingsClick(e) {
		e.target.classList.toggle("down");
		e.target.classList.toggle("up");
		e.target
			.closest(".components-panel__body")
			.querySelector(".moreSettings")
			.classList.toggle("wcHide");
	}

	function onChangeAccessibilityIpad(newValue) {
		setAttributes({ accessibilityIpad: newValue });
	}

	function onChangeAdaptiveHeightIpad(newValue) {
		setAttributes({ adaptiveHeightIpad: newValue });
	}

	function onChangeAutoPlayIpad(newValue) {
		setAttributes({ autoplayIpad: newValue });
	}

	function onChangeAutoPlaySpeedIpad(newValue) {
		setAttributes({ autoplaySpeedIpad: newValue });
	}

	function onChangeCenterModeIpad(newValue) {
		setAttributes({ centerModeIpad: newValue });
	}

	function onChangeCenterPaddingIpad(newValue) {
		setAttributes({ centerPaddingIpad: newValue });
	}

	function onChangeFadeIpad(newValue) {
		setAttributes({ fadeIpad: newValue });
	}

	function onChangeInfiniteIpad(newValue) {
		setAttributes({ infiniteIpad: newValue });
	}

	function onChangeDraggableIpad(newValue) {
		setAttributes({ draggableIpad: newValue });
	}

	function onChangePauseOnFocusIpad(newValue) {
		setAttributes({ pauseOnFocusIpad: newValue });
	}

	function onChangePauseOnHoverIpad(newValue) {
		setAttributes({ pauseOnHoverIpad: newValue });
	}

	function onChangePauseOnDotsHoverIpad(newValue) {
		setAttributes({ pauseOnDotsHoverIpad: newValue });
	}

	function onChangeTouchMoveIpad(newValue) {
		setAttributes({ touchMoveIpad: newValue });
	}

	function onChangeSwipeIpad(newValue) {
		setAttributes({ swipeIpad: newValue });
	}

	function onChangeVerticalIpad(newValue) {
		setAttributes({ verticalIpad: newValue });
	}

	return (
		<>
			<button
				type="button"
				className="wc-arrow down"
				onClick={moreSettingsClick}
			>
				More Settings
			</button>
			<div className="moreSettings wcHide">
				<ToggleControl
					label="Accessibility"
					help="Enables tabbing and arrow key navigation"
					checked={accessibilityIpad}
					onChange={onChangeAccessibilityIpad}
				/>

				<ToggleControl
					label="Adaptive Height"
					help="Enables adaptive height for single slide horizontal carousels."
					checked={adaptiveHeightIpad}
					onChange={onChangeAdaptiveHeightIpad}
				/>

				<ToggleControl
					label="Auto Play"
					help="Enables Autoplay."
					checked={autoplayIpad}
					onChange={onChangeAutoPlayIpad}
				/>

				<NumberControl
					label="Auto Play Speed"
					help="Autoplay Speed in milliseconds"
					value={autoplaySpeedIpad}
					onChange={onChangeAutoPlaySpeedIpad}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<ToggleControl
					label="Center Mode"
					help="Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts."
					checked={centerModeIpad}
					onChange={onChangeCenterModeIpad}
				/>

				<TextControl
					label="Center Mode Padding"
					help="Side padding when in center mode (px or %)"
					value={centerPaddingIpad}
					onChange={onChangeCenterPaddingIpad}
				/>

				<ToggleControl
					label="Fade"
					help="Enable fade"
					checked={fadeIpad}
					onChange={onChangeFadeIpad}
				/>

				<ToggleControl
					label="Infinite"
					help="Infinite loop sliding"
					checked={infiniteIpad}
					onChange={onChangeInfiniteIpad}
				/>

				<ToggleControl
					label="Draggable"
					help="Enable mouse dragging"
					checked={draggableIpad}
					onChange={onChangeDraggableIpad}
				/>

				<ToggleControl
					label="Pause On Focus"
					help="Pause Autoplay On Focus"
					checked={pauseOnFocusIpad}
					onChange={onChangePauseOnFocusIpad}
				/>

				<ToggleControl
					label="Pause On Hover"
					help="Pause Autoplay On Hover"
					checked={pauseOnHoverIpad}
					onChange={onChangePauseOnHoverIpad}
				/>

				<ToggleControl
					label="Pause On Dots Hover"
					help="Pause Autoplay when a dot is hovered"
					checked={pauseOnDotsHoverIpad}
					onChange={onChangePauseOnDotsHoverIpad}
				/>

				<ToggleControl
					label="Touch Move"
					help="Enable slide motion with touch"
					checked={touchMoveIpad}
					onChange={onChangeTouchMoveIpad}
				/>

				<ToggleControl
					label="swipe"
					help="Enable swiping"
					checked={swipeIpad}
					onChange={onChangeSwipeIpad}
				/>

				<ToggleControl
					label="Vertical"
					help="Vertical slide mode"
					checked={verticalIpad}
					onChange={onChangeVerticalIpad}
				/>
			</div>
		</>
	);
};
