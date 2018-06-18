<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Practica 12</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script type="text/javascript" src="functions.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="col-10 ml-2">
        <h3 style="margin-top:20px">Selecciona tu signo zodiacal</h3>
        <ul class="list-inline" id="menu">
          <li class="list-inline-item"><a id="enlace1" href="procesar.php?cod=1">Aries</a></li>
          <li class="list-inline-item"><a id="enlace2" href="procesar.php?cod=2">Tauro</a></li>
          <li class="list-inline-item"><a id="enlace3" href="procesar.php?cod=3">Geminis</a></li>
          <li class="list-inline-item"><a id="enlace4" href="procesar.php?cod=4">Cancer</a></li>
          <li class="list-inline-item"><a id="enlace5" href="procesar.php?cod=5">Leo</a></li>
          <li class="list-inline-item"><a id="enlace6" href="procesar.php?cod=6">Virgo</a></li>
          <li class="list-inline-item"><a id="enlace7" href="procesar.php?cod=7">Libra</a></li>
          <li class="list-inline-item"><a id="enlace8" href="procesar.php?cod=8">Escorpio</a></li>
          <li class="list-inline-item"><a id="enlace9" href="procesar.php?cod=9">Sagitario</a></li>
          <li class="list-inline-item"><a id="enlace10" href="procesar.php?cod=10">Capricornio</a></li>
          <li class="list-inline-item"><a id="enlace11" href="procesar.php?cod=11">Acuario</a></li>
          <li class="list-inline-item"><a id="enlace12" href="procesar.php?cod=12">Piscis</a></li>
          <p></p>
        </ul>
        <div class="card">
          <div class="card-body" id="detalle"></div>
        </div>
      </div>
    </div>
  </body>
</html>
