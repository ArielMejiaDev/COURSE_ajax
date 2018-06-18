addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
	var boton = document.getElementById('boton1');
	boton.addEventListener('click',mostrarJson,false);
}
function mostrarJson(){
	var cadena='{"microprocesador":"pentium",' +
             '"memoria":1024,' +
             '"discos":[80,250]' +
             '}';
    var texto = JSON.parse(cadena);
    alert(texto.microprocesador);
    
}