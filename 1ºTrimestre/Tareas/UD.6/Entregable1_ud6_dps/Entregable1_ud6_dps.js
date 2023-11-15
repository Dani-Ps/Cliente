// VARIABLES
let imagenes = document.getElementsByTagName("img"); // Guarda todas las imagenes
let colores = document.getElementsByTagName("span"); // Guarda todas los span
let caja = document.getElementById("caja"); // Guarda el elemento caja
let imgIn = document.getElementById("img-box"); // Guarda el elemento imagen dentro de la caja

imgIn.width = 200; // Valor por defecto de ancho de las imagenes
imgIn.height = 200; // Valor por defecto de alto de las imagenes
function reducirImg() {
  // Funcion para reducir las imagenes en -30px
  if (imgIn.width > 5 && imgIn.height > 5) {
    // Vallidacion para que la imagen nunca sea mas pequeña de 5px
    imgIn.style.width = imgIn.width - 30 + "px";
    imgIn.style.height = imgIn.height - 30 + "px";
  }
}

function ampliarImg() {
  // Funcion para ampliar las imagenes en +30px
  if (imgIn.width < 570 && imgIn.height < 570) {
    imgIn.style.width = imgIn.width + 30 + "px";
    imgIn.style.height = imgIn.height + 30 + "px";
  }
}

function cambiarBorder(j) {
  // Funcion para cambiar el color del borde de la caja
  const colors = ["black", "red", "blue", "yellow", "green", "pink"]; // Almaena las opciones de colores
  if (j >= 0 && j < colores.length) {
    // Valido si j esta dentro de los valores length de colores
    caja.style.border = `10px solid ${colors[j]}`; // Cambio el color segun el index
  }
}

function imgChange(i) {
  // Funcion para cambiar la imagen de src y de temaño
  switch (i) {
    case 0:
      imgIn.src = "img/html.png";
      break;
    case 1:
      imgIn.src = "img/bootstrap.png";
      break;
    case 2:
      imgIn.src = "img/js.png";
      break;
    case 4:
      ampliarImg();
      break;
    case 5:
      reducirImg();
      break;
    default:
      break;
  }
}

// Asocio las funciones a los clicks en los elementos de img y span
for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("click", function () {
    imgChange(i);
  });
}

for (let j = 0; j < colores.length; j++) {
  colores[j].addEventListener("click", function () {
    cambiarBorder(j);
  });
}

/**
 *
 * Daniel Perez Serrano
 *
 */
