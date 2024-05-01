//1.Pedir al usuario un número y mostrar si es mayor o menor que 10.
//Analisis de requerimientos
//ent: num=""(leer)
//pro: si num > 10 o num < 10
//sal: escribir si num es mayor que 10 o menor
//pseudocodigo
//declarar num=""
//escribir "Ingrse un numero"
//leer num
// si num >= 10 
// escribir el numero es mayor que 10
// si no
// escribir el numero es menor que 10
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function mayomen10(){
    let num=""
    num = parseInt(read("Ingrese un numero:"))
    if(num >= 10){
        write("El numero " +num+ " es mayor que 10")
    }
    else{
        write("El numero " +num+ " es menor que 10")
    }
}
mayomen10()