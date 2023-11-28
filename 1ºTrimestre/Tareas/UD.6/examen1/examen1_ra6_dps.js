var listaLi = document.getElementsByTagName("li"); // Almacena la coleccion de li

// Funcion que cambia la clase de los li al hacer click en cada uno
function changeClass(item) {

    if(item.classList.contains('done')){

        item.classList.remove('done')
        
    }else{
        item.classList.add('done')
    }

}
// Captura los eventos de click en los li y llama a la funcion de cambio de clase 
for (const item of listaLi) {
    item.addEventListener("click",function (){
        changeClass(item)
    });
     
}

/**
 * Daniel Perez Serrano
 */