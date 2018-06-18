addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  var submit = document.getElementById("formulario");
  submit.addEventListener('submit',getData,false);
}
function getData(e){
  e.preventDefault();
  enviarParametros();
}
function retornarDatos(){
  var nombre = document.getElementById("nombre").value;
  var comentario = document.getElementById("comentario").value;
  var parametros = 'nombre='+encodeURIComponent(nombre)+'&comentario='+encodeURIComponent(comentario);
  return parametros;
}
var conexion;
function enviarParametros(){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = respuestaAjax;
  conexion.open("POST",'procesar.php',true);
  conexion.setRequestHeader("Content-Type","Application/x-www-form-urlencoded; charset=UTF-8");
  conexion.send(retornarDatos());
}
function respuestaAjax(){
  var respuesta = document.getElementById("respuesta");
  if (conexion.readyState==4) {
    if (conexion.status == 200) {
      respuesta.innerHTML = conexion.responseText;
    }else{
      alert("error: "+ conexion.statusText);
    }
  }else{
    respuesta.innerHTML='<img src="giphy.gif" width="100px">';
  }
}
