var flechas="";

let func = function(arg1, arg2) {
    return expression;
  }

  let sum = (a, b) => a + b;
  
  alert('Este numero es el resultado del uso de las funciones flecha: ' + sum(1, 2) ); // 3

flechas+="<article><h1>Función flecha:</h1><p>Hay otra sintaxis muy simple y concisa para crear funciones, que a menudo es mejor que las Expresiones de funciones.<br><br>"
flechas+="Se llama “funciones de flecha”, porque se ve así:<br><br> "
flechas+="<i>let func = (arg1, arg2, ..., argN) => expression;</i><br><br>"
flechas+="Esto crea una función func que acepta los parámetros arg1..argN, luego evalúa la expression del lado derecho mediante su uso y devuelve su resultado.<br><br>"
flechas+="En otras palabras, es la versión más corta de:<br><br>"

flechas+="let func = function(arg1, arg2, ..., argN) {<br>"
flechas+="    return expression;<br>"
 flechas+=" }<br>"
flechas+="Veamos un ejemplo concreto:<br>"
flechas+="let sum = (a, b) => a + b;<br><br>"
  
  flechas+= "Esta función de flecha es una forma más corta de: <br><br>"
  
  flechas+="let sum = function(a, b) {<br>"
   flechas+=" return a + b;<br>"
  flechas+="};<br>"

document.write(flechas);