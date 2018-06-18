<?php
if ($_GET['server']=="apache") {
  echo "Servidor para stack LAMP";
}elseif ($_GET['server']=="nginx") {
  echo "Servidor para stack MEAN";
}elseif ($_GET['server']=="azure") {
  echo "Servidor para .NET";
}
