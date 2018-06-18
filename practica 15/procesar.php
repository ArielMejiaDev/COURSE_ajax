<?php
$user = "root";
$pass = "";
if (isset($_GET['pos'])) {
  $inicio = $_GET['pos'];
}else{
  $inicio = 0;
}
$limite = 3;
$conexion = new PDO("mysql:host=localhost;dbname=bdajax",$user,$pass);
$query = "SELECT * FROM comentarios LIMIT $inicio, $limite";
$stmt = $conexion->prepare($query);
$stmt->execute();
$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
//echo '<pre>',print_r($resultado),'</pre>';
$filasRecorridas=0;
foreach ($resultado as $key => $value) {
  $filasRecorridas++;
  echo 'Nombre : ' . $value['nombre'] . '<br/>';
  echo 'Fecha : ' . $value['fecha'] . '<br/>';
  echo 'Descripción : ' . $value['descripcion'] . '<br/><br/>';
}
//anterior
if ($inicio !=0) {
  $anterior = $inicio - $limite;
  echo ' <a href="procesar.php?pos='.$anterior.'" id="anterior" class="btn btn-primary btn-sm">Anterior</a> ';
}
//siguiente
if ($filasRecorridas>=3) {
  $siguiente = $inicio + $limite;
  echo ' <a href="procesar.php?pos='.$siguiente.'" id="siguiente" class="btn btn-primary btn-sm">Siguiente</a> ';
}
