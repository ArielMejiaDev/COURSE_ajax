addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  var buscarTexto = document.getElementById('buscar');
  buscarTexto.addEventListener('keyup',getData,false);
}
function getData(){
  var buscarTexto = document.getElementById('buscar').value;
  sendParameters(buscarTexto);
}
var conexion;
function sendParameters(buscarTexto){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = respuestaAjax;
  conexion.open("GET",'procesar.php?buscar='+buscarTexto);
  conexion.send();
}
function respuestaAjax(){
  var respuesta = document.getElementById('resultados');
  if (conexion.readyState==4) {
    if (conexion.status==200) {
      // var xml = conexion.responseXML;
      // var sugerenciaTag = xml.getElementsByTagName('sugerencia');
      // respuesta.innerHTML = "";
      // for (var i = 0; i < sugerenciaTag.length; i++) {
      //   respuesta.innerHTML = resultados.innerHTML+sugerenciaTag[i].firstChild.nodeValue+'<br/>';
      //   ocultarGif();
      // }
      respuesta.innerHTML = conexion.responseText;
      getDescListItemData();
    }
  }else{
    mostrarGif();
    //respuesta.innerHTML = '<img src="loader1.gif" width="100px">';
  }
}
function mostrarGif(){
  var buscarTexto = document.getElementById('buscar');
  if (buscarTexto.value!="") {
    $ulrImage = 'url(loader1' +'.gif)';
    buscarTexto.style.backgroundImage=$ulrImage;
  }else {
    ocultarGif();
  }
}
function ocultarGif(){
  var buscarTexto = document.getElementById('buscar');
  buscarTexto.style.backgroundImage="";
}

// funciones para habilitar la seleccion del itemlist
function getDescListItemData(){
  var listGroupItem = document.getElementById('sugerencias');
  var listItems = listGroupItem.getElementsByTagName('a');
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click',getDataAnchorListItem,false);
  }
}
function getDataAnchorListItem(e){
  e.preventDefault();
  var text = e.target.getAttribute('href');
  fillInputBuscar(text);
}
function fillInputBuscar(text){
  var buscarTexto = document.getElementById('buscar');
  buscarTexto.value = text;
  ocultarGif();
  var listGroupItem = document.getElementById('sugerencias');
  listGroupItem.style.visibility = "hidden";
}
