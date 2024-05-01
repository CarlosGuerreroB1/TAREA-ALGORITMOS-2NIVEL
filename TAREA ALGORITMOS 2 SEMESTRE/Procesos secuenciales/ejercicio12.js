//12.Pedir 5 números y asignarlos en un arreglo
const read = require('prompt-sync')();
const write = console.log
function arreglosnum(){
    let num1 = +read("Ingrese el primer numero:")
    let num2 = +read("Ingrese el segundo numero:")
    let num3 = +read("Ingrese el tercer numero:")
    let num4 = +read("Ingrese el cuarto numero:")
    let num5 = +read("Ingrese el quinto numero:")
    write("El primer nuemro es: " +num1)
    write("El segundo nuemro es: " +num2)
    write("El tercer nuemro es: " +num3)
    write("El cuarto nuemro es: " +num4)
    write("El quinto nuemro es: " +num5)
}
arreglosnum()