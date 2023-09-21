// PARALLAX WRAPPER
interface ParallaxWrapperProps {
  imagenFondoDesktop: string
  imagenFondoMobile: string
  sameDesktopTable: boolean
  children: any
}

//INTERACTIVE PRODUCTS
interface ProductInfoProps {
  productSku: string
  videoSrc: string
}

interface ProductsFormatProps {
  products: IntProductProps[]
}

interface Viewer360Props {
  imagenes: string[],
  rotationSpeed: number
}

interface IntProductProps {
  productSku: string
  videoSrc: string
  viewerImages: string[]
  rotationSpeed: number
}

interface InteractiveProductsProps {
  products: IntProductProps[]
  children: any
}

