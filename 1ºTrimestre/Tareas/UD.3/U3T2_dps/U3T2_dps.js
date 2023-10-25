// CONSTANTES

// Opciones para el control de Socio:
const OPC1 = "1. Alta de un nuevo socio:";
const OPC2 = "2. Baja de un socio:";
const OPC3 = "3. Modificar la  localidad de un socio:";
const OPC4 = "4. Ver categoría del socio:";
const OPC5 = "5. Mostrar todos los datos:";
const OPC6 = "6. Buscar socio:";
const OPC7 = "7. Ver socios de una categoría:";
const OPC8 = "8. Ver socios de una localidad:";

// Mensajes de fin, error y exito.
const FIN = "Fin del programa.";
const ERROR = "<p>ERROR. -Vuelve a intentalo.</p>";
const EXITO_ALTA = "<p> Se ha añadido correctamente el socio</p>";
const EXITO_BAJA = "<p>Se ha eliminado correctamente el socio</p>";
const EXITO_MODF_LOCL = "<p>Se ha modificado correctamente la localidad</p>";

// Para alta:
const DNI = "Introduce el DNI:\n";
const NOMBRE = "Introduce el nombre:\n";
const APELLIDO = "Introduce el apellido:\n";
const FECHA_NACIMIENTO = "Introduce tu fecha de nacimiento:\n";
const LOCALIDAD = "Introduce la localidad:\n";

// Para buscar: 
const NUMS_DNI = "Introduce el numero de socio o el dni del socio:\n";

// Para cambiar la localidad
const NEW_LOCALIDAD = "Introduce la nueva localidad:\n";

// Para mostrar datos
const DNI_NOMBRE = "Introduce el dni o el nombre completo de socio que deseas ver: \n";

// Para método de mostrar socios por categoria
const SOCIOS_CATEGORIA = "Introduce la categoría de la que quieras ver los socios:";

// VARIABLES

let socios = []; // Este array almacenará los objetos de tipo Socio.
let respuesta = ""; // Alamcena la respuesta del usuario según la opción que desee.
let cancelar = false; // Bandera que hace que el programa se ejecute infinitamente hasta que su valor es = 'true'.
let socio = new Socio(); // Inicializo el objeto de socio para traer todos los métodos.

// LOGICA 

while (!cancelar) {

  respuesta = parseInt(prompt("Pulsa \n:" + OPC1 + "\n" + OPC2 + "\n" + OPC3 + "\n" + OPC4 + "\n" + OPC5 + "\n" + OPC6 + "\n" + OPC7 + "\n" + OPC8));
  switch (respuesta) {

    case 1:

      let dni = prompt(DNI);
      let nombre = prompt(NOMBRE);
      let apellido = prompt(APELLIDO);
      let fechaNacimiento = prompt(FECHA_NACIMIENTO);
      let localidad = prompt(LOCALIDAD);

      if (socio.alta(dni, nombre, apellido, fechaNacimiento, localidad)) {

        document.write(
          EXITO_ALTA
        );

      } else {
        document.write(
          ERROR
        );
      }
      break;

    case 2:

      let dato = prompt(NUMS_DNI);

      if (socio.baja(dato)) {
        document.write(EXITO_BAJA);
      } else {
        document.write(ERROR);
      }
      break;

    case 3:

      let dato3 = prompt(NUMS_DNI);
      let localidad3 = promt(NEW_LOCALIDAD);

      if (socio.modificarLocalidad(dato, localidad3)) {
        document.write(EXITO_MODF_LOCL);
      } else {
        document.write(ERROR);
      }
      break;

    case 4:
      let fecha = prompt(FECHA_NACIMIENTO);
      let respueta = socio.categoria(fecha);
      if (respuesta != null && respuesta != "") {
        document.write("<p>" + mensaje + "</p>");
      } else {
        document.write(ERROR);
      }
      break;
    case 5:

      let lista5 = socio.socios;

      if (lista5.length > 1) {
        // hacer tabla
      } else {
        document.write(ERROR);
      }
      break;

    case 6:

      let dato6 = prompt(DNI_NOMBRE);
      let socio6 = (socio.mostrarDatos(dato6));

      if (socio6.length > 1) {
        // hacer tabla
      } else {
        document.write(ERROR);
      }

      break;

    case 7:
      
      let categoria = prompt(SOCIOS_CATEGORIA);
      let lista7 = socio.sociosCategoria(categoria);
      if (lista7.length > 1) {
        // hacer tabla
      } else {
        document.write(ERROR);
      }
      break;

    case 8:

      let localiad = prompt(LOCALIDAD);
      let lista8 = socio.sociosLocalidad(localiad);
      if (lista8.length > 1) {
        // hacer tabla
      } else {
        document.write(error);
      }
      break;
    default:
      document.write(error);
      break;
  }


}

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
    dni,
    nombre,
    apellido,
    fechaNacimiento,
    localidad
  ) {
    let contadorSocios = 1;
    let dimensionLista = socios.length;
    let exito = false;
    let socio = new Socio();

    socio.numeroSocio = contadorSocios;
    socio.dni = dni;
    socio.nombre = nombre;
    socio.apellido = apellido;
    socio.fechaNacimiento = fechaNacimiento;
    socio.localidad = localidad.toLowerCase();

    let nuevaDimension = socios.push(socio); // Declaro y añado al socio e inicializo la nueva variable con lo que retorna el método push().

    if (nuevaDimension > dimensionLista) {
      exito = true;
      contadorSocios++;
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
  this.baja = function (dato) {
    let exito = false;
    // Busco en la lista el socio que tenga el @numeroSocio y @dni iguales.
    socios.forEach((socio, index) => {
      if (socio.numeroSocio === dato || socio.dni === dato) {
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
  this.modificarLocalidad = function (dato, localidad) {
    let exito = false;
    let socio = this.buscar(dato);

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
    }
    return exito;
  };

  this.buscar = function (dato) {
    let existeSocio = null;
    socios.forEach(function (socio) {
      if (socio.numeroSocio === dato || socio.dni === dato)
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

  this.mostrarDatos = function (dato) {
    let socioEncontrado = null;
    socios.forEach(function (socio) {
      if (
        socio.dni === dato ||
        socio.nombre + " " + socio.apellido === dato
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


