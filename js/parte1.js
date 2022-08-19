var propiedad, str="";
var propiedad, str="";
var cantidad = 0;

str+="<article><h1>Buenas practicas de edicion de codigo en Javascript</h1><p><b>-Utilizar === En lugar de ==</b><br><br>"
str+="JavaScript utiliza dos tipos diferentes de operadores de igualdad:===| !== y == | != Se considera que la mejor práctica es utilizar siempre el primer conjunto al comparar."
str+="Sin embargo, al trabajar con == y !=, te encontrarás con problemas al trabajar con diferentes tipos. En estos casos, intentarán coaccionar los valores, sin éxito.<br><br>"
str+="<b>-Eval = Bad</b><br> Para los que no estén familiarizados, la función 'eval' nos da acceso al compilador de JavaScript. Esencialmente, podemos ejecutar el resultado de una cadena pasándola como parámetro de 'eval'"
str+="Esto no solo disminuirá el rendimiento de tu script sustancialmente, sino que también supone un enorme riesgo de seguridad porque otorga demasiado poder al texto pasado. ¡Evítalo!<br><br>";

str+="<b>-No uses la vía corta</b><br> Técnicamente, puedes omitir la mayoría de las llaves y los puntos y comas. La mayoría de los navegadores interpretan correctamente lo siguiente:<br><br>"
str+="if(someVariableExists)<br>"
str+="x = false<br>"
str+="Sin embargo, considera esto:<br>"
str+="if(someVariableExists)<br>"
str+="x = false <br>"
str+="anotherFunctionCall();<br>"
str+="Uno podría pensar que el código anterior sería equivalente a:<br>"

str+="if(someVariableExists) {<br>"
str+="x = false;<br>"
str+="anotherFunctionCall();<br>"

str+="Por desgracia, se equivocaría. En realidad, significa:<br>"

str+"if(someVariableExists) {<br>"
str+="x = false;<br>"
str+="}<br>"
str+="anotherFunctionCall();<br><br>";

str+="<b>-Coloca los scripts en la parte inferior de tu página</b><br>"
str+="Este consejo ya se recomendó en el anterior artículo de esta serie. Sin embargo, como es muy apropiado, voy a pegar la información.";
str+="Recuerda: el objetivo principal es hacer que la página se cargue lo más rápidamente posible para el usuario. Al cargar un script, el navegador no puede continuar hasta que se haya cargado todo el archivo. Así, el usuario tendrá que esperar más tiempo antes de notar algún progreso."
str+="Si tienes archivos JS cuyo único propósito es añadir funcionalidad, por ejemplo, después de hacer clic en un botón, coloca esos archivos en la parte inferior, justo antes de la etiqueta de cierre del cuerpo. Se trata de una práctica absolutamente recomendable.<br><br>";

str+="<b>-Comenta tu código</b><br>"
str+="Puede parecer innecesario al principio, pero créeme, QUIERES comentar tu código lo mejor posible. Qué pasa cuando vuelves al proyecto meses después, solo para descubrir que no puedes recordar fácilmente cuál era tu línea de pensamiento. O, ¿qué pasa si uno de tus colegas necesita revisar tu código? Siempre, siempre, comenta las secciones importantes de tu código.";


document.write(str);