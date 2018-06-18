addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  var formulario = document.getElementById("formulario");
  formulario.addEventListener('submit',getDatos,false);
}
function getDatos(e){
  e.preventDefault();
  var numero = document.getElementById("numero").value;
  enviarParametros(numero);
}
var conexion;
function enviarParametros(numero){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = respuestaAjax;
  alert('Valor de la propiedad readyState:'+conexion.readyState);
  conexion.open("GET",'procesarx.php?numero='+numero,true);
  conexion.send();
}
function respuestaAjax(){
  alert('Valor de la propiedad readyState:'+conexion.readyState);
  var respuesta = document.getElementById("respuesta");
  if (conexion.readyState==4) {
    if (conexion.status == 200) {
      respuesta.innerHTML = conexion.responseText;
    }else{
      respuesta.innerHTML = "";
      alert(conexion.statusText);
    }
  }else if(conexion.readyState==1 || conexion.readyState==2 || conexion.readyState==3){
    respuesta.innerHTML="Cargando";
  }
}
