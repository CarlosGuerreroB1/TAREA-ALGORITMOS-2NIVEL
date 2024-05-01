//19.Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
//analisi de requerimientos
//ent: elementos=[1 2 3 4 5]
//pro: si elemento[0] > elemento[4]
//sal:escribir el primer elemento si es mayor que el ultimo
//pseudocodigo
//declarar elementos=[5, 4, 3, 2, 1]
// si (elementos[0] > elementos[4]){
//   escribir("El primer elemento si es mayor que el ultimo")
// si no 
// escribir write("El elemento no es mayor que el ultimo")
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function elemento(){
    let elementos=[5, 4, 3, 2, 1]
    if(elementos[0] > elementos[4]){
    write("El primer elemento si es mayor que el ultimo")
    }
    else{
        write("El elemento no es mayor que el ultimo")
    }
}
elemento()