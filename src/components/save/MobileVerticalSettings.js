export const MobileVerticalSettings = (attributes) => 
{

  let settings = {};

	if(attributes.accessibilityMV == false)
  {
    settings['accessibility'] = false;
  }

  if(attributes.adaptiveHeightMV == true)
  {
    settings['adaptiveHeight'] = true;
  }

  if(attributes.autoplayMV == true)
  {
    settings['autoplay'] = true;
  }

  if(attributes.autoplaySpeedMV != 3000)
  {
    settings['autoplaySpeed'] = Number(attributes.autoplaySpeed);
  }

  if(attributes.arrowsMV == false)
  {
    settings['arrows'] = false;
  }

  if(attributes.centerModeMV == true)
  {
    settings['centerMode'] = true;
  }

  if(attributes.centerPaddingMV != '50px')
  {
    settings['centerPadding'] = attributes.centerPaddingMV;
  }

  if(attributes.cssEaseMV != 'ease')
  {
    settings['centerPadding'] = attributes.cssEaseMV;
  }

  if(attributes.dotsMV == true)
  {
    settings['dots'] = true;
  }

  if(attributes.dotsClassMV != 'slick-dots')
  {
    settings['dotsClass'] = attributes.dotsClassMV;
  }

  if(attributes.draggableMV == false)
  {
    settings['draggable'] = false;
  }

  if(attributes.fadeMV == true)
  {
    settings['fade'] = true;
  }

  if(attributes.focusOnSelectMV == true)
  {
    settings['focusOnSelect'] = true;
  }

  if(attributes.easingMV != 'linear')
  {
    settings['easing'] = attributes.easingMV;
  }

  if(attributes.edgeFrictionMV != 0.15)
  {
    settings['edgeFriction'] = parseFloat(attributes.edgeFrictionMV);
  }

  if(attributes.infiniteMV == false)
  {
    settings['infinite'] = false;
  }

  if(attributes.initialSlideMV != 0)
  {
    settings['initialSlide'] = Number(attributes.initialSlideMV);
  }

  if(attributes.lazyLoadMV != 'ondemand')
  {
    settings['lazyLoad'] = attributes.lazyLoadMV;
  }

  if(attributes.mobileFirstMV == true)
  {
    settings['mobileFirst'] = true;
  }

  if(attributes.pauseOnFocusMV == false)
  {
    settings['pauseOnFocus'] = false;
  }

  if(attributes.pauseOnHoverMV == false)
  {
    settings['pauseOnHover'] = false;
  }

  if(attributes.pauseOnDotsHoverMV == true)
  {
    settings['pauseOnDotsHover'] = true;
  }

  if(attributes.respondToMV != 'window')
  {
    settings['respondTo'] = attributes.respondToMV;
  }

  if(attributes.rowsMV != 1)
  {
    settings['rows'] = attributes.rowsMV;
  }

  if(attributes.slidesPerRowMV != 1)
  {
    settings['slidesPerRow'] = attributes.slidesPerRowMV;
  }

  if(attributes.slidesToShowMV != 1)
  {
    settings['slidesToShow'] = Number(attributes.slidesToShowMV);
  }

  if(attributes.slidesToScrollMV != 1)
  {
    settings['slidesToScroll'] = Number(attributes.slidesToScrollMV);
  }

  if(attributes.speedMV != 300)
  {
    settings['speed'] = attributes.speedMV;
  }

  if(attributes.swipeMV == false)
  {
    settings['swipe'] = false;
  }

  if(attributes.swipeToSlideMV == true)
  {
    settings['swipeToSlide'] = true;
  }
  
  if(attributes.touchMoveMV == false)
  {
    settings['touchMove'] = false;
  }

  if(attributes.useCSSMV == false)
  {
    settings['useCSS'] = false;
  }

  if(attributes.useTransformMV == false)
  {
    settings['useTransform'] = false;
  }

  if(attributes.variableWidthMV == true)
  {
    settings['variableWidth'] = true;
  }

  if(attributes.verticalMV == true)
  {
    settings['vertical'] = true;
  }

  if(attributes.verticalSwipingMV == true)
  {
    settings['verticalSwiping'] = true;
  }

  if(attributes.rtlMV == true)
  {
    settings['rtl'] = true;
  }

  if(attributes.waitForAnimateMV == false)
  {
    settings['waitForAnimate'] = false;
  }

  if(attributes.zIndexMV !== 1000)
  {
    settings['zIndex'] = Number(attributes.zIndexMV);
  }

  if(Object.keys(settings).length > 0) 
  {
    settings = {
      breakpoint: Number(attributes.breakpointMV),
      settings: settings
    };
  } 

  return settings;
};
