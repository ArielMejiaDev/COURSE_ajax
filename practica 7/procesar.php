<?php
$archivo = fopen("comentarios.txt","a") or die("No se pudo crear el archivo");
fputs($archivo, 'nombre: ' . $_POST['nombre'] . ". \n");
fputs($archivo, 'comentario: ' . $_POST['comentario'] . ". \n");
fclose($archivo);
