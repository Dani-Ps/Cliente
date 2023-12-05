const formulario = document.querySelector("form");
const boton_enviar = document.getElementById("submit").addEventListener("click", validar)

function validar() {
    for (let i = 0; i < formulario.elements.length; i++) {
        if (formulario.elements[i].type === 'text' && formulario.elements[i].value === '') {
            alert('El campo: ' + formulario.elements[i].name + ' no puede estar vacío.');
            formulario.elements[i].className = 'error';
            formulario.elements[i].focus();
        }
    }
}














































/**
 * Daniel Perez Serrano
 */