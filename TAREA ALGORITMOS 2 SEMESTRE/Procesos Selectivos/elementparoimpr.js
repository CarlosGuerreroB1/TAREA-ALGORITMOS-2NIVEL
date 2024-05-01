//20.Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar.
//Analisis de requerimiento
//ent: arreglo=[1 2 3 4 5]
//pro: si elemt1 % 2 = 0 && elemt5 % 2 != 0
//escribir elemnto 1 es par y el 5 es impar
// si no escribir elemento 1 n oes par y el el 5 no es impar
//salida: escribir elemento par o impar
//pseudocodigo
//declarar arreglo=[1 2 3 4 5]
//si elemt1 % 2 = 0 && elemt5 % 2 != 0
//escribir elemnto 1 es par y el 5 es impar
// si no escribir elemento 1 n oes par y el el 5 no es impar
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function paroimpar(){
    elementos=[2, 4, 5, 6, 7]
    if(elementos[0] % 2 == 0 && elementos[4] % 2 !== 0 ){
    write("El primer elemento es par y el ultimo es impar")
    }
    else{
        write("El primer elemento no es par y el ultimo no es impar")
    }
}
paroimpar()