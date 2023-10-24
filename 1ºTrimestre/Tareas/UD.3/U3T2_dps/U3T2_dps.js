// Variables
let socios = []; // Este array almacenará los objetos de tipo Socio
/**
 *
 * Declaración de objeto Socio
 * Tiene las siguientes variable: numeroSocio, dni, nombre, apellido
 * fecha de nacimiento y localidad.
 */
function Socio() {
  this.numeroSocio = "";
  this.dni = "";
  this.nombre = "";
  this.apellido = "";
  this.fechaNacimiento = "";
  this.localidad = "";

  /**
   * Método para dar de alta al un nuevo socio
   *
   * @param {string} numeroSocio // Numero de socio
   * @param {string} dni // DNI del socio
   * @param {string} nombre // Nombre del socio
   * @param {string} apellido // Apellido del socio
   * @param {string} fechaNacimiento // Fecha de nacimiento del socio
   * @param {string} localidad // Localidad del socio
   * @param {int} dimensionLista // Almacena la dimesion del array
   * @param {int} nuevaDimension // Almacena el valor de la dimesion del array con el socio añadido
   * @returns {boolean} exito Devuelve true si se ha añadido correctamente y false si no se ha añadido.
   */
  this.alta = function (
    numeroSocio,
    dni,
    nombre,
    apellido,
    fechaNacimiento,
    localidad
  ) {
    let dimensionLista = socios.length();
    let exito = false;
    let socio = new Socio();

    socio.numeroSocio = numeroSocio;
    socio.dni = dni;
    socio.nombre = nombre;
    socio.apellido = apellido;
    socio.fechaNacimiento = fechaNacimiento;
    socio.localidad = localidad.toLowerCase();

    let nuevaDimension = socios.push(socio); // Declaro y añado al socio e inicializo la nueva variable con lo que retorna el método push().

    if (nuevaDimension > dimensionLista) {
      exito = true;
    }
    return exito;
  };

  /**
   * Métpdo para eliminar un socio.
   *
   * @param {String} numeroSocio // Numero de sociodel socio a eliminar.
   * @param {String} dni // Dni del socio a eliminar.
   * @param {Array} elemtoEliminado // Este array almacena el socio que se ha eliminado.
   * @returns {boolean} exito - Devuelve true si se ha eliminado correctamente y false en caso contrario.
   */
  this.baja = function (numeroSocio, dni) {
    let exito = false;
    // Busco en la lista el socio que tenga el @numeroSocio y @dni iguales.
    socios.forEach((socio, index) => {
      if (socio.numeroSocio === numeroSocio && socio.dni === dni) {
        let elemtoEliminado = socios.splice(index, 1); // Si lo encuentro lo elimino.
        if (elemtoEliminado.length === 1) {
          // Si el array que devuelve tiene un elemento, se ha eliminado correctamente
          exito = true;
        }
      }
    });
    return exito;
  };

  /**
   * Métpdo para modificar la localidad de un Socio.
   *
   * @param {String} numeroSocio // Numero de sociodel socio.
   * @param {String} dni // Dni del socio.
   * @param {String} localidad // La localidad que a la que se desea cambiar.
   * @param {Socio} socio // Almacena el objeto socio del que se modifica la localidad.
   * @returns {boolean} exito - Devuelve true si se ha modificado la localidad correctamente y false en caso contrario.
   */
  this.modificarLocalidad = function (numeroSocio, dni, localidad) {
    let exito = false;
    let socio = this.buscar(numeroSocio, dni);

    if (socio != null) {
      const numeroSocioOriginal = socio.numeroSocio;
      const dniOriginal = socio.dni;
      const nombreOriginal = socio.nombre;
      const apellidoOriginal = socio.apellido;
      const fechaNacimientoOriginal = socio.fechaNacimiento;
      const index = socios.indexOf(socio);

      socios.splice(index, 1);

      let nuevoSocio = new Socio();

      nuevoSocio.numeroSocio = numeroSocioOriginal;
      nuevoSocio.dni = dniOriginal;
      nuevoSocio.nombre = nombreOriginal;
      nuevoSocio.apellido = apellidoOriginal;
      nuevoSocio.fechaNacimiento = fechaNacimientoOriginal;
      nuevoSocio.localidad = localidad;

      socios.push(nuevoSocio);
      exito = true;
    } else {
      alert("No se encuentra al socio.");
    }

    return exito;
  };

  this.buscar = function (numeroSocio, dni) {
    let existeSocio = null;
    socios.forEach(function (socio) {
      if (socio.numeroSocio === numeroSocio && socio.dni === dni)
        existeSocio = socio;
    });

    return existeSocio;
  };

  this.categoria = function (fechaNacimiento) {
    let anho = parseInt(fechaNacimiento.slice(6, 10));
    let edad = 2023 - anho;
    let mensaje = "";

    if (edad >= 19) {
      mensaje = "Es Senior";
    } else if (edad >= 16 && edad <= 18) {
      mensaje = "Es Juvenil";
    } else if (edad >= 14 && edad <= 15) {
      mensaje = "Es Cadete";
    } else if (edad >= 12 && edad <= 13) {
      mensaje = "Es Infantil";
    } else if (edad >= 10 && edad <= 11) {
      mensaje = "Es Alevin";
    } else if (edad >= 8 && edad <= 9) {
      mensaje = "Es Benjamin";
    } else {
      mensaje = "Edad no clasificada en ninguna categoría.";
    }

    return mensaje;
  };

  this.mostrarDatos = function (dni, nombre, apellido) {
    let socioEncontrado = null;
    socios.forEach(function (socio) {
      if (
        socio.dni === dni &&
        socio.nombre === nombre &&
        socio.apellido === apellido
      ) {
        socioEncontrado = socio;
      }
    });

    return socioEncontrado;
  };

  this.sociosCategoria = function (categoria) {
    let lista = [];
    let anhoFiltro;

    switch (categoria.toLowerCase()) {
      case "senior":
        alert("Senior: Nacidos en 2004 o antes.");
        anhoFiltro = 2004;
        break;
      case "juvenil":
        alert("Juvenil: Nacidos en 2005.");
        anhoFiltro = 2005;
        break;
      case "cadetes":
        alert("Cadetes: Nacidos en 2006");
        anhoFiltro = 2006;
        break;
      case "infantil":
        alert("Infantil: Nacidos en 2007.");
        anhoFiltro = 2007;
        break;
      case "alevin":
        alert("Alevín: Nacidos en 2008.");
        anhoFiltro = 2008;
        break;
      case "benjamin":
        alert("Benjamín: Nacidos en 2009.");
        anhoFiltro = 2009;
        break;
      default:
        alert("Valor no encontrado.");
        break;
    }

    socios.forEach(function (socio) {
      const fechaNacimiento = socio.fechaNacimiento;
      const anioNacimiento = parseInt(fechaNacimiento.split("/")[2]);

      if (anioNacimiento === anhoFiltro) {
        lista.push(socio);
      }
    });

    return lista;
  };

  this.sociosLocalidad = function (localidad) {
    let lista = [];

    socios.forEach(function (socio) {
      if (socio.localidad === localidad) {
        lista.push(socio);
      } else {
        alert("ERROR. -No hay ningún socio de esa localidad.");
      }
    });

    return lista;
  };
}
