imagenLike = document.querySelector(".info .primero img"); // Selecciono la imagen de like
imagenDislike = document.querySelector(".info .segundo img"); // Selecciono la imagen de dislike
contador1 = document.querySelector(".info .primero h2"); // Selecciono el contador de likes
contador2 = document.querySelector(".info .segundo h2"); // Selecciono el contador de likes
boton = document.querySelector(".datos .boton button"); // Selecciono el boton de contactar
inputs = document.querySelector(".inputs"); // Selecciono el contenedor de inputs

// Funcion que cambia la imgen y el contador de likes al hacer click
function meGusta() {
    if (imagenLike.src.includes("gusta2")) {
        imagenLike.src = "img/gusta.png";
        contador1.textContent = parseInt(contador1.textContent) + 1;
    } else {
        imagenLike.src = "img/gusta2.png";
        contador1.textContent = parseInt(contador1.textContent) - 1;
    }
}
// Funcion que cambia la imgen y el contador de dislikes al hacer click
function noMeGusta() {
    if (imagenDislike.src.includes("disgusto2")) {
        imagenDislike.src = "img/disgusto.png";
        contador2.textContent = parseInt(contador2.textContent) + 1;
    } else {
        imagenDislike.src = "img/disgusto2.png";
        contador2.textContent = parseInt(contador2.textContent) - 1;
    }
}
// Funcion que crea los inputs al hacer click en el boton
function crearInput() {

    var input1 = document.createElement("input"); // Crea el input del nombre
    var input2 = document.createElement("input"); // Crea el input del email
    var submitButton = document.createElement("button"); // Crea el boton del enviar datos

    // Pongo el tipo de input que es y el placeholder de cada uno
    input1.setAttribute("type", "text");
    input1.setAttribute("placeholder", "Introduce tu nombre:");
    input2.setAttribute("type", "email");
    input2.setAttribute("placeholder", "Introduce tu email:");
    submitButton.textContent = "Enviar Datos"
    // Introduzco cada elemento en el cajon de inputs
    inputs.appendChild(input1);  
    inputs.appendChild(input2);  
    inputs.appendChild(submitButton);
}

// Captura de eventos para los distintos elementos con los que se va a interactuar
imagenLike.addEventListener("click", function () {
    meGusta();
});

imagenDislike.addEventListener("click", function () {
    noMeGusta();
});

boton.addEventListener("click", function () {
    crearInput();
});

/**
 * Daniel Perez Serrano
 */
