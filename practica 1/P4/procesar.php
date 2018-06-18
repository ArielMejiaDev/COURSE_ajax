<?php
if ($_GET['framework'] == "cd") {
  echo "este proyecto se realizara con codeigniter";
}elseif ($_GET['framework'] == "lara") {
  echo "este proyecto se realizara con Laravel";
}elseif ($_GET['framework'] =="slim") {
  echo "este proyecto se realizara con Slim Php";
}
