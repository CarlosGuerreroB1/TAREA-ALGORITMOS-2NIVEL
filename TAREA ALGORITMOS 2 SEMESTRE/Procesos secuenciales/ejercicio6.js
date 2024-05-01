//6.Pedir al usuario dos números y mostrar el resultado de multiplicarlos.
//Analisis de requerimientos
//Entrada: num1=""(leer), num2=""(leer), multiplicacion=""
//Proceso: multiplicacion= num1 * num2
//Salida: multiplicacion
//pseudocodigo
//declarar num1="", num2="", multiplicacion"
//escribir "Ingrese el primer numero"
//leer num1
//escribir "Ingrese el segundo numero"
//leer num2
//multiplicacion = num1 * num2
//Escribir multiplicacion
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function multiplicar(){
    let num1="", num2="", multiplicacion=""
    num1 =parseFloat (read("Ingrese el primer nuero:"))
    num2 =parseFloat (read("Ingrese el segundo numero:"))
    multiplicacion = num1 * num2
    write("La multiplicacion de " +num1+ " * " +num2+ " es igual a: " +multiplicacion )
}
multiplicar()