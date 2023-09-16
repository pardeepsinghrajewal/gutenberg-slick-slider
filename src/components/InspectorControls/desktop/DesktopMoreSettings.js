import React from "react";

import {
	
	TextControl,
	ToggleControl,
	
} from "@wordpress/components";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

export const DesktopMoreSettings = (props) => {
	const { attributes, setAttributes } = props;

	const {
		accessibility,
		adaptiveHeight,
		autoplay,
		autoplaySpeed,
		centerMode,
		centerPadding,
		fade,
		infinite,
		draggable,
		pauseOnFocus,
		pauseOnHover,
		pauseOnDotsHover,
		touchMove,
		swipe,
		vertical,
	} = attributes;

	function moreSettingsClick(e) {
		e.target.classList.toggle("down");
		e.target.classList.toggle("up");
		e.target
			.closest(".components-panel__body")
			.querySelector(".moreSettings")
			.classList.toggle("wcHide");
	}

	function onChangeAccessibility(newValue) {
		setAttributes({ accessibility: newValue });
	}

	function onChangeAdaptiveHeight(newValue) {
		setAttributes({ adaptiveHeight: newValue });
	}

	function onChangeAutoPlay(newValue) {
		setAttributes({ autoplay: newValue });
	}

	function onChangeAutoPlaySpeed(newValue) {
		setAttributes({ autoplaySpeed: newValue });
	}

	function onChangeCenterMode(newValue) {
		setAttributes({ centerMode: newValue });
	}

	function onChangeCenterPadding(newValue) {
		setAttributes({ centerPadding: newValue });
	}

	function onChangeFade(newValue) {
		setAttributes({ fade: newValue });
	}

	function onChangeInfinite(newValue) {
		setAttributes({ infinite: newValue });
	}

	function onChangeDraggable(newValue) {
		setAttributes({ draggable: newValue });
	}

	function onChangePauseOnFocus(newValue) {
		setAttributes({ pauseOnFocus: newValue });
	}

	function onChangePauseOnHover(newValue) {
		setAttributes({ pauseOnHover: newValue });
	}

	function onChangePauseOnDotsHover(newValue) {
		setAttributes({ pauseOnDotsHover: newValue });
	}

	function onChangeTouchMove(newValue) {
		setAttributes({ touchMove: newValue });
	}

	function onChangeSwipe(newValue) {
		setAttributes({ swipe: newValue });
	}

	function onChangeVertical(newValue) {
		setAttributes({ vertical: newValue });
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
					checked={accessibility}
					onChange={onChangeAccessibility}
				/>

				<ToggleControl
					label="Adaptive Height"
					help="Enables adaptive height for single slide horizontal carousels."
					checked={adaptiveHeight}
					onChange={onChangeAdaptiveHeight}
				/>

				<ToggleControl
					label="Auto Play"
					help="Enables Autoplay."
					checked={autoplay}
					onChange={onChangeAutoPlay}
				/>

				<NumberControl
					label="Auto Play Speed"
					help="Autoplay Speed in milliseconds"
					value={autoplaySpeed}
					onChange={onChangeAutoPlaySpeed}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>

				<ToggleControl
					label="Center Mode"
					help="Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts."
					checked={centerMode}
					onChange={onChangeCenterMode}
				/>

				<TextControl
					label="Center Mode Padding"
					help="Side padding when in center mode (px or %)"
					value={centerPadding}
					onChange={onChangeCenterPadding}
				/>

				<ToggleControl
					label="Fade"
					help="Enable fade"
					checked={fade}
					onChange={onChangeFade}
				/>

				<ToggleControl
					label="Infinite"
					help="Infinite loop sliding"
					checked={infinite}
					onChange={onChangeInfinite}
				/>

				<ToggleControl
					label="Draggable"
					help="Enable mouse dragging"
					checked={draggable}
					onChange={onChangeDraggable}
				/>

				<ToggleControl
					label="Pause On Focus"
					help="Pause Autoplay On Focus"
					checked={pauseOnFocus}
					onChange={onChangePauseOnFocus}
				/>

				<ToggleControl
					label="Pause On Hover"
					help="Pause Autoplay On Hover"
					checked={pauseOnHover}
					onChange={onChangePauseOnHover}
				/>

				<ToggleControl
					label="Pause On Dots Hover"
					help="Pause Autoplay when a dot is hovered"
					checked={pauseOnDotsHover}
					onChange={onChangePauseOnDotsHover}
				/>

				<ToggleControl
					label="Touch Move"
					help="Enable slide motion with touch"
					checked={touchMove}
					onChange={onChangeTouchMove}
				/>

				<ToggleControl
					label="swipe"
					help="Enable swiping"
					checked={swipe}
					onChange={onChangeSwipe}
				/>

				<ToggleControl
					label="Vertical"
					help="Vertical slide mode"
					checked={vertical}
					onChange={onChangeVertical}
				/>
			</div>
		</>
	);
};
