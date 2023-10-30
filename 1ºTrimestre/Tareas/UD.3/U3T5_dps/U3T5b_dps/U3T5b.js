function procesarCadena() {
  const cadena = prompt(
    "Ingresa la cadena en el formato 'nombre:apellidos:telefono:email:codigopostal'"
  );

  if (cadena) {
    const partes = cadena.split(":");

    if (partes.length === 5) {
      const codigoPostal = partes[4];
      const apellidos = partes[1];
      const email = partes[3];
      const servidorEmail = obtenerServidorEmail(email);

      document.write(`<p>Código Postal: ${codigoPostal}</p>`);
      document.write(`<p>Apellidos: ${apellidos}</p>`);
      document.write(`<p>Email: ${email}</p>`);
      document.write(`<p>Servidor de Email: ${servidorEmail}</p>`);
    } else {
      document.write(
        "<p>Error: La cadena debe tener exactamente 5 partes separadas por ':'.</p>"
      );
    }
  } else {
    document.write("<p>No ingresaste ninguna cadena.</p>");
  }
}

function obtenerServidorEmail(email) {
  const partesEmail = email.split("@");
  return partesEmail[1] || "No se pudo determinar el servidor de email";
}

procesarCadena();
