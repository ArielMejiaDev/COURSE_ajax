addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  var botones = document.getElementsByTagName('button');
  for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener('mouseover',mostrarTooltip,false);
    botones[i].addEventListener('mousemove',actualizarUbicacionTooltip,false);
    botones[i].addEventListener('mouseout',ocultarTooltip,false);
  }
  //creamos el tooltip
  var tooltip = document.createElement('div');
  tooltip.setAttribute('id','tooltip');
  // hacemos al tooltip hijo del body
  var body = document.getElementsByTagName('body');
  body[0].appendChild(tooltip);
}
function mostrarTooltip(e){
  var tooltip = document.getElementById('tooltip');
  tooltip.style.visibility = "visible";
  tooltip.style.left = (e.clientX+document.body.scrollLeft+25)+'px';
  tooltip.style.top = (e.clientY + document.body.scrollTop+25)+'px';
  var dato;
  dato = e.target.getAttribute('id');
  sendParametro(dato);
}
function actualizarUbicacionTooltip(e){
  var tooltip = document.getElementById('tooltip');
  tooltip.style.left = (e.clientX+document.body.scrollLef+25)+'px';
  tooltip.style.top = (e.clientY+document.body.scrollTop+25)+'px';
}
function ocultarTooltip(e){
  var tooltip = document.getElementById('tooltip');
  tooltip.style.visibility = "hidden";
}
var conexion;
function sendParametro(dato){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = respuestaAjax;
  conexion.open('GET','procesar.php?btn='+dato,true);
  conexion.send();
}
function respuestaAjax(){
  var respuesta = document.getElementById('tooltip');
  if (conexion.readyState==4) {
    respuesta.innerHTML=conexion.responseText;
  }else{
    respuesta.innerHTML='<img src="loader1.gif" width=55px">';
  }
}
