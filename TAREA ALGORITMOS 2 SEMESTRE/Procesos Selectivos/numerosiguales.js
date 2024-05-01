//5.Pedir al usuario dos números y mostrar si son iguales o diferentes.
//Analisis de requerimientos
//ent: num1=""(leer), num2=""(leer)
//pro: si num1 = num2
//sal: escribir si son numeros iguales, si no no son iguales
//pseudocodigo
//declarar num1="", num2=""
//escribir "Ingrse un numero"
//leer num1
//escribir "Ingrese el segundo numero"
// si num1 == num2
// escribir los numeros son iguales
// si no
// escribir los numeros no son iguales
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function iguales(){
    let num1="", num2=""
    num1 = parseInt(read("Ingrese el primer numero:"))
    num2 = parseInt(read("Ingrese el segundo numero:"))
    if(num1 == num2){
        write("Los numeros si son iguales")
    }
    else{
        write("Los numeros no son iguales")
    }
}
iguales()