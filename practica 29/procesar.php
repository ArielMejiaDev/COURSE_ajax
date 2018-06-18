<?php

$cad=json_decode(stripslashes($_REQUEST['cadena']));

echo 'Nombre:'.$cad->nombre;
echo '<br>';
echo 'Edad:'.$cad->edad;
echo '<br>';
echo 'Peso:'.$cad->tallas[0];
echo '<br>';
echo 'Estatura:'.$cad->tallas[1];
echo '<br>';
?>