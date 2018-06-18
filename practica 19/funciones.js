addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var vec=document.getElementsByTagName('div');
  for(f=0;f<vec.length;f++)
  {
    vec[f].addEventListener('mouseover',mostrarToolTip,false);
    vec[f].addEventListener('mouseout',ocultarToolTip,false);
    vec[f].addEventListener('mousemove',actualizarToolTip,false);
  }
  var ele=document.createElement('div');
  ele.setAttribute('id','divmensaje');
  vec=document.getElementsByTagName('body');
  vec[0].appendChild(ele);

}

function mostrarToolTip(e)
{
  //obtenemos el tooltip, lo hacemos visible (css lo tiene x default inivisible)
  //lo ubicamos a 15 px en su top y en su left de la ubicacion del puntero del mouse
  var d = document.getElementById("divmensaje");
  d.style.visibility = "visible";
  d.style.left = (e.clientX + document.body.scrollLeft + 15)+'px';
  d.style.top = (e.clientY + document.body.scrollTop + 15)+'px';
  //le asignamos a la variable ref el id del div al que le hacemos mouseover
  // y lo pasamos como parametro a la funcion recuperarServidorTooltip que lo mandara al server
  var ref;
  ref=e.target;
  recuperarServidorTooltip(ref.getAttribute('id'));
}

function actualizarToolTip(e)
{
  var d = document.getElementById("divmensaje");//obtenemos el div con id divmensaje que es el del tooltip
  //ubica el tooltip desde su top y su left en la ubicacion del puntero del mouse + 15 pixeles
  d.style.left = (e.clientX + document.body.scrollLeft + 15)+'px';
  d.style.top = (e.clientY + document.body.scrollTop + 15)+'px';
}


function ocultarToolTip(e)
{
  //obtiene el tooltip y lo esconde
  var d = document.getElementById("divmensaje");
  d.style.visibility = "hidden";
}

var conexion1;
function recuperarServidorTooltip(codigo)
{
  //envia los datos al servidor recoginedo el parametro para enviarlo por metodo get
  conexion1=new XMLHttpRequest();
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open('GET','procesar.php?cod='+codigo, true);
  conexion1.send();
}

function procesarEventos()
{
  //obtiene el tooltip, lo hace visible y le ingresar devuelve el servidor
  var d = document.getElementById("divmensaje");
  d.style.visibility = "visible";
  if(conexion1.readyState == 4)
  {
    d.innerHTML=conexion1.responseText;
  }
  else
  {
    d.innerHTML = '<img src="loader1.gif" width="100px">';
  }
}
