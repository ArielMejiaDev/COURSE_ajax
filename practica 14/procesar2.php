<?php
if (isset($_REQUEST['pos'])) {
  $inicio = $_REQUEST['pos'];
}else{
  $inicio = 0;
}
$conexion=mysqli_connect("localhost","root","","bdajax") or
    die("Problemas con la conexión");

$registros=mysqli_query($conexion,"select * from comentarios limit $inicio,3") or
  die("Problemas en el select:".mysqli_error($conexion));
$impresos=0;
foreach ($registros as $linea) {
  $impresos++;
  echo $linea['nombre']."<br>";
  echo $linea['fecha']."<br>";
  echo $linea['descripcion']."<br>";
}
echo "<br>";
echo "el numero de registros mostrados es de: " . $impresos;
echo "<br/>";
mysqli_close($conexion);
if ($inicio == 0) {
  echo " Anteriores ";
}else{
  $anterior = $inicio - 3;
  echo '<a href="procesar2.php?pos='.$anterior.'" id="ant">Anteriores</a> ';
}
if ($impresos==3) {
  $siguiente = $inicio+3;
  echo ' <a href="procesar2.php?pos='.$siguiente.'" id="sig">Siguiente</a>';
}
