addEventListener('load',inicializarEventos,false); //iniciamos indicando que se llame a la funcion inicializarEventos al cargar la pagina

function inicializarEventos()
{
  for(var f=1;f<=12;f++) //recorremos un for para cada elemento de la lista de signos sodiacales
  {
    var ob=document.getElementById('enlace'+f);// igualamos la variable ob al idenlace + f que seria en la lista enlace1 , enlace2 y asi sucesivamente hasta 12
    ob.addEventListener('click',presionEnlace,false); // agregamos un listener al evento click en la variable ob , ejecutando la funcion presionEnlace
  }
}

function presionEnlace(e)
{
    e.preventDefault(); // prevenimos la accion del los href por default que es redirigir
    var url=e.target.getAttribute('href'); //igualamos la variable url al href
    cargarHoroscopo(url); //llamamos a la funcion cargarHoroscopo() pasandole de parametro la url
}

// ----- OJO LA URL ESTA EN EL HREF EN LOS LINKS MAQUETADOS, ESTOS YA APUNTAN A LA PAGINA QUE RECIBE LOS VALORES Y DEVUELVE UNA INSTRUCCION
var conexion1;
function cargarHoroscopo(url)
{
  conexion1=new XMLHttpRequest(); //creamos el objeto XMLHttpRequest
  conexion1.onreadystatechange = procesarEventos; // igualamos su atributo onreadystatechange a la variable procesarEventos
  conexion1.open("GET", url, true); // definimos su metodo open con el metodo get y la direccion a la que va ir, ademas le decimos que si es cierto que va ser asincrona
  conexion1.send(); //ejecutamos su metodo send
}

function procesarEventos()// para explicar mejor esta funcion se ejecutara cada onreadystatechange hasta que llegue al readyState 4 en ese momento devolvera el echo segun el metodo get enviado
{
  var detalles = document.getElementById("detalles"); // igualamos el div en el que ira el echo proveniente de la pagina que procesa los datos php
  if(conexion1.readyState == 4)
  {
    detalles.innerHTML = conexion1.responseText;
  }
  else
  {
    detalles.innerHTML = 'Cargando...';
  }
}
