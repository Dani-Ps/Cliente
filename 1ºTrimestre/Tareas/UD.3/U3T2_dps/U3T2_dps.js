// Objeto para representar a un socio
function Socio(numeroSocio, dni, nombre, apellidos, fechaNacimiento, localidad) {
  this.numeroSocio = numeroSocio;
  this.dni = dni;
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.fechaNacimiento = fechaNacimiento;
  this.localidad = localidad;
}

// Objeto para gestionar la escuela de tenis y sus socios
const EscuelaDeTenis = {
  socios: [],

  // Método para dar de alta un nuevo socio
  altaSocio: function (numeroSocio, dni, nombre, apellidos, fechaNacimiento, localidad) {
    const nuevoSocio = new Socio(numeroSocio, dni, nombre, apellidos, fechaNacimiento, localidad);
    this.socios.push(nuevoSocio);
  },

  // Método para dar de baja un socio por número de socio o DNI
  bajaSocio: function (dato) {
    this.socios = this.socios.filter(function (socio) {
      return socio.numeroSocio !== dato && socio.dni !== dato;
    });
  },

  // Método para modificar la localidad de un socio
  modificarLocalidad: function (numeroSocio, nuevaLocalidad) {
    this.socios.forEach(function (socio) {
      if (socio.numeroSocio === numeroSocio) {
        socio.localidad = nuevaLocalidad;
      }
    });
  },

  // Método para determinar la categoría de un socio según su fecha de nacimiento
  calcularCategoria: function (fechaNacimiento) {
    const hoy = new Date();
    const anho = hoy.getFullYear() - fechaNacimiento.getFullYear();
    if (anho >= 19) {
      return "Senior";
    } else if (anho > 16 && anho < 18) {
      return "Juvenil";
    } else if (anho > 14 && anho < 15) {
      return "Cadetes";
    } else if (anho > 12 && anho < 13) {
      return "Infantil";
    } else if (anho > 10 && anho < 11) {
      return "Alevín";
    } else if (anho > 8 && anho < 9) {
      return "Benjamín";
    } else {
      return "Categoría no disponible";
    }
  },

  // Método para mostrar todos los datos de los socios en una tabla
  mostrarSocios: function () {
    document.write("<table border='1'>");
    document.write("<tr><th>Número de Socio</th><th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Fecha de Nacimiento</th><th>Localidad</th><th>Categoría</th></tr>");
    this.socios.forEach(function (socio) {
      const categoria = EscuelaDeTenis.calcularCategoria(socio.fechaNacimiento);
      document.write(`<tr><td>${socio.numeroSocio}</td><td>${socio.dni}</td><td>${socio.nombre}</td><td>${socio.apellidos}</td><td>${socio.fechaNacimiento.toDateString()}</td><td>${socio.localidad}</td><td>${categoria}</td></tr>`);
    });
    document.write("</table>");
  },

  // Método para buscar un socio por DNI o por nombre y apellidos
  buscarSocio: function (parametro) {
    const resultado = this.socios.find(function (socio) {
      return socio.dni === parametro || (socio.nombre + " " + socio.apellidos === parametro);
    });
    if (resultado) {
      document.write("<p>Resultado de la búsqueda:</p>");
      document.write(`<p>Número de Socio: ${resultado.numeroSocio}</p>`);
      document.write(`<p>DNI: ${resultado.dni}</p>`);
      document.write(`<p>Nombre: ${resultado.nombre}</p>`);
      document.write(`<p>Apellidos: ${resultado.apellidos}</p>`);
      document.write(`<p>Fecha de Nacimiento: ${resultado.fechaNacimiento.toDateString()}</p>`);
      document.write(`<p>Localidad: ${resultado.localidad}</p>`);
      document.write(`<p>Categoría: ${EscuelaDeTenis.calcularCategoria(resultado.fechaNacimiento)}</p>`);
    } else {
      document.write("<p>Socio no encontrado.</p>");
    }
  },

  // Método para buscar socios por categoría
  buscarSociosPorCategoria: function (categoriaBuscada) {
    document.write("<p>Socios en la categoría " + categoriaBuscada + ":</p>");
    this.socios.forEach(function (socio) {
      if (EscuelaDeTenis.calcularCategoria(socio.fechaNacimiento) === categoriaBuscada) {
        document.write(`<p>Número de Socio: ${socio.numeroSocio}</p>`);
        document.write(`<p>DNI: ${socio.dni}</p>`);
        document.write(`<p>Nombre: ${socio.nombre}</p>`);
        document.write(`<p>Apellidos: ${socio.apellidos}</p>`);
        document.write(`<p>Fecha de Nacimiento: ${socio.fechaNacimiento.toDateString()}</p>`);
        document.write(`<p>Localidad: ${socio.localidad}</p>`);
      }
    });
  },

  // Método para buscar socios por localidad
  buscarSociosPorLocalidad: function (localidad) {
    document.write("<p>Socios en la localidad " + localidad + ":</p>");
    this.socios.forEach(function (socio) {
      if (socio.localidad === localidad) {
        document.write(`<p>Número de Socio: ${socio.numeroSocio}</p>`);
        document.write(`<p>DNI: ${socio.dni}</p>`);
        document.write(`<p>Nombre: ${socio.nombre}</p>`);
        document.write(`<p>Apellidos: ${socio.apellidos}</p>`);
        document.write(`<p>Fecha de Nacimiento: ${socio.fechaNacimiento.toDateString()}</p>`);
      }
    });
  },
};

// Ejemplo de uso de las funciones
EscuelaDeTenis.altaSocio(1, "12345678A", "Juan", "Pérez", new Date(2000, 5, 15), "Madrid");
EscuelaDeTenis.altaSocio(2, "87654321B", "María", "González", new Date(2002, 3, 10), "Barcelona");
EscuelaDeTenis.altaSocio(3, "98765432C", "Carlos", "López", new Date(1999, 8, 20), "Madrid");

EscuelaDeTenis.mostrarSocios();

document.write("<p>Buscar socio por DNI:</p>");
EscuelaDeTenis.buscarSocio("12345678A");
