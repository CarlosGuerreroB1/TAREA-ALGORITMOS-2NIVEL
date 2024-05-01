//3.Solicitar al usuario dos números y mostrar su suma.
//Analisis de requerimientos
//Entrada: num1=""(leer), num2=""(leer), suma=""
//Proceso: suma= num1 + num2
//Salida: suma
//pseudocodigo
//declarar num1="", num2="", suma"
//escribir "Ingrese el primer numero"
//leer num1
//escribir "Ingrese el segundo numero"
//leer num2
//suma = num1 + num2
//Escribir suma
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function suma(){
    let num1="", num2="", suma=""
    num1 =parseFloat (read("Ingrese el primer nuero:"))
    num2 =parseFloat (read("Ingrese el segundo numero:"))
    suma = num1 + num2
    write("la suma de " +num1+ " + " +num2+ " es igual a: " +suma )
}
suma()