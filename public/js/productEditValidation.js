window.addEventListener('load', function(){
    let formulario = document.querySelector('.edit');

    formulario.addEventListener('submit', function(e){
        
        let errores = [];

        let campoNombre = document.querySelector('main__container-name .main__register-name');
        
        if (campoNombre.value == '') {
            errores.push('El campo de Nombre tiene que estar completado');
        }else if(campoNombre.value.length <5){
            errores.push('El campo de Nombre tiene que tener al menos 5 caracteres');
        }

        let description = document.querySelector('main__container-user .main__register-surname');
        if (description.value == '') {
            errores.push('El campo de descripción tiene que estar completado');

        }else if(description.value.length < 20){
            errores.push('El campo de descripción tiene que tener al menos 20 caracteres');

        }
        
        let campoImage = document.querySelector('input .main__register-avatar');

        let extencionesValidas = this.files[0], image= new Image();
        if(extencionesValidas.value == ''){
            errores.push('El campo de Imagen tiene que estar completado')
        }else if (/.(jpg|jpeg|png|gif)$/i.test(extencionesValidas.value)) {
            
            errores.push('Comprueba la extensión de tus imagenes, recuerda que los formatos aceptados son .gif, .jpeg, .jpg y .png')
        }

        if (errores.length > 0) {
            e.preventDefault();
            
            let ulErrores = document.querySelector('div .errores ul')
            for (let i = 0; i < errores.length; i++) {
                
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
                
            }
        }
    })
})