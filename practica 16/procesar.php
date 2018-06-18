<?php
$car=$_REQUEST['cod'];
if ($car==1)
{
  $materias=array('Programacion I','Analisis Matematico','Estructura de las Organizaciones','Etica Profesional');
}
if ($car==2)
{
  $materias=array('Fundamentos de Fisica','Analisis Matematico 1','Ingles Tecnico I','Sistemas de Comunicaciones I
');
}
if ($car==3)
{
  $materias=array('Informatica I','Multimedia I','Bases de Datos');
}
//echo '<pre>,'.print_r($materias).',<pre>';
// foreach ($materias as $key => $value) {
//   echo $value . '<br/>';
// }

//archivo xml para mostrar cada array de materias




foreach ($materias as $key => $value) {
  echo "<option value=''>".$value."</option>";
}









 ?>
