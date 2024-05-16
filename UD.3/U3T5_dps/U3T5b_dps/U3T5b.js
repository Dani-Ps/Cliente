// Función para procesar una cadena
function procesarCadena() {
  // Solicito al usuario que ingrese una cadena con el formato
  const cadena = prompt(
    "Ingresa la cadena en el formato 'nombre:apellidos:telefono:email:codigopostal'"
  );

  if (cadena) {
    // Si el usuario ha proporcionado una cadena, la separo en partes
    const partes = cadena.split(":");

    if (partes.length === 5) {
      // Si el total de las partes es igual a 5 le hago el tratamiento
      const codigoPostal = partes[4];
      const apellidos = partes[1];
      const email = partes[3];
      // Obtengo el servidor de email a partir del email completo mediante la funcion
      const servidorEmail = obtenerServidorEmail(email);

      // Muestro la información por el html
      document.write("<p>Código Postal: " + codigoPostal + "</p>");
      document.write("<p>Apellidos: " + apellidos + "</p>");
      document.write("<p>Email: " + email + "</p>");
      document.write("<p>Servidor de Email: " + servidorEmail + "</p>");
    } else {
      // Si la cadena no tiene 5 partes, mueestro un mensaje de error
      document.write(
        "<p>Error: La cadena debe tener exactamente 5 partes separadas por ':'.</p>"
      );
    }
  } else {
    // Si el usuario no ha proporcionado ninguna cadena
    document.write("<p>No ingresaste ninguna cadena.</p>");
  }
}

// Función para obtener el servidor de email a partir del email completo
function obtenerServidorEmail(email) {
  const partesEmail = email.split("@"); // Esta variable almacena el servidor de email
  // Devuelvo el servidor de email o un mensaje de error si no se pudo determinar
  return partesEmail[1] || "No se pudo determinar el servidor de email";
}

// Llamo a la función para procesar una cadena
procesarCadena();

/**
 * Autor: Daniel Perez Serrano
 */
