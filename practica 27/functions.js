addEventListener('load',startEvents,false);
function startEvents(){
	var boton = document.getElementById('btnJSON');
	boton.addEventListener('click',sendParams,false);
}
var conexion;
function sendParams(){
	var respuesta = document.getElementById('respuesta');
	var objetoLiteral={
		nombre:'Ariel',
		edad:28,
		tallas:["180 kg","170 mts"]
	};// si quisiera incluir mas antes del punto y coma deberia agregar otro con llaves y otro elemento con sus propiedades
	var textoJson = JSON.stringify(objetoLiteral);
	alert("Objeto litaral convertido a Json: " + textoJson + "Ojo: en el span, lo reconvierto a Objeto literal para imprimirlo por separado");
	var data = JSON.parse(textoJson);
	var texto = "Nombre: " + data.nombre + "<br/>";
	texto += "Edad: " + data.edad + "<br/>";
	texto += "Tallas: " + data.tallas + "<br/>";
	respuesta.innerHTML = texto;
}
