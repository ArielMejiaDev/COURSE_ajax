addEventListener('load',inicializarDatos,false);//INICILIZAR EVENTOS
function inicializarDatos(){ //SELECCIONAR ENLACES Y AGREGAR UN LISTENER PARA DISPARAR EVENTO AL HACER CLICK
  for (var i = 1; i <=4; i++) {
    var ob = document.getElementById('enlace'+i);
    ob.addEventListener('click',definirUrl,false);
  }
}
function definirUrl(e){ //OBTIENE EL VALOR DEL HREF PARA: PAGINA A LA QUE SE ENVIA PARAMETROS Y LOS PARAMETROS MISMOS
  e.preventDefault();
  var url = e.target.getAttribute('href');
  cargarMensaje(url);
}
var conexion1;
function cargarMensaje(url){ //CREAMOS EL OBJETO XMLHttpRequest Y ENVIAMOS DATOS
  conexion1 = new XMLHttpRequest();
  conexion1.onreadystatechange = mostrarMensaje;
  conexion1.open("GET",url,true);
  conexion1.send();
}
function mostrarMensaje(){ //MOSTRAMOS EL RESULTADO EN UN DIV 
  var etiquetaMensaje = document.getElementById('etiquetaMensaje');
  if (conexion1.readyState ==4) {
    etiquetaMensaje.innerHTML = conexion1.responseText;
  }else{
    etiquetaMensaje.innerHTML='Cargando ...';
  }
}
