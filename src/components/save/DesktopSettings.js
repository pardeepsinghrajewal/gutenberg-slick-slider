

export const DesktopSettings = (attributes) => 
{

  let settings = {};

	if(attributes.accessibility == false)
  {
    settings['accessibility'] = false;
  }

  if(attributes.adaptiveHeight == true)
  {
    settings['adaptiveHeight'] = true;
  }

  if(attributes.autoplay == true)
  {
    settings['autoplay'] = true;
  }

  if(attributes.autoplaySpeed != 3000)
  {
    settings['autoplaySpeed'] = Number(attributes.autoplaySpeed);
  }

  if(attributes.arrows == false)
  {
    settings['arrows'] = false;
  }

  if(attributes.centerMode == true)
  {
    settings['centerMode'] = true;
  }

  if(attributes.centerPadding != '50px')
  {
    settings['centerPadding'] = attributes.centerPadding;
  }

  if(attributes.cssEase != 'ease')
  {
    settings['centerPadding'] = attributes.cssEase;
  }

  if(attributes.dots == true)
  {
    settings['dots'] = true;
  }

  if(attributes.dotsClass != 'slick-dots')
  {
    settings['dotsClass'] = attributes.dotsClass;
  }

  if(attributes.draggable == false)
  {
    settings['draggable'] = false;
  }

  if(attributes.fade == true)
  {
    settings['fade'] = true;
  }

  if(attributes.focusOnSelect == true)
  {
    settings['focusOnSelect'] = true;
  }

  if(attributes.easing != 'linear')
  {
    settings['easing'] = attributes.easing;
  }

  if(attributes.edgeFriction != 0.15)
  {
    settings['edgeFriction'] = parseFloat(attributes.edgeFriction);
  }

  if(attributes.infinite == false)
  {
    settings['infinite'] = false;
  }

  if(attributes.initialSlide != 0)
  {
    settings['initialSlide'] = Number(attributes.initialSlide);
  }

  if(attributes.lazyLoad != 'ondemand')
  {
    settings['lazyLoad'] = attributes.lazyLoad;
  }

  if(attributes.mobileFirst == true)
  {
    settings['mobileFirst'] = true;
  }

  if(attributes.pauseOnFocus == false)
  {
    settings['pauseOnFocus'] = false;
  }

  if(attributes.pauseOnHover == false)
  {
    settings['pauseOnHover'] = false;
  }

  if(attributes.pauseOnDotsHover == true)
  {
    settings['pauseOnDotsHover'] = true;
  }

  if(attributes.respondTo != 'window')
  {
    settings['respondTo'] = attributes.respondTo;
  }

  if(attributes.rows != 1)
  {
    settings['rows'] = attributes.rows;
  }

  if(attributes.slidesPerRow != 1)
  {
    settings['slidesPerRow'] = attributes.slidesPerRow;
  }

  if(attributes.slidesToShow != 1)
  {
    settings['slidesToShow'] = Number(attributes.slidesToShow);
  }

  if(attributes.slidesToScroll != 1)
  {
    settings['slidesToScroll'] = Number(attributes.slidesToScroll);
  }

  if(attributes.speed != 300)
  {
    settings['speed'] = attributes.speed;
  }

  if(attributes.swipe == false)
  {
    settings['swipe'] = false;
  }

  if(attributes.swipeToSlide == true)
  {
    settings['swipeToSlide'] = true;
  }
  
  if(attributes.touchMove == false)
  {
    settings['touchMove'] = false;
  }

  if(attributes.useCSS == false)
  {
    settings['useCSS'] = false;
  }

  if(attributes.useTransform == false)
  {
    settings['useTransform'] = false;
  }

  if(attributes.variableWidth == true)
  {
    settings['variableWidth'] = true;
  }

  if(attributes.vertical == true)
  {
    settings['vertical'] = true;
  }

  if(attributes.verticalSwiping == true)
  {
    settings['verticalSwiping'] = true;
  }

  if(attributes.rtl == true)
  {
    settings['rtl'] = true;
  }

  if(attributes.waitForAnimate == false)
  {
    settings['waitForAnimate'] = false;
  }

  if(attributes.zIndex !== 1000)
  {
    settings['zIndex'] = Number(attributes.zIndex);
  }

  return settings;
};
