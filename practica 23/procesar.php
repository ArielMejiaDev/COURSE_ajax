<?php
sleep(1);
$buscarTexto = $_REQUEST['buscar'];
//$buscarTexto = "ar";
$longBTexto = strlen($buscarTexto);
//datos devueltos de la base de datos en un arreglo
//inicialmente los colocare en un arreglo quemado, mas tarde vendran de la bd
$coincidencias = array(112201,023256,20154,25698,1002547,874596,2058798);
if ($longBTexto>0) {
  //debo comparar en cada letra de la cadena de texto dada si coincide con el
  //mismo numero de letras de alguno de los textos del arreglo
  for ($i=0; $i <count($coincidencias) ; $i++) {
    if ($buscarTexto==substr($coincidencias[$i],0,strlen($buscarTexto))) {
      $sugerencias[] = $coincidencias[$i];
    }
  }
}
//echo '<pre>' ,  print_r($sugerencias)  ,'</pre>';
echo '<div class="row">
  <div class="col-12">
    <div class="list-group" id="sugerencias" role="tablist">';
    if (isset($sugerencias)) {
      for ($i=0; $i < count($sugerencias); $i++) {
        echo '<a class="list-group-item list-group-item-action" id="sugerenciaListItem'.$i.'" data-toggle="list" href="'.$sugerencias[$i].'" role="tab" aria-controls="home">'.$sugerencias[$i].'</a>';
      }
    }
echo '</div>
    </div>
  </div>';
?>
