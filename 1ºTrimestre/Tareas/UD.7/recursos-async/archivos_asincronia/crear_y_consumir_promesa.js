// Crear una promesa
const miPromesa = new Promise((resolve, reject) => {
    // Simular una tarea asincrónica (por ejemplo, un setTimeout)
    setTimeout(() => {
      const exito = true; // Cambia a false para simular un rechazo
  
      if (exito) {
        // Si la tarea tiene éxito, llamamos a resolve con algún resultado
        resolve('¡La tarea se completó exitosamente!');
      } else {
        // Si la tarea falla, llamamos a reject con algún motivo de rechazo
        reject('¡La tarea falló!');
      }
    }, 2000); // Simulamos una tarea que tarda 2 segundos
});
  
  // Consumir la promesa
miPromesa
    .then(resultado => {
      // Este código se ejecutará si la promesa se cumple
      console.log('Éxito:', resultado);
    })
    .finally(console.log("He terminado"))
    .catch(error => {
      // Este código se ejecutará si la promesa es rechazada
      console.error('Error:', error);
    });
    
