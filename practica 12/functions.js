addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  var menu = document.getElementById("menu");
  var anchor=menu.getElementsByTagName('a');
  for (var i = 0; i < 12; i++) {
    anchor[i].addEventListener('click',presionEnlace,false);
  }
}
function presionEnlace(e){
  e.preventDefault();
  var href = e.target.getAttribute('href');
  enviarParametro(href);
}
var conexion;
var tiempo;
function enviarParametro(href){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange=respuestaAjax;
  conexion.open("GET",href,true);
  conexion.send();
  tiempo = setTimeout("terminarAjax()",3000);
}
function respuestaAjax(){
  var respuesta = document.getElementById("detalle");
  if (conexion.readyState==4) {
    respuesta.innerHTML=conexion.responseText;
  }else{
    respuesta.innerHTML="Cargando...";
  }
}
function terminarAjax(){
  conexion.abort();
  var respuesta = document.getElementById("detalle");
  respuesta.innerHTML="Porfavor intente en otro momento, el servidor esta sobrecargado";
}
