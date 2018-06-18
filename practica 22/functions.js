addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  var textoBuscar = document.getElementById('buscar');
  textoBuscar.addEventListener('keyup',getData,false);
}
function getData(){
  var textoBuscar = document.getElementById('buscar').value;
  sendParametros(textoBuscar);
}
var conexion;
function sendParametros(textoBuscar){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange=respuestaAjax;
  conexion.open("GET",'procesar.php?palabra='+textoBuscar,true);
  conexion.send();
}
function respuestaAjax(){
  var respuesta=document.getElementById('resultados');
  if (conexion.readyState==4) {
    if (conexion.status==200) {
      xml = conexion.responseXML;
      palabraTag = xml.getElementsByTagName('palabra');
      respuesta.innerHTML = "";
      for (var i = 0; i < palabraTag.length; i++) {
        resultados.innerHTML = resultados.innerHTML + palabraTag[i].firstChild.nodeValue + '<br>';
        var textoBuscar = document.getElementById('buscar');
        var gifImage = '';
        textoBuscar.style.backgroundImage=gifImage;
      }
    }
  }else{
    mostrargif();
    // respuesta.innerHTML='<img src="loader1.gif" width="100px" style="margin-left:-22px" class="img-fluid pull-xs-left" alt="...">';
  }
}
function borrargif(){
  var textoBuscar = document.getElementById('buscar');
  var gifImage = '';
  textoBuscar.style.backgroundImage=gifImage;
}
function mostrargif(){
  var textoBuscar = document.getElementById('buscar');
  if (textoBuscar.value != "") {
    var gifImage = 'url(loader1' + '.gif)';
    textoBuscar.style.backgroundImage=gifImage;
  }else{
    var gifImage = '';
    textoBuscar.style.backgroundImage=gifImage;
    texto.style.visibility = "hidden";
  }

}
