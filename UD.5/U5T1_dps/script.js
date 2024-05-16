// Crear cookies
document.cookie = "usuario=tu nombre; expires=Thu, 31 Dec 2024 23:59:59 GMT";
document.cookie = "edad=tu edad; expires=Thu, 31 Dec 2024 23:59:59 GMT";
document.cookie = "curso=daw2; expires=Thu, 31 Dec 2024 23:59:59 GMT";

// Funcion para obtener el valor de una cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Almacenar datos en LocalStorage
localStorage.setItem('usuario', 'tu nombre');
localStorage.setItem('edad', 'tu edad');
localStorage.setItem('curso', 'daw2');

// Almacenar datos en SessionStorage
sessionStorage.setItem('usuario', 'tu nombre');
sessionStorage.setItem('edad', 'tu edad');
sessionStorage.setItem('curso', 'daw2');

// Almacenar y mostrar datos guardados en LocalStorage
const usuarioLocalStorage = localStorage.getItem('usuario');
const edadLocalStorage = localStorage.getItem('edad');
const cursoLocalStorage = localStorage.getItem('curso');
alert(`Datos guardados en LocalStorage:\nUsuario: ${usuarioLocalStorage}\nEdad: ${edadLocalStorage}\nCurso: ${cursoLocalStorage}`);

// Almacenar y mostrar datos guardados en SessionStorage
const usuarioSessionStorage = sessionStorage.getItem('usuario');
const edadSessionStorage = sessionStorage.getItem('edad');
const cursoSessionStorage = sessionStorage.getItem('curso');
alert(`Datos guardados en SessionStorage:\nUsuario: ${usuarioSessionStorage}\nEdad: ${edadSessionStorage}\nCurso: ${cursoSessionStorage}`);

/*
 * Daniel Perez Serrano 
 */