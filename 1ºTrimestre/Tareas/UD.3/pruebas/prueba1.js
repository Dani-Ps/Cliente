function Coche(marca, modelo, combustible) {

    this.marca = marca;
    this.modelo = modelo;
    this.combustible = combustible;
    this.litros = 200; // Valor forzado.

}
let miCoche = new Coche("Audi","Q7","Gasolina");
miCoche.litros= 300; // Valor forzado se cambia así.
console.log(miCoche);
