<?php
sleep(1);
  header('Content-Type: text/html; charset=utf-8');
  if ($_REQUEST['cod']=='c1')
  {
    echo "<p>Primer tooltip.</p>";
    echo "<p>primera linea <br/>";
    echo "segunda linea</p>";
  }
  if ($_REQUEST['cod']=='c2')
  {
    echo "<p>Segundo tooltip.</p>";
    echo "<p>contenido .....";
    echo "contenido...</p>";
  }
  if ($_REQUEST['cod']=='c3')
    echo "<p>Tercer tooltip.</p>";
  if ($_REQUEST['cod']=='c4')
    echo "<p>Cuarto tooltip.</p>";
?>
