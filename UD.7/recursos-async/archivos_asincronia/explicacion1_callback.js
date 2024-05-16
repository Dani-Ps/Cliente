// Función asincrónica 1
function hacerAlgo(callback) {
    // Simular una tarea asincrónica (por ejemplo, un setTimeout)
    setTimeout(function () {
      console.log("Haciendo algo...");
      // Llamar al callback una vez que la tarea está completa
      callback();
    }, 1000);
}
  
  // Función asincrónica 2
function hacerOtraCosa(callback) {
    // Simular otra tarea asincrónica
    setTimeout(function () {
      console.log("Haciendo otra cosa...");
      // Llamar al callback una vez que la tarea está completa
      callback();
    }, 800);
}
  
  // Usar las funciones asincrónicas con callbacks
hacerAlgo(function () {
    // Este código se ejecutará después de que hacerAlgo haya terminado
    hacerOtraCosa(function () {
      // Este código se ejecutará después de que hacerOtraCosa haya terminado
      console.log("Todas las tareas asincrónicas están completas.");
    });
});
  
  console.log("El código continúa ejecutándose de manera síncrona.");
  