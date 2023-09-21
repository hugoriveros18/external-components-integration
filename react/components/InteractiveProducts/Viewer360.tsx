import React, { useMemo, useState } from "react";
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const CSS_HANDLES = [
  'viewer360__container',
  'viewer360__image',
];

export default function Viewer360({
  imagenes,
  rotationSpeed = 10
}:Viewer360Props) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATES
  const [currentImageIndex, setcurrentImageIndex] = useState<number>(0);
  const [currentImageRotation, setcurrentImageRotation] = useState<number>(0);
  const [isRotationActive, setIsRotationActive] = useState<boolean>(false);

  //MEMO
  const currentImage = useMemo(() => {
    return imagenes[currentImageIndex]
  }, [currentImageIndex])

  //METHODS
  const handleMouse = (e:any) => {
    if(isRotationActive) {
      const imagesLastIndex = imagenes.length - 1;
      const movement = currentImageRotation + e.movementX;
      if (movement >= rotationSpeed) {
        const numberSteps = Math.floor(movement / rotationSpeed);

        if(currentImageIndex + numberSteps > imagesLastIndex) {
          const forwardSteps = ((currentImageIndex + numberSteps) - imagesLastIndex) - 1;
          setcurrentImageIndex(forwardSteps);
        } else {
          setcurrentImageIndex(state => state + numberSteps);
        }

        setcurrentImageRotation(movement - (numberSteps * rotationSpeed));
      } else if (movement <= -rotationSpeed) {
        const numberSteps = Math.floor(Math.abs(movement) / rotationSpeed);

        if(currentImageIndex - numberSteps < 0) {
          const backwardSteps = (imagesLastIndex + (currentImageIndex - numberSteps)) + 1;
          setcurrentImageIndex(backwardSteps);
        } else {
          setcurrentImageIndex(state => state - numberSteps);
        }

        setcurrentImageRotation(movement + (numberSteps * rotationSpeed));
      } else {
        setcurrentImageRotation(movement);
      }
    }
  }
  const handleMouseDown = () => {
    setIsRotationActive(true);
  }

  const handleMouseUp = () => {
    setIsRotationActive(false);
  }

  const handleMouseLeave = () => {
    setIsRotationActive(false);
  }

  //JSX
  return (
    <div
      className={handles.viewer360__container}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouse}
    >
      <img
        src={currentImage}
        className={handles.viewer360__image}
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  )
}

