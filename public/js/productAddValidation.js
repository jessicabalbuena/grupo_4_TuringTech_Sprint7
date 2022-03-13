const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  productName: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
  productDescription: /^[a-zA-ZÀ-ÿ\s]{5,20}$/, //  Letras y espacios, pueden llevar acentos, igual que productName
  productDescriptionLong: /^[a-zA-ZÀ-ÿ\s]{10,40}$/, //  Letras y espacios, pueden llevar acentos, igual que productName pero mayor cantidad de carecteres.
  productPrice: /^\d{2,14}$/, // 2 a 14 numeros
  productStock: /^\d{1,14}$/, // 1 a 14 numeros
  productFees: /^\d{1,12}$/, // 0 a 12 numeros
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "productName":
      if (expresiones.usuario.test(e.target.value)) {
        document
          .querySelector("#grupo__nombre .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
      } else {
        document
          .querySelector("#grupo__nombre .formulario__input-error")
          .classList.add("formulario__input-error-activo");
      }
      break;

    case "productDescription":
      if (expresiones.productDescription.test(e.target.value)) {
        document
          .querySelector("#grupo__descripcion .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
      } else {
        document
          .querySelector("#grupo__descripcion .formulario__input-error")
          .classList.add("formulario__input-error-activo");
      }
      break;

    case "productDescriptionLong":
      if (expresiones.productDescriptionLong.test(e.target.value)) {
        document
          .querySelector("#grupo__descripcionLong .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
      } else {
        document
          .querySelector("#grupo__descripcionLong .formulario__input-error")
          .classList.add("formulario__input-error-activo");
      }
      break;

    case "productPrice":
      if (expresiones.productPrice.test(e.target.value)) {
        document
          .querySelector("#grupo__productPrice .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
      } else {
        document
          .querySelector("#grupo__productPrice .formulario__input-error")
          .classList.add("formulario__input-error-activo");
      }
      break;

    case "productStock":
      if (expresiones.productStock.test(e.target.value)) {
        document
          .querySelector("#grupo__productStock .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
      } else {
        document
          .querySelector("#grupo__productStock  .formulario__input-error")
          .classList.add("formulario__input-error-activo");
      }
      break;

    case "productFees":
      if (expresiones.productFees.test(e.target.value)) {
        document
          .querySelector("#grupo__productFees .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
      } else {
        document
          .querySelector("#grupo__productFees .formulario__input-error")
          .classList.add("formulario__input-error-activo");
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});
