//14.Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
//analisis de requerimientos
//ent: arreglo elementos[1 2 3 4 5]
//pro: leer elementos
//salida escribir elementos
//pseudocodigo
//declarar nombres=[1, 2, 3, 4, 5]
// escribir elemento[0], elemento[2], elemento[4]
//FinAlgoritmos
const read = require('prompt-sync')();
const write = console.log
function primeroMedioUltimo(){
    let elementos=[1, 2, 3, 4, 5]
    write(elementos[0], elementos[2] ,elementos[4])
}
primeroMedioUltimo()