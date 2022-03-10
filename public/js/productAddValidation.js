const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  productName: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
  productDescription: /^[a-zA-ZÀ-ÿ\s]{5,20}$/, //  Letras y espacios, pueden llevar acentos, igual que productName
  productDescriptionLong: /^[a-zA-ZÀ-ÿ\s]{10,40}$/, //  Letras y espacios, pueden llevar acentos, igual que productName pero mayor cantidad de carecteres.
  productPrice: /^\d{2,14}$/, // 2 a 14 numeros
  productStock: /^\d{1,14}$/, // 1 a 14 numeros
  productFees: /^\d{0,14}$/, // 0 a 12 numeros
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case productName:
      if (expresiones.productName.test(e.target.value)) {
        document
          .getElementById("main__-name")
          .classList.remove(".formulario__input-error");
        document
          .getElementById("main__-name")
          .classList.add(".formulario__input-correcto");
      } else {
        document
          .getElementById("main__-name")
          .classList.add(".formulario__input-error");
      }
      break;

    case productDescription:
      if (expresiones.productDescription.test(e.target.value)) {
        document
          .getElementById("main__register-user")
          .classList.remove(".formulario__input-error");
        document
          .getElementById("main__register-user")
          .classList.add(".formulario__input-correcto");
      } else {
        document
          .getElementById("main__register-user")
          .classList.add(".formulario__input-error");
      }
      break;

    case productDescriptionLong:
      if (expresiones.productDescriptionLong.test(e.target.value)) {
        document
          .getElementById("main__register-user")
          .classList.remove(".formulario__input-error");
        document
          .getElementById("main__register-user")
          .classList.add(".formulario__input-correcto");
      } else {
        document
          .getElementById("main__register-user")
          .classList.add(".formulario__input-error");
      }
      break;

    case productPrice:
      if (expresiones.productName.test(e.target.value)) {
        document
          .getElementById("main__register-email")
          .classList.remove(".formulario__input-error");
        document
          .getElementById("main__register-email")
          .classList.add(".formulario__input-correcto");
      } else {
        document
          .getElementById("main__register-email")
          .classList.add(".formulario__input-error");
      }
      break;

    case productStock:
      if (expresiones.productName.test(e.target.value)) {
        document
          .getElementById("main__register-lock")
          .classList.remove(".formulario__input-error");
        document
          .getElementById("main__register-lock")
          .classList.add(".formulario__input-correcto");
      } else {
        document
          .getElementById("main__register-lock")
          .classList.add(".formulario__input-error");
      }
      break;

    case productFees:
      if (expresiones.productName.test(e.target.value)) {
        document
          .getElementById("main__register-fees")
          .classList.remove(".formulario__input-error");
        document
          .getElementById("main__register-fees")
          .classList.add(".formulario__input-correcto");
      } else {
        document
          .getElementById("main__register-fees")
          .classList.add(".formulario__input-error");
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
