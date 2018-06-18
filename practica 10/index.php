<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>practica 10</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script type="text/javascript" src="functions.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="col-10 ml-2">
        <h3 style="margin-top:20px">Ingresa un número y se mostrará su cuadrado</h3>
        <form id="formulario" name="formulario" class="" action="" method="">
          <div class="form-group">
            <label for="numero">Ingrese Número</label>
            <input type="text" class="form-control" id="numero" name="numero" placeholder="Ingresa aquí el número a calcular">
          </div>
          <div class="form-group">
            <input type="submit" name="submit" value="Calcular cuadrado" class="btn btn-info" id="submit">
          </div>
        </form>
        <h3 style="margin-top:20px">Resultado:</h3>
        <div class="card" style="margin-top:20px">
          <div class="card-body" id="respuesta"></div>
        </div>
      </div>
    </div>
  </body>
</html>
