//4.Pedir al usuario un número y mostrar su doble.
//Analisi de requerimientos
//Ent: num=""(leer), doble=""
//Pro: doble= num * 2
//Sal: doble
//pseudocodigo
//declarar num="", doble=""
//escribir "Ingrese un numero"
//leer num
//doble=num*2
//escribir "el doble de " num " es " doble
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function doble(){
    let num="", doble=""
    num = parseInt(read("Ingrese un numero"))
    doble = num * 2
    write("El doble de " +num+ " es: " +doble)
}
doble()