let fechaActual = new Date(2023,9,19);
let finDeCurso = new Date(2024,2,29);

let milisegundo = finDeCurso - fechaActual
let dias = Math.floor(milisegundo / (1000 * 60 * 60 * 24));
alert(dias);

