// 1.Pedir al usuario su nombre y saludarlo.
//Analisis de requerimientos
//Entrada:nombre=""(leer), saludo="hola"
//Proceso: saludo= saludo + nombre
//Salida: saludo
//Pseudocodigo
//declarar nombre="", saludo=hola
//Escribir:Ingrese su nombre
//leer nombre
//saludo=saludo + nombre
//Escribir saludo
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//Creamos la funcion
function saludo(){
    let nombre="", saludo="Hola Dios te bendiga"
    nombre = read("Ingrese su nombre:")
    saludo = saludo +" "+nombre
    write(saludo)
}
saludo()