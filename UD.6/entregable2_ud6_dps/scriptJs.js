// VARIABLES
var numElemt = document.getElementById("numElementos");
var camposTexto = document.getElementById("camposTexto");
var lista = document.getElementById("lista");

function addElementos() {
  // Obtengo el numero de elementos
  var numElementos = parseInt(numElemt.value);
  // Creo los campos
  for (var i = 0; i < numElementos; i++) {
    let inputText = document.createElement("input");
    inputText.type = "text";
    inputText.placeholder = "Introduce el texto del li " + i;
    camposTexto.appendChild(inputText);
  }
}

function addLi() {
  // Obtengo todos los campos de texto creados
  var campos = camposTexto.querySelectorAll("input[type='text']");
  // Creo elementos li y los agrego a la lista
  campos.forEach((campo) => {
    let li = document.createElement("li");
    li.textContent = campo.value;
    lista.appendChild(li);
  });
}

function borrarPrimerLi() {
  // Obtengo el primer elemento de la lista y lo elimino
  let primerLi = lista.firstElementChild;
  if (primerLi) {
    lista.removeChild(primerLi);
  }
}

function borrarUltimoLi() {
  // Obtener el último elemento de la lista y lo elimino
  let ultimoLi = lista.lastElementChild;
  if (ultimoLi) {
    lista.removeChild(ultimoLi);
  }
}

// Agrego los eventos a los botones
document
  .querySelector("button:nth-of-type(1)")
  .addEventListener("click", addElementos);
document
  .querySelector("button:nth-of-type(2)")
  .addEventListener("click", addLi);
document
  .querySelector("button:nth-of-type(3)")
  .addEventListener("click", borrarPrimerLi);
document
  .querySelector("button:nth-of-type(4)")
  .addEventListener("click", borrarUltimoLi);

// Daniel Perez Serrano
