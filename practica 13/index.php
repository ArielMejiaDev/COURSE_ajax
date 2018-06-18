<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Practica 13</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script type="text/javascript" src="functions.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="col-10 ml-2">
        <h3 style="margin-top:20px">Mostrar gif mientras se enviar y reciben datos del servidor</h3>
        <form class="" action="procesar.php" method="post" id="formulario">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" class="form-control" id="nombre" placeholder="Escribe tu nombre aquí" autofocus>
          </div>
          <div class="form-group">
            <label for="comentario">Comentario</label>
            <textarea name="comentario" rows="8" cols="80" id="comentario" class="form-control" placeholder="Deja tu comentario aquí"></textarea>
          </div>
          <button type="submit" name="boton" id="boton" class="btn btn-info">Enviar</button>
        </form>
        <div class="card" style="margin-top:20px">
          <div class="card-body" id="respuesta"></div>
        </div>
      </div>
    </div>
  </body>
</html>
