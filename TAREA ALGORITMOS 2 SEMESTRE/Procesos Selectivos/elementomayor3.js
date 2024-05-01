//21.Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
//Analisis de requerimiento
//ent: arreglo=[1 2 3]
//pro: si elemt1 > elemt2 & elmt3
//escribir elemnto 1 es mayor
//si elemt2 > elemt3 & elmt1
//escribir elemnto  es mayor
//si elemt3 > elemt1 & elmt2
//escribir elemnto 3 es mayor
//pseudocodigo
//declarar arreglo=[1 2 3]
//  si elemt1 > elemt2 & elmt3
//escribir elemnto 1 es mayor
//si elemt2 > elemt3 & elmt1
//escribir elemnto  es mayor
//si elemt3 > elemt1 & elmt2
//escribir elemnto 3 es mayor
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function elementomayor(){
    let arreglo=[1, 7, 9]
    let elemento1=arreglo[0]
    let elemento2=arreglo[1]
    let elemento3=arreglo[2]
    if(elemento1 > elemento2 && elemento3){
    write("El primer elemento es el mayor")
    }
    else if(elemento2 > elemento1 && elemento3){
        write("El segundo elemento es el mayor")
    }
    else if(elemento3 > elemento1 && elemento2){
        write("El tercer elemento es el mayor")
    }
}
elementomayor()