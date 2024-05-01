//3.Pedir al usuario un número y mostrar si es par o impar.
//Analisis de requerimientos
//ent: num=""(leer)
//pro: si num % 2 = 0 
//sal: escribir si es par , si no no es par
//pseudocodigo
//declarar num=""
//escribir "Ingrse un numero"
//leer num
// si num % 2 = 0
// escribir el numero es par
// si no
// escribir el numero es impar
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function paroimpar(){
    let num=""
    num = parseInt(read("Ingrese un numero:"))
    if(num % 2 == 0){
        write("El numero " +num+ " es par")
    }
    else{
        write("El numero " +num+ " es impar")
    }
}
paroimpar()