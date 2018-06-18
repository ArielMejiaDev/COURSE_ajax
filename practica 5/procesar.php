<?php
$archivo = fopen("votos.txt","a") or die("No se pudo crear el archivo");
fputs($archivo,'voto: ' . $_GET['voto'] . ".-\n");
fclose($archivo);
