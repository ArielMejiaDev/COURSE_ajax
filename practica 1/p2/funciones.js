addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  for (var i = 1; i <= 3; i++) {
    var ob=document.getElementById('enlace'+i);
    ob.addEventListener('click',presionEnlace,false);
  }
}
function presionEnlace(e){
  e.preventDefault();
  var url = e.target.getAttribute('href');
  cargarNota(url);
}
var conexion1;
function cargarNota(url){
  conexion1 = new XMLHttpRequest();
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open("GET",url,true);
  conexion1.send();
}
function procesarEventos(){
  var observacion = document.getElementById('observacion');
  if (conexion1.readyState==4) {
    observacion.innerHTML = conexion1.responseText;
  }else{
    observacion.innerHTML = "Cargando ...";
  }
}
