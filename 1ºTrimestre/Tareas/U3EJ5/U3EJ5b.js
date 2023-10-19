let cumpleaños = prompt("Introduce tu fecha de cumpleaños: (DD/MM/YY)");
let dia = parseInt(cumpleaños.slice(0, 2));
let mes = parseInt(cumpleaños.slice(3, 5));

let contador = 0;
for (let año = 2023; año <= 2088; año++) {
    let fecha = new Date(año, mes - 1, dia);
    if (fecha.getDay() === 6) { 
        contador++;
    }
}

alert("Caerán en sábado: " + contador + " cumpleaños hasta el 2088.");
