let valor0= "cadena";

console.log(parseInt(valor0)); // Resultado NaNN


let valor1= "12345";

console.log(parseInt(valor1)); // Resultado 12345


let valor2= "cadena12345";

console.log(parseInt(valor2)); // Resultado NaNN


let valor3= "12345cadena";

console.log(parseInt(valor3)); // Resultado 1235


let valor4= "12345cadena";

console.log(isNaN(valor4)); // Resultado true


let valor5= "cadena";

console.log((valor5)*1); // Resultado NaNN


let valor6= "12345cadena";

console.log((valor6)*1); // Resultado NaNN

let valor7= "";

console.log((valor7)*1); // Resultado 0

let valor8= null;

console.log((valor8)*1); // Resultado 0

let valor9= null;

console.log(parseInt(valor9)*1); // Resultado NaNN


let valor10= "12313fdfd";

console.log(isNaN(valor10*1)); // Resultado NaNN
