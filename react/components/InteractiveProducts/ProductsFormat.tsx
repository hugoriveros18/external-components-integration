import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import Viewer360 from "./Viewer360";
import ProductInfo from "./ProductInfo";
import './styles.css';

const CSS_HANDLES = [
  'intProducts__container',
  'intProducts__viewer360Container',
  'intProducts__productInfoContainer'
];

export default function ProductsFormat({
  products
}: ProductsFormatProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    products.map((prod) => {
      return (
        <div
          className={handles.intProducts__container}
          key={prod.productSku}
        >
          {/* INTERACTIVE ROTATION */}
          <div className={handles.intProducts__viewer360Container}>
            <Viewer360
              imagenes={prod.viewerImages}
              rotationSpeed={prod.rotationSpeed}
            />
          </div>

          {/* SKU INFORMATION */}
          <div className={handles.intProducts__productInfoContainer}>
            <ProductInfo
              productSku={prod.productSku}
              videoSrc={prod.videoSrc}
            />
          </div>

        </div>
      )
    })
  )
}

