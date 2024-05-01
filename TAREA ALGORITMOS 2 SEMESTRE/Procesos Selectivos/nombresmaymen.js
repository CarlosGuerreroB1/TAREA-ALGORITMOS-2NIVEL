//7.Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo
//Analisis de requerimientos
//ent: nombre1=""(leer), nombre2=""(leer)
//pro: si nombre1 > nombre2
//sal: escribir nombre1 es mayor que nombre2 o nombre1 menor que nombre 2, o nombre1 = nombre2
//pseudocodigo
//declarar nombre1="", nombre2=""
//escribir "Ingrse el primer nombre"
//leer nombre1
//escribir "Ingrse el segundo nombre"
//leer nombre2
//si nombre1 > nombre2
//escribir nombre1 es mayor que nombre2
// si no
// escribir nombre1 menor que nombre 2
// si nombre1 = nombre2
// nombre1 es igual nombre2
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function namemaymen(){
    let nombre1="", nombre2=""
    nombre1 = read("Ingrese el primer nombre:")
    nombre2 = read("Ingrese el segundo nombre:")
    if(nombre1 == nombre2){
        write("Los nombres son iguales")
    }
    else if(nombre1 > nombre2){
        write("El primer nombre es mayor que el segundo nombre")
    }
    else if(nombre1 < nombre2){
        write("El primer nombre es menor que el segundo nombre")
    }
}
namemaymen()