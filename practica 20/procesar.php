<?php
sleep(1);
$btn = $_REQUEST['btn'];
if ($btn == "btnEditar") {
  echo '<p class="text-center">Se editará el registro</p>';
}else if ($btn == "btnEliminar") {
  echo '<p class="text-center">Eliminara el registro</p>';
}
