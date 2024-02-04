// Crear cookies
document.cookie = "usuario=Daniel; expires=Thu, 31 Dec 2024 23:59:59 GMT";
document.cookie = "edad=24 ; expires=Thu, 31 Dec 2024 23:59:59 GMT";
document.cookie = "curso=daw2; expires=Thu, 31 Dec 2024 23:59:59 GMT";

// Funcion que obtiene el valor de una cookie
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
localStorage.setItem('usuario', 'Daniel');
localStorage.setItem('edad', '24');
localStorage.setItem('curso', 'daw2');

// Almacenar datos en SessionStorage
sessionStorage.setItem('usuario', 'Daniel');
sessionStorage.setItem('edad', '24');
sessionStorage.setItem('curso', 'daw2');

// Recuperar y mostrar datos guardados en Localstorage
const usuarioLocalStorage = localStorage.getItem('usuario');
const edadLocalStorage = localStorage.getItem('edad');
const cursoLocalStorage = localStorage.getItem('curso');
alert(`Datos guardados en LocalStorage:\nUsuario: ${usuarioLocalStorage}\nEdad: ${edadLocalStorage}\nCurso: ${cursoLocalStorage}`);

// Recuperar y mostrar datos guardados en Sessionstorage
const usuarioSessionStorage = sessionStorage.getItem('usuario');
const edadSessionStorage = sessionStorage.getItem('edad');
const cursoSessionStorage = sessionStorage.getItem('curso');
alert(`Datos guardados en SessionStorage:\nUsuario: ${usuarioSessionStorage}\nEdad: ${edadSessionStorage}\nCurso: ${cursoSessionStorage}`);

/*
 * Daniel Perez Serrano 
 */