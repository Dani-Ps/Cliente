function procesarCadena() {
    const cadena = prompt(
      'Introduce el tipo de producto, el modelo y la cantidad, con formato tipo_producto|modelo|cantidad@cz\n'
    );
  
    if (cadena) {
      const partes = cadena.split('|');
  
      if (partes.length === 3) {
        const tipo = partes[0];
        const modeloNumero = partes[1];
        const cantidadZona = partes[2];
  
        document.write('<p>Tipo de producto: ' + tipo + '</p>');
        document.write('<p>Letras de Modelo: ' + modeloNumero.substring(0,3)+ '</p>');
        document.write('<p>Numeros de Modelo: ' + modeloNumero.substring(3,6)+ '</p>');
        document.write('<p>Cantidad: ' + obtenerCantidad(cantidadZona).cantidad + '</p>');
        document.write('<p>Zona: ' + obtenerCantidad(cantidadZona).zona + '</p>');
      } else {
        document.write('<p>Error: La cadena debe tener exactamente 3 partes separadas por "|".</p>');
      }
    } else {
      document.write('<p>No ingresaste ninguna cadena.</p>');
    }
  
    function obtenerCantidad(cantidadZona) {
      const partes = cantidadZona.split('@');
      const cantidad = partes[0];
      const zona = partes[1];
      return { cantidad, zona };
    }
  }
  
  // Llamo a la función para procesar una cadena
  procesarCadena();
  
  /**
   * Autor: Daniel Perez Serrano
   */
  