<?php
sleep(1);
$codigo = $_REQUEST['cod'];
if ($codigo == 1) {
  $materias = array("Matematicas 1","Calculo 1","Contabilidad 1");
}elseif ($codigo == 2) {
  $materias = array("Fisica 1","Fluidos 1","Programacion 1");
}
elseif ($codigo == 3) {
  $materias = array("Programacion 2","Electronica 1","Calculo 2");
}
//echo '<pre>',print_r($materias),'</pre>';
$xml="<?xml version=\"1.0\"?>\n";
$xml.="<materias>\n";
for($f=0;$f<count($materias);$f++)
{
  $xml.="<materia>".$materias[$f]."</materia>\n";
}
$xml.="</materias>\n";
header('Content-Type: text/xml');
echo $xml;
