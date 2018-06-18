addEventListener('load',startEvents,false);
function startEvents(){
	var boton = document.getElementById('btnJson');
	boton.addEventListener('click',createParams,false);
}
function createParams(){
	var objetoLiteral={
		nombre:"Ariel",
		edad:28,
		tallas:["170 lbs","170 mts"]
	}
	textoJson = JSON.stringify(objetoLiteral);
	sendParams(textoJson);
}
var conexion;
function sendParams(textoJson){
	conexion = new XMLHttpRequest();
	conexion.onreadystatechange = respAjax;
	conexion.open("GET",'procesar.php?cadena='+textoJson,true);
	conexion.send();
}
function respAjax(){
	var respuesta = document.getElementById('resultados');
	if (conexion.readyState==4) {
		if (conexion.status==200) {
			respuesta.innerHTML = conexion.responseText;
		}
	}else{
		respuesta.innerHTML="Cargando ...";
	}
}
