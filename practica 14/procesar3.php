<?php
if (isset($_REQUEST['pos'])) {
  $inicio = $_REQUEST['pos'];
}else{
  $inicio = 0;
}
$limite=3;
$conexion = mysqli_connect("localhost","root","","bdajax") or die("Problemas para conectarse con la base de datos");
$registros = mysqli_query($conexion,"SELECT * FROM comentarios LIMIT $inicio, $limite") or die("Error en la consulta " . mysqli_error($conexion));
$registrosImpresos=0;
while ($a=mysqli_fetch_array($registros)) {
  $registrosImpresos++;
  echo "Nombre: " . $a['nombre'] ."<br/>";
  echo "Fecha: " . $a['fecha'] ."<br/>";
  echo "Descripcion: " . $a['descripcion'] ."<br/><br/>";
}
echo "<br>";
echo "El total de Comentarios mostrados es de: " . $registrosImpresos . "<br/>";
if ($registrosImpresos==$limite) {
  $siguiente=$inicio+$limite;
  echo '<a href="procesar3.php?pos='.$siguiente.'">siguiente</a>';
}else{
  echo "<p>Siguiente</p>";
}
?>
