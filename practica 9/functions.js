addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  var boton = document.getElementById("boton");
  boton.addEventListener('click',getData,false);
}
function getData(){
  var pais = document.getElementById("pais").value;
  enviarParametros(pais);
}
var conexion;
function enviarParametros(pais){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = respuestaAjax;
  conexion.open("GET",'procesar.php?pa='+pais,true);
  conexion.send();
}
function respuestaAjax(){
  var respuesta = document.getElementById("resultados");
  if (conexion.readyState ==4) {
    var xml = conexion.responseXML;
    var capital = xml.getElementsByTagName("capital");
    var superficie = xml.getElementsByTagName("superficie");
    var idioma = xml.getElementsByTagName("idioma");
    var poblacion = xml.getElementsByTagName("poblacion");
    resultados.innerHTML = 'Capital= '+ capital[0].firstChild.nodeValue + '<br/>'+
                           'Superficie= '+ superficie[0].firstChild.nodeValue + '<br/>'+
                           'Idioma= '+ idioma[0].firstChild.nodeValue + '<br/>'+
                           'Poblacion= '+ poblacion[0].firstChild.nodeValue + '<br/>';
  }else{
    respuesta.innerHTML = "Cargando...";
  }
}
