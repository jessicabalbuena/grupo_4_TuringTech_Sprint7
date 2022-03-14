console.log("probando");  
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{1,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10,14}$/, // 7 a 14 numeros.
	dni: /^\d{8,8}$/,
	zipcode: /^\d{1,5}$/
}

const validarFormulario = (e) => {
switch (e.target.name){
	case "registroFullname":
		
		if (expresiones.nombre.test(e.target.value)) {
				
			document.getElementById("p_error1").classList.remove("error_activo")
			document.getElementById("registroNombre").classList.add("borde_correcto_activo")
		} else {
			document.getElementById("p_error1").classList.add("error_activo")
			document.getElementById("registroNombre").classList.remove("borde_correcto_activo")
			
		}
	break;
	case "registroUsuario":
		
		if (expresiones.usuario.test(e.target.value)) {
				
			document.getElementById("p_error2").classList.remove("error_activo")
			document.getElementById("registroUsuario").classList.add("borde_correcto_activo")
		} else {
			document.getElementById("p_error2").classList.add("error_activo")
			document.getElementById("registroUsuario").classList.remove("borde_correcto_activo")
			
		}
	break;
	case "registroEmail":
		console.log("funciona")
		if (expresiones.correo.test(e.target.value)) {
				
			document.getElementById("p_error3").classList.remove("error_activo")
			document.getElementById("registroEmail").classList.add("borde_correcto_activo")
		} else {
			document.getElementById("p_error3").classList.add("error_activo")
			document.getElementById("registroEmail").classList.remove("borde_correcto_activo")
			
		}
	break;
	case "registroDni":
		console.log("funciona")
		if (expresiones.dni.test(e.target.value)) {
				
			document.getElementById("p_error4").classList.remove("error_activo")
			document.getElementById("registroDni").classList.add("borde_correcto_activo")
		} else {
			document.getElementById("p_error4").classList.add("error_activo")
			document.getElementById("registroDni").classList.remove("borde_correcto_activo")
			
		}
	break;
	case "registroTel":
		console.log("funciona")
		if (expresiones.telefono.test(e.target.value)) {
				
			document.getElementById("p_error5").classList.remove("error_activo")
			document.getElementById("registroTel").classList.add("borde_correcto_activo")
		} else {
			document.getElementById("p_error5").classList.add("error_activo")
			document.getElementById("registroTel").classList.remove("borde_correcto_activo")
			
		}
	break;
	case "registroDir":
		console.log("funciona")
		if (expresiones.nombre.test(e.target.value)) {
				
			document.getElementById("p_error6").classList.remove("error_activo")
			document.getElementById("registroDir").classList.add("borde_correcto_activo")
		} else {
			document.getElementById("p_error6").classList.add("error_activo")
			document.getElementById("registroDir").classList.remove("borde_correcto_activo")
			
		}
	break;
	case "registroDepto":
		console.log("funciona")
		if (expresiones.nombre.test(e.target.value)) {
				
			document.getElementById("p_error7").classList.remove("error_activo")
			document.getElementById("registroDepto").classList.add("borde_correcto_activo")
		} else {
			document.getElementById("p_error7").classList.add("error_activo")
			document.getElementById("registroDepto").classList.remove("borde_correcto_activo")
			
		}
	break;
	case "registroPostal":
		console.log("funciona")
		if (expresiones.zipcode.test(e.target.value)) {
				
			document.getElementById("p_error8").classList.remove("error_activo")
			document.getElementById("registroPostal").classList.add("borde_correcto_activo")
		} else {
			document.getElementById("p_error8").classList.add("error_activo")
			document.getElementById("registroPostal").classList.remove("borde_correcto_activo")
			
		}
	break;
	case "registroLock":
		console.log("funciona")
		if (expresiones.password.test(e.target.value)) {
				
			document.getElementById("p_error9").classList.remove("error_activo")
			document.getElementById("registroLock").classList.add("borde_correcto_activo")
		} else {
			document.getElementById("p_error9").classList.add("error_activo")
			document.getElementById("registroLock").classList.remove("borde_correcto_activo")
			
		}
	break;
	case "registroLockRepeat":
		console.log("funciona")
		if (expresiones.nombre.test(e.target.value)) {
				
			document.getElementById("p_error10").classList.remove("error_activo")
			document.getElementById("registroLockRepeat").classList.add("borde_correcto_activo")
		} else {
			document.getElementById("p_error10").classList.add("error_activo")
			document.getElementById("registroLockRepeat").classList.remove("borde_correcto_activo")
			
		}
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