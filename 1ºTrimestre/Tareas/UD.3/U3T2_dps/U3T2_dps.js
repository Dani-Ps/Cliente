// Variables

let socios = [];
/**
 * 
 * Declaración de objeto Socio
 * Tiene las siguientes variable: numeroSocio, dni, nombre, apellido
 *  fecha de nacimiento y localidad.
 */
function Socio() {
    this.numeroSocio = "";
    this.dni = "";
    this.nombre = "";
    this.apellido = "";
    this.fechaNacimiento = "";
    this.localidad = "";

    this.alta = function (numeroSocio, dni, nombre, apellido, fechaNacimiento, localidad) {
        this.numeroSocio = numeroSocio;
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.localidad = localidad;

        socio = this.alta(numeroSocio, dni, nombre, apellido, fechaNacimiento, localidad);
        socios.push(socio);
    }
    this.baja = function (numeroSocio, dni) {

        if (socio = this.buscar(numeroSocio, dni) != null) {
            socios.pop(socio);
        }
    }

    this.modificarLocalidad = function (numeroSocio, dni, localidad) {
        let exito = false;
        socio = this.buscar(numeroSocio, dni);
        if (socio != null) {
            socio.localidad = localidad;
            exito = true;
        } else {
            alert("No se encuentra al socio.");

        }
        return exito;
    }

    this.buscar = function (numeroSocio, dni) {
        socio = new Socio();
        socios.forEach(s => Object.keys(s)); {

            if (_keys[0] === numeroSocio && _keys[1] === dni) {
                socio = s;
            } else {
                alert("No se encuentra al socio.");
            }

        };

        return socio;
    }

    this.categoria = function (fechaNacimiento) {

        socios.forEach(function (value, index)); {




        }
    }
}



