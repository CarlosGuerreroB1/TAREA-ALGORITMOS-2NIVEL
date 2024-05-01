//9.Solicitar al usuario un número y mostrar si es divisible por 2.
//Analisis de requerimientos
//ent: num=""(leer)
//pro: si num % 2 = 0 
//sal: escribir si es par , si no no es par
//pseudocodigo
//declarar num=""
//escribir "Ingrse un numero"
//leer num
// si num % 2 = 0
// escribir el numero es divisble para 2
// si no
// escribir el numero no es divisible para 2
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function divisiblepara2(){
    let num=""
    num = parseInt(read("Ingrese un numero:"))
    if(num % 2 == 0){
        write("El numero " +num+ " si es divisible para 2")
    }
    else{
        write("El numero " +num+ " no es divisible para 2")
    }
}
divisiblepara2()