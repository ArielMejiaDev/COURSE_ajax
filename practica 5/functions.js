addEventListener("load",inicializarEventos,false);
function inicializarEventos(){
  var ul = document.getElementById("calificaciones");
  var lists = ul.getElementsByTagName("li");
  var anchors = ul.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    lists[i].addEventListener("mouseover",entrar,false);
    lists[i].addEventListener("mouseout",salir,false);
    anchors[i].addEventListener("click",clickar,false);
  }
}
function entrar(a){
  var href = a.target;
  var ul = document.getElementById("calificaciones");
  var lists = ul.getElementsByTagName("li");
  for (var i = 0; i < href.firstChild.nodeValue; i++) {
    lists[i].firstChild.style.background="#f00";
    lists[i].firstChild.style.color="#fff";
  }
}
function salir(e){
  var href = e.target;
  var ul = document.getElementById("calificaciones");
  var lists = ul.getElementsByTagName("li");
  for (var i = 0; i < href.firstChild.nodeValue; i++) {
    lists[i].firstChild.style.background="#f7f8e8";
    lists[i].firstChild.style.color="#f00";
  }
}
function clickar(e){
  e.preventDefault();
  var href = e.target;
  getParametros(href.firstChild.nodeValue);
}
var conexion;
function getParametros(voto){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = respuestaAjax;
  conexion.open("GET",'procesar.php?voto='+voto+'',true);
  conexion.send();
}
function respuestaAjax(){
  var respuesta = document.getElementById("respuesta");
  if (conexion.readyState==4) {
    respuesta.innerHTML = "Gracias por su voto";
  }else{
    respuesta.innerHTML = "Cargando ...";
  }
}
