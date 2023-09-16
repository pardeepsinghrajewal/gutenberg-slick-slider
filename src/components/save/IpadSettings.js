

export const IpadSettings = (attributes) => 
{

  let settings = {};

	if(attributes.accessibilityIpad == false)
  {
    settings['accessibility'] = false;
  }

  if(attributes.adaptiveHeightIpad == true)
  {
    settings['adaptiveHeight'] = true;
  }

  if(attributes.autoplayIpad == true)
  {
    settings['autoplay'] = true;
  }

  if(attributes.autoplaySpeedIpad != 3000)
  {
    settings['autoplaySpeed'] = Number(attributes.autoplaySpeed);
  }

  if(attributes.arrowsIpad == false)
  {
    settings['arrows'] = false;
  }

  if(attributes.centerModeIpad == true)
  {
    settings['centerMode'] = true;
  }

  if(attributes.centerPaddingIpad != '50px')
  {
    settings['centerPadding'] = attributes.centerPaddingIpad;
  }

  if(attributes.cssEaseIpad != 'ease')
  {
    settings['centerPadding'] = attributes.cssEaseIpad;
  }

  if(attributes.dotsIpad == true)
  {
    settings['dots'] = true;
  }

  if(attributes.dotsClassIpad != 'slick-dots')
  {
    settings['dotsClass'] = attributes.dotsClassIpad;
  }

  if(attributes.draggableIpad == false)
  {
    settings['draggable'] = false;
  }

  if(attributes.fadeIpad == true)
  {
    settings['fade'] = true;
  }

  if(attributes.focusOnSelectIpad == true)
  {
    settings['focusOnSelect'] = true;
  }

  if(attributes.easingIpad != 'linear')
  {
    settings['easing'] = attributes.easingIpad;
  }

  if(attributes.edgeFrictionIpad != 0.15)
  {
    settings['edgeFriction'] = parseFloat(attributes.edgeFrictionIpad);
  }

  if(attributes.infiniteIpad == false)
  {
    settings['infinite'] = false;
  }

  if(attributes.initialSlideIpad != 0)
  {
    settings['initialSlide'] = Number(attributes.initialSlideIpad);
  }

  if(attributes.lazyLoadIpad != 'ondemand')
  {
    settings['lazyLoad'] = attributes.lazyLoadIpad;
  }

  if(attributes.mobileFirstIpad == true)
  {
    settings['mobileFirst'] = true;
  }

  if(attributes.pauseOnFocusIpad == false)
  {
    settings['pauseOnFocus'] = false;
  }

  if(attributes.pauseOnHoverIpad == false)
  {
    settings['pauseOnHover'] = false;
  }

  if(attributes.pauseOnDotsHoverIpad == true)
  {
    settings['pauseOnDotsHover'] = true;
  }

  if(attributes.respondToIpad != 'window')
  {
    settings['respondTo'] = attributes.respondToIpad;
  }

  if(attributes.rowsIpad != 1)
  {
    settings['rows'] = attributes.rowsIpad;
  }

  if(attributes.slidesPerRowIpad != 1)
  {
    settings['slidesPerRow'] = attributes.slidesPerRowIpad;
  }

  if(attributes.slidesToShowIpad != 1)
  {
    settings['slidesToShow'] = Number(attributes.slidesToShowIpad);
  }

  if(attributes.slidesToScrollIpad != 1)
  {
    settings['slidesToScroll'] = Number(attributes.slidesToScrollIpad);
  }

  if(attributes.speedIpad != 300)
  {
    settings['speed'] = attributes.speedIpad;
  }

  if(attributes.swipeIpad == false)
  {
    settings['swipe'] = false;
  }

  if(attributes.swipeToSlideIpad == true)
  {
    settings['swipeToSlide'] = true;
  }
  
  if(attributes.touchMoveIpad == false)
  {
    settings['touchMove'] = false;
  }

  if(attributes.useCSSIpad == false)
  {
    settings['useCSS'] = false;
  }

  if(attributes.useTransformIpad == false)
  {
    settings['useTransform'] = false;
  }

  if(attributes.variableWidthIpad == true)
  {
    settings['variableWidth'] = true;
  }

  if(attributes.verticalIpad == true)
  {
    settings['vertical'] = true;
  }

  if(attributes.verticalSwipingIpad == true)
  {
    settings['verticalSwiping'] = true;
  }

  if(attributes.rtlIpad == true)
  {
    settings['rtl'] = true;
  }

  if(attributes.waitForAnimateIpad == false)
  {
    settings['waitForAnimate'] = false;
  }

  if(attributes.zIndexIpad !== 1000)
  {
    settings['zIndex'] = Number(attributes.zIndexIpad);
  }


  if(Object.keys(settings).length > 0) 
  {
    settings = {
      breakpoint: Number(attributes.breakpointIpad),
      settings: settings
    };
  } 

  return settings;
};
