<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>p2</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script type="text/javascript" src="funciones.js">

</script>
  </head>
  <body>
    <div class="container">
      <h1>Desempeño</h1>
      <div class="col-md-12">
        <ul class="list-group">
          <li class="list-group-item"><a id="enlace1" href="procesar.php?nota=baja">Baja</a></li>
          <li class="list-group-item"><a id="enlace2" href="procesar.php?nota=media">Media</a></li>
          <li class="list-group-item"><a id="enlace3" href="procesar.php?nota=alta">Alta</a></li>
        </ul>
      </div>
    </div>
    <div class="container" style="padding-top:10px">
      <div class="col-md-12">
        <div id="observacion" class="jumbotron">
        </div>
      </div>
    </div>
  </body>
</html>
