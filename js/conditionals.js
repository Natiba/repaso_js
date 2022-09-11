// Condicional if

let llueve = true;

if (llueve) {
  //alert("Cae agua");
}

// Ejemplos de condicionales IF.

let dia = "lunes";

if (dia == "lunes")
  document.write("Que tengas un feliz comienzo de semana", "<br>");

//===============================

let credito = 130;
let precio = 60;
let nuevoArticulo = "";
let carrito = "";

if (credito >= precio) {
  document.write("has comprado el artículo " + nuevoArticulo, "<br>"); //enseño compra

  carrito += nuevoArticulo; //introduzco el artículo en el carrito de la compra

  credito -= precio; //disminuyo el crédito según el precio del artículo
} else {
  document.write("se te ha acabado el crédito", "<br>"); //informo que te falta dinero

  window.location = "carritodelacompra.html"; //voy a la página del carrito
}

//===============================
let edad = 24;

if (edad > 18) document.write("puedes ver esta página", "<br>");

//===============================

// Son los operadores negación lógica, Y lógico y O lógico.

let bateria = 0.2;
redElectrica = 0;

if (bateria < 0.5 && redElectrica == 0)
  document.write("la notebook se va a apagar en segundos", "<br>");

//===============================

// Sentencias IF anidadas

var numero1 = 23;

var numero2 = 63;

if (numero1 == numero2) {
  document.write("Los dos números son iguales", "<br>");
} else {
  if (numero1 > numero2) {
    document.write("El primer número es mayor que el segundo", "<br>");
  } else {
    document.write("El primer número es menor que el segundo", "<br>");
  }
}

//============================================

// Operador IF Ternario

// Bucle for

let hora_actual = 10;

momento = hora_actual < 12 ? "Antes del mediodía" : "Después del mediodía";

document.write("Hora actual ", hora_actual, " : ", momento, "<br>");

//============================================

// Estructura SWITCH

let dia_de_la_semana = 6;

switch (dia_de_la_semana) {
  case 1:
    document.write("Es Lunes");

    break;

  case 2:
    document.write("Es Martes", "<br>");

    break;

  case 3:
    document.write("Es Miércoles");

    break;

  case 4:
    document.write("Es Jueves");

    break;

  case 5:
    document.write("Es viernes");

    break;

  case 6:

  case 7:
    document.write("Es fin de semana", "<br>");

    break;

  default:
    document.write("Ese día no existe");
}

document.write("<br>");
//============================================

// Bucle for

document.write("Bucle for", "<br><br>");

var i;

for (i = 0; i <= 10; i++) {
  document.write(i);

  document.write("<br>");
}

document.write("<br>");

//===============================

document.write("Escribir los números del 1 al 100 de dos en dos", "<br><br>");

for (i=1;i<=100;i+=2)

document.write(i, "-")
document.write("<br>");

//===============================

document.write("<br>");

document.write("Contar descendentemente del 200 al 10", "<br><br>");

for (i=200;i>=10;i--)

document.write(i, "-")
document.write("<br>");

//===============================

// Bucle WHILE

var color = ""

while (color != "rojo"){

color = prompt("dame un color (escribe rojo para salir)","")

}

//============================================

// Bucle DO...WHILE

var color

do {

color = prompt("dame un color (escribe rojo para salir)","")

} while (color != "rojo")

//===============================
document.write("<br>");

var suma = 0

while (suma < 1000){

suma += parseInt(Math.random() * 100)

document.write ("El resultado random es ", suma + "<br>")

}

document.write("<br>");

//============================================

// Break

for (i=0;i<10;i++){
    
    document.write ("Di enter a 'si' ", i, " veces", "<br>")
    
    escribe = prompt("dime si continuo preguntando...", "si")
    
    if (escribe == "no")
    
    break
    
}

document.write("<br>");

//============================================

// Continue

var i=0

while (i<7){

incrementar = prompt("La cuenta está en " + i + ", dime si incremento", "si")

if (incrementar == "no")

continue

i++

}

// Un bucle FOR planeado para llegar hasta 1.000 pero que lo vamos a detener con break cuando lleguemos a 333.

for (i=0;i<=1000;i++){

    document.write(i + "<br>")
    
    if (i==33)
    
    break;

}

document.write("<br>");

//============================================

// Bucles anidados

document.write('Por cada vuelta de i son 10 de j', "<br>")
document.write("<br>");

for (i=0;i<10;i++){

    for (j=0;j<10;j++) {
    
    document.write('i: ', i + " - " + 'j: ', j, "<br>")
    
    }
    
    }

//===============================

document.write("<br>", "Imprimir en la página todas las tablas de multiplicar. Del 1 al 9. ", "<br>");

for (i = 1; i < 10; i++) {
  document.write("<br><b>La tabla del " + i + ":", "</b><br><br>");

  for (j = 1; j < 10; j++) {
    document.write(i + " x " + j + ": ");

    document.write(i * j, "<br>");
  }
}

//============================================