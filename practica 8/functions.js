addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  var div = document.getElementById("fecha");
  var anchors = div.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click',capturarEvento,false);
  }
}
function capturarEvento(e){
  e.preventDefault();
  var href = e.target.getAttribute('href');
  getData(href);
}
var conexion;
function getData(href){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = respuestaAjax;
  conexion.open("GET", href,true);
  conexion.send();
}
function respuestaAjax(){
  var respuesta = document.getElementById("resultados");
  if (conexion.readyState == 4) {
    respuesta.innerHTML = conexion.responseText;
  }else{
    respuesta.innerHTML="Cargando ...";
  }
}
