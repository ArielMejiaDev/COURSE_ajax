addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  for (var i = 1; i <=3; i++) {
    var ob = document.getElementById('enlace'+i);
    ob.addEventListener('click',getUrl,false);
  }
}
function getUrl(e){
  e.preventDefault();
  var url = e.target.getAttribute('href');
  enviarParametros(url);
}
var conexion;
function enviarParametros(url){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = enviarRespuesta;
  conexion.open('GET',url,true);
  conexion.send();
}
function enviarRespuesta(){
  var respuesta = document.getElementById('respuesta');
  if (conexion.readyState==4) {
    respuesta.innerHTML = conexion.responseText;
  }else{
    respuesta.innerHTML = "Cargando...";
  }
}
