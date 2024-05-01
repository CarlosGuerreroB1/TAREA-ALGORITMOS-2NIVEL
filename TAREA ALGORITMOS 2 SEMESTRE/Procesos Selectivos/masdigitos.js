//11.Solicitar al usuario un número y mostrar si es un número de un solo dígito.
//Analisis de requerimientos
//ent: num=""(leer)
//pro: si num < 10
//sal: escribir el numero es de un solo digito
//pseudocodigo
//declarar num=""
//escribir "Ingrse un numero"
//leer num
// si num < 10 
// escribir el numero es de un solo digito
// si no
// escribir el numero es dos digitos o mas
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function digitos(){
    let num=""
    num = parseInt(read("Ingrese un numero:"))
    if(num < 10){
        write("El numero " +num+ " es de un solo digito")
    }
    else{
        write("El numero " +num+ " es de dos digitos o mas")
    }
}
digitos()