<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>practica 5</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script type="text/javascript" src="functions.js">

    </script>
  </head>
  <body>
    <div class="container">
      <div class="col-10 ml-2">
        <h1 class="text-center">vota</h1>
        <p class="text-center"><img src="user.png" class="img-fluid pull-xs-left" alt="..."></p>
        <nav aria-label="">
          <ul class="pagination" id="calificaciones">
            <li class="page-item"><a class="page-link" href="procesar.php?voto=1">1</a></li>
            <li class="page-item"><a class="page-link" href="procesar.php?voto=2">2</a></li>
            <li class="page-item"><a class="page-link" href="procesar.php?voto=3">3</a></li>
            <li class="page-item"><a class="page-link" href="procesar.php?voto=4">4</a></li>
            <li class="page-item"><a class="page-link" href="procesar.php?voto=5">5</a></li>
            <li class="page-item"><a class="page-link" href="procesar.php?voto=6">6</a></li>
            <li class="page-item"><a class="page-link" href="procesar.php?voto=7">7</a></li>
            <li class="page-item"><a class="page-link" href="procesar.php?voto=8">8</a></li>
            <li class="page-item"><a class="page-link" href="procesar.php?voto=9">9</a></li>
            <li class="page-item"><a class="page-link" href="procesar.php?voto=10">10</a></li>
          </ul>
        </nav>
        <div class="card">
          <div class="card-body" id="respuesta"></div>
        </div>
        <div class="input-group" style="margin-top:20px">
          <a href="votos.txt" class="btn btn-info">Ver resultado de votaciones</a>
        </div>
      </div>
    </div>
  </body>
</html>
