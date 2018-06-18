<?php
$archivo = fopen("archivo.txt","a") or die("No se pudo crear el archivo");
fputs($archivo,"nombre : ".$_GET['nombre']." Voto : ".$_GET['voto']."<br><br>");
fclose($archivo);
$archivo = fopen("archivo.txt","r") or die("No se pudo leer el archivo");
while (!feof($archivo)) {
  $linea = fgets($archivo);
  echo $linea;
}
fclose($archivo);
