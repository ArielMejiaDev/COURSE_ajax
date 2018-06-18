addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
	var boton = document.getElementById('boton1');
	boton.addEventListener('click',sendParams,false);
}
var conexion;
function sendParams(){
	conexion = new XMLHttpRequest();
	conexion.onreadystatechange=respAjax;
	conexion.open("GET",'procesar.php',true);
	conexion.send();
}
function respAjax(){
	var respuesta = document.getElementById('respuesta');
	if (conexion.readyState==4) {
		if (conexion.status==200) {
			alert("Cadena de texto en formato JSON: " + conexion.responseText);
			var data = JSON.parse(conexion.responseText);
			var textString='<br/><br/>';
			for (var i = 0; i < data.length; i++) {
				textString += 'Codigo: ' + data[i].codigo + "<br/>";
				textString += 'Descripcion: ' + data[i].descripcion + "<br/>";
				textString += 'Precio: ' + data[i].precio + "<br/><br/>";
			}
			respuesta.innerHTML = textString;
		}
	}else{
		respuesta.innerHTML="Cargando...";
	}
}