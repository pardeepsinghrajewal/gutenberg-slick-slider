import React from "react";

import {
	
	TextControl,
	ToggleControl,
	
} from "@wordpress/components";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

export const MobileHorizontalMoreSettings = (props) => {
	const { attributes, setAttributes } = props;


	const {
		accessibilityMH,
		adaptiveHeightMH,
		autoplayMH,
		autoplaySpeedMH,
		centerModeMH,
		centerPaddingMH,
		fadeMH,
		infiniteMH,
		draggableMH,
		pauseOnFocusMH,
		pauseOnHoverMH,
		pauseOnDotsHoverMH,
		touchMoveMH,
		swipeMH,
		verticalMH
	} = attributes;

	function moreSettingsClick(e) {
		e.target.classList.toggle("down");
		e.target.classList.toggle("up");
		e.target
			.closest(".components-panel__body")
			.querySelector(".moreSettings")
			.classList.toggle("wcHide");
	}

	function onChangeAccessibilityMH(newValue) {
		setAttributes({ accessibilityMH: newValue });
	}

	function onChangeAdaptiveHeightMH(newValue) {
		setAttributes({ adaptiveHeightMH: newValue });
	}

	function onChangeAutoPlayMH(newValue) {
		setAttributes({ autoplayMH: newValue });
	}

	function onChangeAutoPlaySpeedMH(newValue) {
		setAttributes({ autoplaySpeedMH: newValue });
	}

	function onChangeCenterModeMH(newValue) {
		setAttributes({ centerModeMH: newValue });
	}

	function onChangeCenterPaddingMH(newValue) {
		setAttributes({ centerPaddingMH: newValue });
	}

	function onChangeFadeMH(newValue) {
		setAttributes({ fadeMH: newValue });
	}

	function onChangeInfiniteMH(newValue) {
		setAttributes({ infiniteMH: newValue });
	}

	function onChangeDraggableMH(newValue) {
		setAttributes({ draggableMH: newValue });
	}

	function onChangePauseOnFocusMH(newValue) {
		setAttributes({ pauseOnFocusMH: newValue });
	}

	function onChangePauseOnHoverMH(newValue) {
		setAttributes({ pauseOnHoverMH: newValue });
	}

	function onChangePauseOnDotsHoverMH(newValue) {
		setAttributes({ pauseOnDotsHoverMH: newValue });
	}

	function onChangeTouchMoveMH(newValue) {
		setAttributes({ touchMoveMH: newValue });
	}

	function onChangeSwipeMH(newValue) {
		setAttributes({ swipeMH: newValue });
	}

	function onChangeVerticalMH(newValue) {
		setAttributes({ verticalMH: newValue });
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
					checked={accessibilityMH}
					onChange={onChangeAccessibilityMH}
				/>

				<ToggleControl
					label="Adaptive Height"
					help="Enables adaptive height for single slide horizontal carousels."
					checked={adaptiveHeightMH}
					onChange={onChangeAdaptiveHeightMH}
				/>

				<ToggleControl
					label="Auto Play"
					help="Enables Autoplay."
					checked={autoplayMH}
					onChange={onChangeAutoPlayMH}
				/>

				<NumberControl
					label="Auto Play Speed"
					help="Autoplay Speed in milliseconds"
					value={autoplaySpeedMH}
					onChange={onChangeAutoPlaySpeedMH}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<ToggleControl
					label="Center Mode"
					help="Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts."
					checked={centerModeMH}
					onChange={onChangeCenterModeMH}
				/>

				<TextControl
					label="Center Mode Padding"
					help="Side padding when in center mode (px or %)"
					value={centerPaddingMH}
					onChange={onChangeCenterPaddingMH}
				/>

				<ToggleControl
					label="Fade"
					help="Enable fade"
					checked={fadeMH}
					onChange={onChangeFadeMH}
				/>

				<ToggleControl
					label="Infinite"
					help="Infinite loop sliding"
					checked={infiniteMH}
					onChange={onChangeInfiniteMH}
				/>

				<ToggleControl
					label="Draggable"
					help="Enable mouse dragging"
					checked={draggableMH}
					onChange={onChangeDraggableMH}
				/>

				<ToggleControl
					label="Pause On Focus"
					help="Pause Autoplay On Focus"
					checked={pauseOnFocusMH}
					onChange={onChangePauseOnFocusMH}
				/>

				<ToggleControl
					label="Pause On Hover"
					help="Pause Autoplay On Hover"
					checked={pauseOnHoverMH}
					onChange={onChangePauseOnHoverMH}
				/>

				<ToggleControl
					label="Pause On Dots Hover"
					help="Pause Autoplay when a dot is hovered"
					checked={pauseOnDotsHoverMH}
					onChange={onChangePauseOnDotsHoverMH}
				/>

				<ToggleControl
					label="Touch Move"
					help="Enable slide motion with touch"
					checked={touchMoveMH}
					onChange={onChangeTouchMoveMH}
				/>

				<ToggleControl
					label="swipe"
					help="Enable swiping"
					checked={swipeMH}
					onChange={onChangeSwipeMH}
				/>

				<ToggleControl
					label="Vertical"
					help="Vertical slide mode"
					checked={verticalMH}
					onChange={onChangeVerticalMH}
				/>
			</div>
		</>
	);
};
