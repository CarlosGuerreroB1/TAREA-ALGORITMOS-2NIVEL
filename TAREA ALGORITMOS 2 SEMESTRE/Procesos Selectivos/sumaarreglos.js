//22.Dado un arreglo de 5 elementos presentar la suma de dichos elementos
const read = require('prompt-sync')();
const write = console.log
function sumarreglos(){
    let arreglo=[20, 40, 60, 80, 10]
    let suma = arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3] + arreglo[4]
    write("La suma de mis arreglos es: " +suma)
}
sumarreglos()