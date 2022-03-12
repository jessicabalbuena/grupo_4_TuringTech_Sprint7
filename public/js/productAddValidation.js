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
