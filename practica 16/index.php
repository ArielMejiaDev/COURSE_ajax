<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Cargar un select recuperando datos del servidor</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script type="text/javascript" src="funciones.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="col-10 ml-2">
        <h4 style="margin-top:20px">Cargar un select recuperando datos del servidor</h4>
        <div class="form-group">
          <label for="carreras">Seleccione la carrera:</label>
          <select class="form-control" name="carreras" id="carreras">
            <option value="0">Seleccionar</option>
            <option value="1">Analista en sistemas</option>
            <option value="2">Telecomunicaciones</option>
            <option value="3">WebMaster</option>
          </select>
        </div>
        <span id="espera"></span>
        <div class="form-group">
          <label for="materias">Materias de la carrera: </label>
          <select class="form-control" name="materias" id="respuesta">
          </select>
        </div>
        <div class="card">
          <div class="card-body" ></div>
        </div>
      </div>
    </div>
  </body>
</html>
