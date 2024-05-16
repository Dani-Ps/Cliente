function hacerAlgo() {
      setTimeout(function () {
      console.log("Haciendo algo...");
     
        }, 5000);
        hacerOtraCosa();
  }
function hacerOtraCosa() {
       setTimeout(function () {
      console.log("Haciendo otra cosa...");
      console.log("Todas las tareas asincrónicas están completas.");
    }, 2000);
   
  }
hacerAlgo();

console.log("El código continúa ejecutándose de manera síncrona.");

  