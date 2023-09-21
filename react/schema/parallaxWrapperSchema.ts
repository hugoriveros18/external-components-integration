export const parallaxWrapperSchema = {
  title: "Parallax Wrapper",
  description: "Wrapper para renderizar un bloque con fondo tipo parallax",
  type: "object",
  properties: {
    imagenFondoDesktop: {
      title: "Imagen Fondo Desktop",
      type: "string",
      default: "",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    imagenFondoMobile: {
      title: "Imagen Fondo Desktop",
      type: "string",
      default: "",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    sameDesktopTable: {
      title: "Misma Imagen Desktop y Tablet",
      description: "Activar esta opcion si se quiere dejar como fondo la misma imagen en Desktop y Tablet",
      type: "boolean",
      default: false
    },
  }
}

