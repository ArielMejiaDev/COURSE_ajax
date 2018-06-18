<?php
$nombre = "Ariel Salvador";
$nombre2 = "Otto";
$voto = 10;
$voto2 = 8;
$archivo = fopen("archivo.txt","a") or die("no se puede crear el archivo");
fputs($archivo,"nombre: ".$nombre." voto: ".$voto."<br>");
fputs($archivo,"nombre: ".$nombre2." voto: ".$voto2."<br><br>");
fclose($archivo);
$archivo = fopen("archivo.txt", "r") or die("no se puede ver el archivo");
while (!feof($archivo)) {
  $mostrar = fgets($archivo);
  echo $mostrar;
}
fclose($archivo);
