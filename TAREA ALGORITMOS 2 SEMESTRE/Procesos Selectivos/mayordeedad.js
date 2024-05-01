//2.Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
//Analisis de requerimientos
//ent: edad=""(leer)
//pro: si edad >= 18
//sal: escribir usted es mayor de edad
//pseudocodigo
//declarar edad=""
//escribir "Ingrse su edad"
//leer edad
// si edad >= 18 
// escribir usted es mayor de edad
// si no
// escribir usted es menor de edad
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function mayordeedad(){
    let edad=""
    edad = parseInt(read("Ingrese su edad:"))
    if(edad >= 18){
        write("Usted ya es mayor de edad")
    }
    else{
        write("Usted aun no es mayor de edad")
    }
    write("Gracias por su visita")
}
mayordeedad()