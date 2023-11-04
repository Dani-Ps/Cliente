// Declaro el objeto Runner con sus atributos
const Runner = {
  Nombre: "",
  Apellidos: "",
  Evento: "",
  Fecha: null,
  Dorsal: 0,
  HoraInicio: null,
  HoraFinalizacion: null,
};

// Solicito datos al usuario y  los asigno a las atributos del objeto
Runner.Nombre = prompt("Nombre:");
Runner.Apellidos = prompt("Apellidos:");
Runner.Evento = prompt("Evento:");
const fechaStr = prompt("Fecha (YYYY-MM-DD):");
Runner.Fecha = new Date(fechaStr);
Runner.Dorsal = parseInt(prompt("Dorsal:"));
const inicioStr = prompt("Hora de Inicio (HH:MM:SS):");
Runner.HoraInicio = new Date(`1970-01-01T${inicioStr}`);
const finalizacionStr = prompt("Hora de Finalización (HH:MM:SS):");
Runner.HoraFinalizacion = new Date(`1970-01-01T${finalizacionStr}`);

// Calcular la marca
function calcularMarca() {
  if (Runner.HoraInicio && Runner.HoraFinalizacion) {
    const tiempoTranscurrido = Runner.HoraFinalizacion - Runner.HoraInicio;

    if (tiempoTranscurrido < 0) {
      // Si sale negativa la diferencia se pone a 0 el contador
      return "00:00:00";
    }
    // Declaro las propiedades del tiempo
    const segundos = Math.floor(tiempoTranscurrido / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const minutosAjustados = minutos % 60; // Ajustos los minutos para que estén entre 0-59 y lo mismo con los segundos
    const segundosAjustados = segundos % 60;
    return `${horas}:${minutosAjustados}:${segundosAjustados}`; // Devuelvo todos sus valores ya ajustados
  } else {
    return "00:00:00";
  }
}

// MUestro los resultados en el HTML
document.write(`<p>Nombre: ${Runner.Nombre}</p>`);
document.write(`<p>Apellidos: ${Runner.Apellidos}</p>`);
document.write(`<p>Evento: ${Runner.Evento}</p>`);
document.write(`<p>Fecha: ${Runner.Fecha.toDateString()}</p>`);
document.write(`<p>Dorsal: ${Runner.Dorsal}</p>`);

// Muestro la hora de inicio en formato legible o "No especificada" si no se proporciona los datos que se pide

document.write(
  `<p>Hora de Inicio: ${
    Runner.HoraInicio
      ? Runner.HoraInicio.toLocaleTimeString()
      : "No especificada"
  }</p>`
);
document.write(
  `<p>Hora de Finalización: ${
    Runner.HoraFinalizacion
      ? Runner.HoraFinalizacion.toLocaleTimeString()
      : "No especificada"
  }</p>`
);
document.write(`<p>Marca: ${calcularMarca()}</p>`); // Llamamos a la función calcularMarca
/**
 * Autor: Daniel Perez Serrano
 */
