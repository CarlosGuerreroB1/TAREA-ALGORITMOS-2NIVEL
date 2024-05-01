//10.Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
//Analisis de requerimientos
//ent: num=""(leer)
//pro: si num >= 100 o num < 100
//sal: escribir si num es mayor que 10 o menor
//pseudocodigo
//declarar num=""
//escribir "Ingrse un numero"
//leer num
// si num >= 100
// escribir el numero es mayor que 10
// si no
// escribir el numero es menor que 10
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function mayomen100(){
    let num=""
    num = parseInt(read("Ingrese un numero:"))
    if(num > 100){
        write("El numero " +num+ " es mayor que 100")
    }
    else if(num == 100){
        write("El numero " +num+ " es igual que 100")
    }
    else{
        write("El numero " +num+ " es menor que 100")
    }
}
mayomen100()