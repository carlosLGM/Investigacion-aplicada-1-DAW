let array1 = [2,4,6,7,8];
let arra2 = [100];
arra2.push(...array1);

var spr="";

spr+="<article><h1>Operador Spread: (...)</h1><p>Hay otra sintaxis muy simple y concisa para crear funciones, que a menudo es mejor que las Expresiones de funciones.<br><br>"
spr+="Cadena de numeros es el resultado de usar el operador spread: <b>"+arra2+"</b><br></br>"
spr+="La sintaxis extendida o <b>spread</b> syntax permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde"
spr+="cero o más argumentos (para llamadas de función) o elementos (para Array literales) son esperados, o a un objeto ser expandido en lugares"
spr+=" donde cero o más pares de valores clave (para literales Tipo Objeto) son esperados.<br><br>";
spr+="<b>Sintaxis:</b><br><br>"
spr+="myFunction(...iterableObj)<br>"

spr+="Para arreglos literales o cadenas de caracteres:<br>"
spr+="[...iterableObj, '4', 'five', 6]<br><br>"

spr+="<b>Ejemplo:</b><br><br>"

spr+="let array1 = [a, b, c];<br>"

spr+="let array2 = [...array1]<br>"

spr+="array1.shift()<br>"

spr+="console.log(array1)<br>" 
spr+="console.log(array2)<br><br>" 
spr+="otro ejemplo:<br>"
spr+="let array1 = [a, b, c]<br>"

spr+="let array2 = [d, e, f];<br>"

spr+="let array3 = [...array1, ...array2, g, h, i]<br>"


document.write(spr);