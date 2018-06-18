addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
	var boton = document.getElementById('boton1');
	boton.addEventListener('click',getCui,false);
}
function getCui(){
	var cui = document.getElementById('cui').value;
	enviarCui(cui);
}
var conexion;
function enviarCui(cui){
	conexion = new XMLHttpRequest();
	conexion.onreadystatechange = respuestaAjax;
	conexion.open("GET",'procesar.php?cui='+cui);
	conexion.send();
}
function respuestaAjax(){
	var respuesta = document.getElementById('respuesta');
	if (conexion.readyState==4) {
		if (conexion.status==200) {
			var datos=JSON.parse(conexion.responseText);
			var texto = "Nombre " + datos.nombre + "<br/>";
			texto = texto + "Apellido " + datos.apellido + "<br/>";
			texto = texto + "Dirección " + datos.direccion + "<br/>";
			respuesta.innerHTML = texto;
		}
	}else{
		respuesta.innerHTML = "Cargando...";
	}
}