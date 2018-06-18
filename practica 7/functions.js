addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  var formulario = document.getElementById('formulario');
  formulario.addEventListener('submit',enviarDatos,false);
}
function enviarDatos(e){
  e.preventDefault();
  enviarFormulario();
}
function retornarDatos(){
  var datos;
  var nombre = document.getElementById("nombre").value;
  var comentario = document.getElementById("comentario").value;
  datos = 'nombre='+encodeURIComponent(nombre)+'&comentario='+encodeURIComponent(comentario);
  return datos;
}
var conexion;
function enviarFormulario(){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = procesarEventos;
  conexion.open('POST','procesar.php',true);
  conexion.setRequestHeader("Content-Type","Application/x-www-form-urlencoded");
  conexion.send(retornarDatos());
}



function procesarEventos()
{
  var resultados = document.getElementById("respuesta");
  if(conexion.readyState == 4)
  {
    resultados.innerHTML = 'Gracias.';
  }
  else
  {
    resultados.innerHTML = 'Procesando...';
  }
}
