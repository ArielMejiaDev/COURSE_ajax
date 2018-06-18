addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var select1=document.getElementById('carreras');
  select1.addEventListener('change',mostrarMaterias,false);
}

var conexion1;
function mostrarMaterias(e)
{
  var codigo=document.getElementById('carreras').value;
  if (codigo!=0)
  {
    conexion1=new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open('GET','procesar.php?cod='+codigo, true);
    conexion1.send();
  }
  else
  {
    var select2=document.getElementById('materias');
    select2.options.length=0;
  }
}

function procesarEventos()
{
  if(conexion1.readyState == 4)
  {
    var d=document.getElementById('espera');
    d.innerHTML = '';//inserta un espacio en blanco en el span
    var xml = conexion1.responseXML; // identifica el xml que responde el servidor
    var pals=xml.getElementsByTagName('materia'); // iguala pals al tag xml materia en el servidor
    var select2=document.getElementById('materias'); //iguala select2 al select materias
    select2.options.length=0; // le da una longitud de 0 al select de materias
    for(f=0;f<pals.length;f++) //ciclo para recorrer todas las opciones que se insertaran en el select
    {
      var op=document.createElement('option'); // igualamos la variable op a el objeto que creamos que es un option
      var texto=document.createTextNode(pals[f].firstChild.nodeValue);// iguaslamos la variable texto a un texto que crearemos en el servidor en un ciclo dentro del xml
      op.appendChild(texto); // colocamos la variable texto como hijo de la var op
      select2.appendChild(op);// asignamos op como hijo de la var select2, que es el select #2 el de materias
    }
  }
  else
  {
    var d=document.getElementById('espera');
    d.innerHTML = '<img src="giphy.gif">';
  }
}
