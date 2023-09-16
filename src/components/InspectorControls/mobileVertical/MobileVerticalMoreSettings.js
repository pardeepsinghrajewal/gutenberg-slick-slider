import React from "react";

import {
	
	TextControl,
	ToggleControl,
	
} from "@wordpress/components";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

export const MobileVerticalMoreSettings = (props) => {
	const { attributes, setAttributes } = props;


	const {
		accessibilityMV,
		adaptiveHeightMV,
		autoplayMV,
		autoplaySpeedMV,
		centerModeMV,
		centerPaddingMV,
		fadeMV,
		infiniteMV,
		draggableMV,
		pauseOnFocusMV,
		pauseOnHoverMV,
		pauseOnDotsHoverMV,
		touchMoveMV,
		swipeMV,
		verticalMV
	} = attributes;

	function moreSettingsClick(e) {
		e.target.classList.toggle("down");
		e.target.classList.toggle("up");
		e.target
			.closest(".components-panel__body")
			.querySelector(".moreSettings")
			.classList.toggle("wcHide");
	}

	function onChangeAccessibilityMV(newValue) {
		setAttributes({ accessibilityMV: newValue });
	}

	function onChangeAdaptiveHeightMV(newValue) {
		setAttributes({ adaptiveHeightMV: newValue });
	}

	function onChangeAutoPlayMV(newValue) {
		setAttributes({ autoplayMV: newValue });
	}

	function onChangeAutoPlaySpeedMV(newValue) {
		setAttributes({ autoplaySpeedMV: newValue });
	}

	function onChangeCenterModeMV(newValue) {
		setAttributes({ centerModeMV: newValue });
	}

	function onChangeCenterPaddingMV(newValue) {
		setAttributes({ centerPaddingMV: newValue });
	}

	function onChangeFadeMV(newValue) {
		setAttributes({ fadeMV: newValue });
	}

	function onChangeInfiniteMV(newValue) {
		setAttributes({ infiniteMV: newValue });
	}

	function onChangeDraggableMV(newValue) {
		setAttributes({ draggableMV: newValue });
	}

	function onChangePauseOnFocusMV(newValue) {
		setAttributes({ pauseOnFocusMV: newValue });
	}

	function onChangePauseOnHoverMV(newValue) {
		setAttributes({ pauseOnHoverMV: newValue });
	}

	function onChangePauseOnDotsHoverMV(newValue) {
		setAttributes({ pauseOnDotsHoverMV: newValue });
	}

	function onChangeTouchMoveMV(newValue) {
		setAttributes({ touchMoveMV: newValue });
	}

	function onChangeSwipeMV(newValue) {
		setAttributes({ swipeMV: newValue });
	}

	function onChangeVerticalMV(newValue) {
		setAttributes({ verticalMV: newValue });
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
					checked={accessibilityMV}
					onChange={onChangeAccessibilityMV}
				/>

				<ToggleControl
					label="Adaptive Height"
					help="Enables adaptive height for single slide horizontal carousels."
					checked={adaptiveHeightMV}
					onChange={onChangeAdaptiveHeightMV}
				/>

				<ToggleControl
					label="Auto Play"
					help="Enables Autoplay."
					checked={autoplayMV}
					onChange={onChangeAutoPlayMV}
				/>

				<NumberControl
					label="Auto Play Speed"
					help="Autoplay Speed in milliseconds"
					value={autoplaySpeedMV}
					onChange={onChangeAutoPlaySpeedMV}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<ToggleControl
					label="Center Mode"
					help="Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts."
					checked={centerModeMV}
					onChange={onChangeCenterModeMV}
				/>

				<TextControl
					label="Center Mode Padding"
					help="Side padding when in center mode (px or %)"
					value={centerPaddingMV}
					onChange={onChangeCenterPaddingMV}
				/>

				<ToggleControl
					label="Fade"
					help="Enable fade"
					checked={fadeMV}
					onChange={onChangeFadeMV}
				/>

				<ToggleControl
					label="Infinite"
					help="Infinite loop sliding"
					checked={infiniteMV}
					onChange={onChangeInfiniteMV}
				/>

				<ToggleControl
					label="Draggable"
					help="Enable mouse dragging"
					checked={draggableMV}
					onChange={onChangeDraggableMV}
				/>

				<ToggleControl
					label="Pause On Focus"
					help="Pause Autoplay On Focus"
					checked={pauseOnFocusMV}
					onChange={onChangePauseOnFocusMV}
				/>

				<ToggleControl
					label="Pause On Hover"
					help="Pause Autoplay On Hover"
					checked={pauseOnHoverMV}
					onChange={onChangePauseOnHoverMV}
				/>

				<ToggleControl
					label="Pause On Dots Hover"
					help="Pause Autoplay when a dot is hovered"
					checked={pauseOnDotsHoverMV}
					onChange={onChangePauseOnDotsHoverMV}
				/>

				<ToggleControl
					label="Touch Move"
					help="Enable slide motion with touch"
					checked={touchMoveMV}
					onChange={onChangeTouchMoveMV}
				/>

				<ToggleControl
					label="swipe"
					help="Enable swiping"
					checked={swipeMV}
					onChange={onChangeSwipeMV}
				/>

				<ToggleControl
					label="Vertical"
					help="Vertical slide mode"
					checked={verticalMV}
					onChange={onChangeVerticalMV}
				/>
			</div>
		</>
	);
};
