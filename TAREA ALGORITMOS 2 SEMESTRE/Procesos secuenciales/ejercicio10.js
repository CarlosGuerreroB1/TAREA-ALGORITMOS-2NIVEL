//Pedir al usuario dos números y mostrar el mayor.
////Analisi de requerimientos
//Ent: num1=""(leer), num2=(leer)
//Pro: si num1 > num2
//      si no num2 > num1
//Sal: numero mayor
//pseudocodigo
//declarar num1="", num2=""
//escribir "Ingrese el primer numero"
//leer num1
// escribir "Ingrese el segundo numero"
//leer num2
//si num1 > num2 
//escribir el primer numero es mayor que el segundo numero
// si no el segundo numero es mayor que el primero
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function mayor(){
    let num1="", num2=""
    num1 = parseInt(read("Ingrese el primer numero:"))
    num2 = parseInt(read("Ingrese el segundo numero:"))
    if(num1 > num2){
        write("El numero " +num1+ " es mayor que " +num2)
    }
    else{
        write("El numero " +num2+ " es mayor que " +num1)
    }
}
mayor()