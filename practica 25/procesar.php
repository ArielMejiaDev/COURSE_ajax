<?php  
$cui = $_REQUEST['cui'];
if ($cui == 1) {
	$nombre = 'Ariel';
	$apellido = 'Salvador';
	$direccion = 'zona 6';
	$datos = array($nombre,$apellido,$direccion);
}
if ($cui == 2) {
	$nombre = 'Steve';
	$apellido = 'Rogers';
	$direccion = 'zona 1';
	$datos = array($nombre,$apellido,$direccion);
}
if ($cui == 3) {
	$nombre = 'Clint';
	$apellido = 'Barton';
	$direccion = 'zona 10';
	$datos = array($nombre,$apellido,$direccion);
}
echo "{
        \"nombre\":\"$nombre\",
        \"apellido\":\"$apellido\",
        \"direccion\":\"$direccion\"
      }";