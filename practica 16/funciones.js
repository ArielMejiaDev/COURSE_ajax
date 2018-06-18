addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  var selectMaterias = document.getElementById("carreras");
  selectMaterias.addEventListener('change',enviarParametros,false);
}
var conexion;
function enviarParametros(){
  var codigo=document.getElementById('carreras').value;
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = respuestaAjax;
  conexion.open('GET','procesar.php?cod='+codigo, true);
  conexion.send();
}
function respuestaAjax(){
  var respuesta = document.getElementById("respuesta");
  if (conexion.readyState==4) {
    respuesta.innerHTML=conexion.responseText;
  }else{
    respuesta.innerHTML='Cargando';
  }
}
