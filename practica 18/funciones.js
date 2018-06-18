addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  var selectCursos = document.getElementById("carreras");
  selectCursos.addEventListener('change',getParametros,false);
}
function getParametros(){
  var valorCarrera = document.getElementById("carreras").value;
  sendParametros(valorCarrera);
}
var conexion;
function sendParametros(codigo){
  if (codigo!=0) {
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = respuestaAjax;
    conexion.open("GET",'procesar.php?cod='+codigo,true);
    conexion.send();
  }else{
    var selectMaterias = document.getElementById("materias");
    selectMaterias.options.length=0;
  }

}
function respuestaAjax()
{
  if (conexion.readyState==4) {
    var loading = document.getElementById('loading');
    loading.innerHTML='';
    var xml = conexion.responseXML;
    var materiaTags = xml.getElementsByTagName('materia');
    var selectMaterias = document.getElementById('materias');
    selectMaterias.options.length=0;
    for (var i = 0; i < materiaTags.length; i++) {
      var options = document.createElement('option');
      var texto = document.createTextNode(materiaTags[i].firstChild.nodeValue);
      options.appendChild(texto);
      selectMaterias.appendChild(options);
    }
  }else{
    var loading = document.getElementById('loading');
    loading.innerHTML='<img src="giphy.gif" width="100px">';
  }
}
