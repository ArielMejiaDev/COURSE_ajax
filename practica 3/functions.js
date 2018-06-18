addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  var ob = document.getElementById("btnSubmit");
  ob.addEventListener('click',getDatos,false);
}
function getDatos(e){
  var nombre = document.getElementById('nombre');
  var voto = document.getElementById('voto');
  enviarParametros(nombre.value,voto.value);
}
var conexion;
function enviarParametros(nombre,voto){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = respuestaAjax;
  conexion.open("GET",'procesar.php?nombre='+nombre+'&voto='+voto,true);
  conexion.send();
}
function respuestaAjax(){
  var respuesta = document.getElementById('resultados');
  if (conexion.readyState==4) {
    respuesta.innerHTML=conexion.responseText;
  }else{
    respuesta.innerHTML = 'Cargando ...';
  }
}
