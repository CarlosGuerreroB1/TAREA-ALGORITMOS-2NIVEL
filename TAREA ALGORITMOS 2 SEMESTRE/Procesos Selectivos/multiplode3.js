//8.Pedir al usuario un número y mostrar si es múltiplo de 3.
//Analisis de requerimientos
//ent: num=""(leer)
//pro: si num % 3 = 0 
//sal: escribir si es par , si no no es par
//pseudocodigo
//declarar num=""
//escribir "Ingrse un numero"
//leer num
// si num % 3 = 0
// escribir el numero es multiplo de 3
// si no
// escribir el numero no es multiplo de 3
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function multiplode3(){
    let num=""
    num = parseInt(read("Ingrese un numero:"))
    if(num % 3 == 0){
        write("El numero " +num+ " si es multiplo de 3")
    }
    else{
        write("El numero " +num+ " no es multiplo de 3")
    }
}
multiplode3()