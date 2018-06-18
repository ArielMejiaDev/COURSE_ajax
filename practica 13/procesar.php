<?php
$archivo = fopen("comentarios.txt","a") or die("No se pudo crear el archivo");
fputs($archivo,"Nombre: " . $_REQUEST['nombre'] . "\n");
fputs($archivo,"Comentario: " . $_REQUEST['comentario'] . "\n");
fclose($archivo);
sleep(1);
$archivo = fopen("comentarios.txt","r");
while (!feof($archivo)) {
  $linea = fgets($archivo);
  echo $linea . '<br/>';
}
fclose($archivo);
