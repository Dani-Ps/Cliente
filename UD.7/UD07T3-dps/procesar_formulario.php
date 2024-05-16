<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario POST
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
    $apellido = isset($_POST['apellido']) ? $_POST['apellido'] : '';

    // Obtener los datos de la imagen
    $foto_temporal = isset($_FILES['foto']['tmp_name']) ? $_FILES['foto']['tmp_name'] : '';

    // Directorio donde se guardarán las imágenes (ajusta esto según tu estructura)
    $directorio_destino = 'images/';
    if (!file_exists($directorio_destino)) {
      mkdir($directorio_destino, 0777, true);
  }
      // Generar un nombre único para la imagen
    $nombre_imagen = basename($_FILES['foto']['name']);
    
    // Ruta completa del archivo
    $ruta_imagen = $directorio_destino . $nombre_imagen;

    // Mover la imagen al directorio de destino
    move_uploaded_file($foto_temporal, $ruta_imagen);
  
    // Crear un array asociativo con los datos
    $datos = array(
        'nombre' => $nombre,
        'apellido' => $apellido,
        'ruta_imagen' => $ruta_imagen
        
    );

    // Devolver los datos como JSON
    header('Content-Type: application/json');
    echo json_encode($datos);
}

?>
