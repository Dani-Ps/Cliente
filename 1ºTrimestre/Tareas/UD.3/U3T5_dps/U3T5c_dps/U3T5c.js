const Runner = {
  Nombre: "",
  Apellidos: "",
  Evento: "",
  Fecha: null,
  Dorsal: 0,
  HoraInicio: null,
  HoraFinalizacion: null,

  solicitarDatos: function () {
    this.Nombre = prompt("Nombre:");
    this.Apellidos = prompt("Apellidos:");
    this.Evento = prompt("Evento:");
    const fechaStr = prompt("Fecha (YYYY-MM-DD):");
    this.Fecha = this.validarFecha(fechaStr);
    this.Dorsal = parseInt(prompt("Dorsal:"));
    const inicioStr = prompt("Hora de Inicio (HH:MM:SS):");
    this.HoraInicio = this.validarHora(inicioStr);
    const finalizacionStr = prompt("Hora de Finalización (HH:MM:SS):");
    this.HoraFinalizacion = this.validarHora(finalizacionStr);
  },

  validarFecha: function (fechaStr) {
    const fecha = new Date(fechaStr);
    if (isNaN(fecha.getTime())) {
      alert("Fecha no válida. Se utilizará la fecha actual.");
      return new Date();
    }
    return fecha;
  },

  validarHora: function (horaStr) {
    const partesHora = horaStr.split(":");
    if (partesHora.length !== 3) {
      alert("Formato de hora incorrecto. Se utilizará 00:00:00.");
      return null; // Devuelve null si el formato de hora es incorrecto
    }
    const hora = parseInt(partesHora[0]);
    const minutos = parseInt(partesHora[1]);
    const segundos = parseInt(partesHora[2]);

    if (
      isNaN(hora) ||
      isNaN(minutos) ||
      isNaN(segundos) ||
      hora < 0 ||
      hora > 23 ||
      minutos < 0 ||
      minutos > 59 ||
      segundos < 0 ||
      segundos > 59
    ) {
      alert("Hora no válida. Se utilizará 00:00:00.");
      return null; // Devuelve null si la hora no es válida
    }

    return new Date(1970, 0, 1, hora, minutos, segundos);
  },

  calcularMarca: function () {
    if (this.HoraInicio && this.HoraFinalizacion) {
      const tiempoInicio = this.HoraInicio.getTime();
      const tiempoFinalizacion = this.HoraFinalizacion.getTime();
      const tiempoTranscurrido = tiempoFinalizacion - tiempoInicio;

      if (tiempoTranscurrido < 0) {
        return "00:00:00"; // Devuelve 00:00:00 si la finalización es anterior al inicio
      }

      // Calcula horas, minutos y segundos
      const segundos = Math.floor(tiempoTranscurrido / 1000);
      const minutos = Math.floor(segundos / 60);
      const horas = Math.floor(minutos / 60);

      // Ajusta minutos y segundos
      const minutosAjustados = minutos % 60;
      const segundosAjustados = segundos % 60;

      // Formatea la marca en hh:mm:ss
      const marca =
        (horas < 10 ? "0" : "") + horas + ":" +
        (minutosAjustados < 10 ? "0" : "") + minutosAjustados + ":" +
        (segundosAjustados < 10 ? "0" : "") + segundosAjustados;

      return marca;
    } else {
      return "00:00:00"; // Devuelve 00:00:00 si falta información de inicio o finalización
    }
  }
};

// Solicitar datos al usuario
Runner.solicitarDatos();

// Mostrar resultados en el HTML utilizando document.write
document.write(`<p>Nombre: ${Runner.Nombre}</p>`);
document.write(`<p>Apellidos: ${Runner.Apellidos}</p>`);
document.write(`<p>Evento: ${Runner.Evento}</p>`);
document.write(`<p>Fecha: ${Runner.Fecha.toDateString()}</p>`);
document.write(`<p>Dorsal: ${Runner.Dorsal}</p>`);
document.write(
  `<p>Hora de Inicio: ${Runner.HoraInicio ? Runner.HoraInicio.toLocaleTimeString() : 'No especificada'}</p>`
);
document.write(
  `<p>Hora de Finalización: ${Runner.HoraFinalizacion ? Runner.HoraFinalizacion.toLocaleTimeString() : 'No especificada'}</p>`
);
document.write(`<p>Marca: ${Runner.calcularMarca()}</p>`);
