addEventListener('load',startEvents,false);
function startEvents(){
	var boton = document.getElementById('btnJson');
	boton.addEventListener('click',sendParams,false);
}
var conexion;
function sendParams(){
	conexion = new XMLHttpRequest();
	conexion.onreadystatechange = respAjax;
	conexion.open("GET",'procesar.php',true);
	conexion.send();
}
function respAjax(){
	var respuesta = document.getElementById('resultados');
	if (conexion.readyState==4) {
		if (conexion.status==200) {
			var objetoPerifericos = JSON.parse(conexion.responseText);
			var texto = "";
			for (var i = 0; i < objetoPerifericos.length; i++) {
				texto += "Codigo" + objetoPerifericos[i].codigo + "<br/>";
				texto += "Descripción" + objetoPerifericos[i].descripcion + "<br/>";
				texto += "Precio" + objetoPerifericos[i].precio + "<br/><br/>";
			}
			respuesta.innerHTML = texto;
		}
	}else{
		respuesta.innerHTML = "Cargando ...";
	}
}