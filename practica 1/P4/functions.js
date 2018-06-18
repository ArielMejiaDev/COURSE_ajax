addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  for (var i = 1; i <=3; i++) {
    var ob = document.getElementById('enlace'+i);
    ob.addEventListener('click',getUrl,false);
  }
}
function getUrl(a){
  a.preventDefault();
  var url = a.target.getAttribute('href');
  enviarParametros(url);
}
var conexion;
function enviarParametros(url){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = cargarMensaje;
  conexion.open('GET',url,true);
  conexion.send();
}
function cargarMensaje(){
  var mensaje = document.getElementById('respuesta');
  if (conexion.readyState==4) {
    mensaje.innerHTML=conexion.responseText;
  }else{
    mensaje.innerHTML = 'Cargando ...';
  }
}
