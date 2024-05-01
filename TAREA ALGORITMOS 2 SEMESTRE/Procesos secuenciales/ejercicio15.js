//15.Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí
const read = require('prompt-sync')();
const write = console.log
function primerYultimo(){
    let elementos=""
    elementos=[2, 3, 4, 5, 6]
    write("Los elementos de mi arreglo inicial es asi: " +elementos)
    elementos=[6, 3, 4, 5, 2]
    write("Intercambiando el primero con el ultimo quedaria así: " +elementos)
}
primerYultimo()