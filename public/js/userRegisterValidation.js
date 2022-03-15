console.log("probando");  
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
switch (e.target.name){
	case "registroFullname":
		console.log("funciona")
	break;
	case "registroUsuario":
		console.log("funciona")
	break;
	case "registroEmail":
		console.log("funciona")
	break;
	case "registroDni":
		console.log("funciona")
	break;
	case "registroTel":
		console.log("funciona")
	break;
	case "registroDir":
		console.log("funciona")
	break;
	case "registroDepto":
		console.log("funciona")
	break;
	case "registroPostal":
		console.log("funciona")
	break;
	case "registroLock":
		console.log("funciona")
	break;
	case "registroLockRepeat":
		console.log("funciona")
	break;
  };
}


inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});