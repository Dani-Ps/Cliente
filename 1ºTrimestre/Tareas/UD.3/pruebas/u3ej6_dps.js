function Disco() {
    this.nombre = "";
    this.grupoCantante = "";
    this.tipo = "";
    this.localizacion = 0;
    this.prestado = false;

    this.completarDisco = function (nombre, grupoCantante, tipo, localiacion) {
        this.nombre = nombre;
        this.grupoCantante = grupoCantante;
        this.tipo = tipo;
        this.localizacion = localiacion;
        this.prestado = false;
    }
    this.cambiarLocalizacion = function (localizacion) {
        this.localizacion = localizacion;
    }
    this.prestado = function (prestado) {
        this.prestado = prestado;
    }
    this.mostrarDisco= function (Disco) {
        console.log(Disco);
    }
}

