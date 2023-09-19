import React, { useEffect, useRef } from 'react';
import { ScrollParallax, ScrollParallaxHandle  } from "react-just-parallax";
import { useRuntime } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles';
import { useDevice } from 'vtex.device-detector';
import './styles.css';

const CSS_HANDLES = [
  'parallaxWrapper__container',
  'parallaxWrapper__ImageOuttercontainer',
  'parallaxWrapper__ImageInnercontainer',
  'parallaxWrapper__Image',
  'parallaxWrapper__contentContainer',
];

export default function ParallaxWrapper({
  imagenFondoDesktop,
  imagenFondoMobile,
  sameDesktopTable = true,
  children
}:ParallaxWrapperProps) {

  //VTEX RUNTIME
  const runtime = useRuntime();

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DEVICE DETECTOR
  const { device } = useDevice();

  //STATES
  const scrollBackgroundRef = useRef<ScrollParallaxHandle | null>(null);
  const scrollContentRef = useRef<ScrollParallaxHandle | null>(null);

  //METHODS
  const updateScrollValues = () => {
    scrollBackgroundRef.current?.updateValues();
    scrollContentRef.current?.updateValues();
  }

  const imageSetup = () => {
    if(sameDesktopTable) {
      if(device === 'desktop' || device === 'tablet') {
        return imagenFondoDesktop
      }

      return imagenFondoMobile
    }

    if(device === 'desktop') {
      return imagenFondoDesktop
    }

    return imagenFondoMobile
  }

  //EFFECTS
  useEffect(() => {
    setTimeout(() => {
      updateScrollValues();
    },1000)
  },[runtime])

  //JSX
  return (
    <div
      className={handles.parallaxWrapper__container}
    >
      <ScrollParallax
        lerpEase={0.1}
        zIndex={100}
        strength={-0.05}
        isAbsolutelyPositioned
        ref={scrollContentRef}
      >
        <div className={handles.parallaxWrapper__contentContainer}>
          {children}
        </div>
      </ScrollParallax>
      <div
        className={handles.parallaxWrapper__ImageOuttercontainer}
      >
        <ScrollParallax
          lerpEase={0.1}
          strength={0.15}
          ref={scrollBackgroundRef}
        >
          <div
            className={handles.parallaxWrapper__ImageInnercontainer}
          >
            <img
              src={imageSetup()}
              className={handles.parallaxWrapper__Image}
            />
          </div>
        </ScrollParallax>
      </div>
    </div>
  )
}

