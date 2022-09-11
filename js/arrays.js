document.write("<b>Crear un Array: </b> <br><br>");

document.write('let frutas = ["Manzana", "Banana"]')

document.write("<br>");

let frutas = ["Manzana", "Banana"]

document.write("<br>");

document.write("El largo del array frutas es: ", frutas.length, "<br>") // 2

document.write("<br>");

document.write("<b>Acceder a un elemento de Array mediante su índice</b> <br><br>");

document.write('let primero = frutas[0]<br>', 'let ultimo = frutas[frutas.length - 1]<br><br>')

let primero = frutas[0] 

document.write('Primer: Manzana', ' - ', 'Ultimo: Banana<br>')

let ultimo = frutas[frutas.length - 1];

document.write("<br>");

document.write("<b>Recorrer un Array </b> <br><br>");
document.write("let frutas = ['Manzana', 'Banana']<br><br>")

frutas.forEach(function(elemento, indice, array) {
    
    document.write("elemento: ", elemento, " - ", "indice: ", indice, "  ", "<br>");
    
})

document.write("<br>");
// Manzana 0

// Banana 1

document.write("<br>");

let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final

// ["Manzana", "Banana", "Naranja"]

document.write("<b>Eliminar el último elemento de un Array</b><br><br>");
document.write("let ultimos = frutas.pop()<br><br>")

let ultimos = frutas.pop() // Elimina "Naranja" del final

// ["Manzana", "Banana"]

document.write("<b>Añadir un elemento al principio de un Array</b><br><br>");
document.write("let nuevasLongitudes = frutas.unshift('Fresa')<br><br>")

let nuevasLongitudes = frutas.unshift('Fresa') // Añade "Fresa" al inicio

// ["Fresa" ,"Manzana", "Banana"]

document.write("<b>Eliminar el primer elemento de un Array</b><br><br>");
document.write("let primeroo = frutas.shift()<br><br>")

let primeroo = frutas.shift() // Elimina "Fresa" del inicio

// ["Manzana", "Banana"]

document.write("<b>Encontrar el índice de un elemento del Array</b><br><br>");
document.write("frutas.push('Pera')<br><br>")

frutas.push('Pera')

// ["Manzana", "Banana", "Pera"]

let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar

// 1

let elementoEliminado = frutas.splice(pos, 1)

// ["Manzana", "Pera"]

// Eliminar varios elementos a partir de una posición

let vegetales = ['Repollo', 'Coliflor', 'Zapallo', 'Zanahoria']

console.log(vegetales)

// ["Repollo", "Coliflor", "Zapallo", "Zanahoria"]

let posNew = 1, numElementos = 2

let elementosEliminados = vegetales.splice(posNew, numElementos)

// ["Coliflor", "Zapallo"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales)

// ["Zapallo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"

// Copiar un Array

let copiaArray = vegetales.slice();

// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"


