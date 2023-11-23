// scriptJs.js

let numElemt = document.getElementById("numElementos");
let camposTexto = document.getElementById("camposTexto");
let lista = document.getElementById("lista");

function addLi() {
  // Obtener el número de elementos ingresado por el usuario
  let numElementos = parseInt(numElemt.value);

  // Limpiar el contenido previo en camposTexto
  camposTexto.innerHTML = "";

  // Crear campos de texto según el número ingresado
  for (let i = 1; i <= numElementos; i++) {
    let inputText = document.createElement("input");
    inputText.type = "text";
    inputText.placeholder = "Texto del LI " + i;
    camposTexto.appendChild(inputText);
  }
}

function agregarElementos() {
  // Obtener todos los campos de texto creados
  let campos = camposTexto.querySelectorAll("input[type='text']");

  // Crear elementos LI y agregarlos a la lista
  campos.forEach((campo) => {
    let li = document.createElement("li");
    li.textContent = campo.value;
    lista.appendChild(li);
  });
}

function borrarPrimerLi() {
  // Obtener el primer elemento de la lista y eliminarlo
  let primerLi = lista.firstElementChild;
  if (primerLi) {
    lista.removeChild(primerLi);
  }
}

function borrarUltimoLi() {
  // Obtener el último elemento de la lista y eliminarlo
  let ultimoLi = lista.lastElementChild;
  if (ultimoLi) {
    lista.removeChild(ultimoLi);
  }
}

// Agregar eventos a los botones
document
  .querySelector("button:nth-of-type(1)")
  .addEventListener("click", addLi);
document
  .querySelector("button:nth-of-type(2)")
  .addEventListener("click", agregarElementos);
document
  .querySelector("button:nth-of-type(3)")
  .addEventListener("click", borrarPrimerLi);
document
  .querySelector("button:nth-of-type(4)")
  .addEventListener("click", borrarUltimoLi);
