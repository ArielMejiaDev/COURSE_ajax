<?php
sleep(1);
$user = "root";
$password = "";
if (isset($_GET['pos'])) {
  $inicio = $_GET['pos'];
}else{
  $inicio = 0;
}
$limite=3;
$conexion = new PDO("mysql:host=localhost;dbname=bdajax",$user,$password);
$query = "SELECT * FROM comentarios LIMIT $inicio,$limite";
$stmt = $conexion->prepare($query);
$stmt->execute();
$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
//echo '<pre>',print_r($resultado),'<pre>';
$filasRecorridas =0;
foreach ($resultado as $fila) {
  $filasRecorridas++;
  echo  'Nombre: ' .$fila['nombre'] . '<br/>';
  echo  'Fecha: ' .$fila['fecha'] . '<br/>';
  echo  'Descripcion: ' .$fila['descripcion'] . '<br/><hr><br/>';
}
  echo 'El número de comentarios cargados es de: ' . $filasRecorridas . '<br/>';

  if ($inicio !=0) {
    $anterior=$inicio-3;
    echo ' <a href="procesar4.php?pos='.$anterior.'" id="anterior" class="btn btn-primary btn-sm" style="margin-top:20px; margin-bottom:20px"> <-Anteriores </a> ';
  }

  if ($filasRecorridas >= 3) {
    $siguiente=$inicio+3;
    echo ' <a href="procesar4.php?pos='.$siguiente.'" id="siguiente" class="btn btn-primary btn-sm" style="margin-top:20px; margin-bottom:20px"> Siguientes -></a> ';
  }else{
    echo '<p>No hay mas comentarios disponibles <p>';
  }
