//8.Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
//Analisis de requerimientos
//Entrada:nombre=""(leer)
//Proceso: escribir "Ingrese su nombre completo"
//Salida: leer nombre, nombre, nombre
//Pseudocodigo
//declarar nombre=""
//Escribir:Ingrese su nombre
//leer nombre
//Escribir nombre
//Escribir nombre
//Escribir nombre
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//Creamos la funcion
function tresvecesnombre(){
    let nombre=""
    nombre = read("Ingrese su nombre completo:")
    write("Su nombre es ", nombre)
    write("Su nombre es ", nombre)
    write("Su nombre es ", nombre)
}
tresvecesnombre()