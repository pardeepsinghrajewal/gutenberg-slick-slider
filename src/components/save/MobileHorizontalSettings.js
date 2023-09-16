export const MobileHorizontalSettings = (attributes) => 
{

  let settings = {};

	if(attributes.accessibilityMH == false)
  {
    settings['accessibility'] = false;
  }

  if(attributes.adaptiveHeightMH == true)
  {
    settings['adaptiveHeight'] = true;
  }

  if(attributes.autoplayMH == true)
  {
    settings['autoplay'] = true;
  }

  if(attributes.autoplaySpeedMH != 3000)
  {
    settings['autoplaySpeed'] = Number(attributes.autoplaySpeed);
  }

  if(attributes.arrowsMH == false)
  {
    settings['arrows'] = false;
  }

  if(attributes.centerModeMH == true)
  {
    settings['centerMode'] = true;
  }

  if(attributes.centerPaddingMH != '50px')
  {
    settings['centerPadding'] = attributes.centerPaddingMH;
  }

  if(attributes.cssEaseMH != 'ease')
  {
    settings['centerPadding'] = attributes.cssEaseMH;
  }

  if(attributes.dotsMH == true)
  {
    settings['dots'] = true;
  }

  if(attributes.dotsClassMH != 'slick-dots')
  {
    settings['dotsClass'] = attributes.dotsClassMH;
  }

  if(attributes.draggableMH == false)
  {
    settings['draggable'] = false;
  }

  if(attributes.fadeMH == true)
  {
    settings['fade'] = true;
  }

  if(attributes.focusOnSelectMH == true)
  {
    settings['focusOnSelect'] = true;
  }

  if(attributes.easingMH != 'linear')
  {
    settings['easing'] = attributes.easingMH;
  }

  if(attributes.edgeFrictionMH != 0.15)
  {
    settings['edgeFriction'] = parseFloat(attributes.edgeFrictionMH);
  }

  if(attributes.infiniteMH == false)
  {
    settings['infinite'] = false;
  }

  if(attributes.initialSlideMH != 0)
  {
    settings['initialSlide'] = Number(attributes.initialSlideMH);
  }

  if(attributes.lazyLoadMH != 'ondemand')
  {
    settings['lazyLoad'] = attributes.lazyLoadMH;
  }

  if(attributes.mobileFirstMH == true)
  {
    settings['mobileFirst'] = true;
  }

  if(attributes.pauseOnFocusMH == false)
  {
    settings['pauseOnFocus'] = false;
  }

  if(attributes.pauseOnHoverMH == false)
  {
    settings['pauseOnHover'] = false;
  }

  if(attributes.pauseOnDotsHoverMH == true)
  {
    settings['pauseOnDotsHover'] = true;
  }

  if(attributes.respondToMH != 'window')
  {
    settings['respondTo'] = attributes.respondToMH;
  }

  if(attributes.rowsMH != 1)
  {
    settings['rows'] = attributes.rowsMH;
  }

  if(attributes.slidesPerRowMH != 1)
  {
    settings['slidesPerRow'] = attributes.slidesPerRowMH;
  }

  if(attributes.slidesToShowMH != 1)
  {
    settings['slidesToShow'] = Number(attributes.slidesToShowMH);
  }

  if(attributes.slidesToScrollMH != 1)
  {
    settings['slidesToScroll'] = Number(attributes.slidesToScrollMH);
  }

  if(attributes.speedMH != 300)
  {
    settings['speed'] = attributes.speedMH;
  }

  if(attributes.swipeMH == false)
  {
    settings['swipe'] = false;
  }

  if(attributes.swipeToSlideMH == true)
  {
    settings['swipeToSlide'] = true;
  }
  
  if(attributes.touchMoveMH == false)
  {
    settings['touchMove'] = false;
  }

  if(attributes.useCSSMH == false)
  {
    settings['useCSS'] = false;
  }

  if(attributes.useTransformMH == false)
  {
    settings['useTransform'] = false;
  }

  if(attributes.variableWidthMH == true)
  {
    settings['variableWidth'] = true;
  }

  if(attributes.verticalMH == true)
  {
    settings['vertical'] = true;
  }

  if(attributes.verticalSwipingMH == true)
  {
    settings['verticalSwiping'] = true;
  }

  if(attributes.rtlMH == true)
  {
    settings['rtl'] = true;
  }

  if(attributes.waitForAnimateMH == false)
  {
    settings['waitForAnimate'] = false;
  }

  if(attributes.zIndexMH !== 1000)
  {
    settings['zIndex'] = Number(attributes.zIndexMH);
  }

  if(Object.keys(settings).length > 0) 
  {
    settings = {
      breakpoint: Number(attributes.breakpointMH),
      settings: settings
    };
  } 

  return settings;
};
