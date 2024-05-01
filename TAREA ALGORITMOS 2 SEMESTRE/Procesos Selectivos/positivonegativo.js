//4.Solicitar al usuario un número y mostrar si es positivo o negativo.
//Analisis de requerimientos
//ent: num=""(leer)
//pro: si num > 0 
//sal: escribir si es positivo , si no no es negativo
//pseudocodigo
//declarar num=""
//escribir "Ingrse un numero"
//leer num
// si num > 0 
// escribir el numero es positivo
// si no
// escribir el numero es negativo
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function negativopositivo(){
    let num=""
    num = parseInt(read("Ingrese un numero:"))
    if(num > 0){
        write("El numero " +num+ " es positivo")
    }
    else{
        write("El numero " +num+ " es negativo")
    }
}
negativopositivo()