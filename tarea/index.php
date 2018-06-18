<?php
class html{
  public $titulo = "hola phperos";
  public function header(){
    echo "<!DOCTYPE html>
    <html>
      <head>
        <title>".$this->titulo."</title>
      </head>";
  }
  public function body(){
    echo "<body>";
  }
  public function footer(){
    echo "</body>
          </html>";
  }
}
$pagina = new html();
$pagina->header();
$pagina->body();
$pagina->footer();
?>
