//5.Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
//Analisi de requerimientos
//Ent: edad=""(leer), edadprxm=""
//Pro: edadprxm= num + 1
//Sal: edadprxm
//pseudocodigo
//declarar edad="", edadprxm=""
//escribir "Ingrese su edad"
//leer edad
//edadprxm= num + 1
//escribir "su edad el proximo año es " edad
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function edadproxima(){
    let edad="", edadprxm=""
    edad = parseInt(read("Ingrese su edad"))
    edadprxm= edad + 1
    write("Su edad el proximo año es: ", edadprxm)
}
edadproxima()