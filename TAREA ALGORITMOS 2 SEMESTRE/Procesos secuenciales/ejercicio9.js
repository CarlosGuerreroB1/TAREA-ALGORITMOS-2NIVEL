//Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
//Analisi de requerimientos
//Ent: num=""(leer), multiplicador="", tabla=""
//Pro: tabla: multiplicador * 1
//tabla: multiplicador * 2
//tabla: multiplicador * 3
//tabla: multiplicador * 4
//tabla: multiplicador * 5
//tabla: multiplicador * 6
//tabla: multiplicador * 7
//tabla: multiplicador * 8
//tabla: multiplicador * 9
//tabla: multiplicador * 10
//Sal: tabla
//pseudocodigo
//declarar multiplicando="", tabla=""
//escribir "Ingrese la tabla que desea estudiar"
//leer multiplicando
//tabla= multiplicando * 1
//tabla= multiplicando * 2
//tabla= multiplicando * 3
//tabla= multiplicando * 4
//tabla= multiplicando * 5
//tabla= multiplicando * 6
//tabla= multiplicando * 7
//tabla= multiplicando * 8
//tabla= multiplicando * 9
//tabla= multiplicando * 10
//escribir tabla
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function tablas(){
    let multiplicando=""
    multiplicando = parseInt(read("Ingrese la tabla que desea estudiar: "))
    write(multiplicando +" * 1 = "+ (multiplicando * 1))
    write(multiplicando +" * 2 = "+ (multiplicando * 2))
    write(multiplicando +" * 3 = "+ (multiplicando * 3))
    write(multiplicando +" * 4 = "+ (multiplicando * 4))
    write(multiplicando +" * 5 = "+ (multiplicando * 5))
    write(multiplicando +" * 6 = "+ (multiplicando * 6))
    write(multiplicando +" * 7 = "+ (multiplicando * 7))
    write(multiplicando +" * 8 = "+ (multiplicando * 8))
    write(multiplicando +" * 9 = "+ (multiplicando * 9))
    write(multiplicando +" * 10 = "+ (multiplicando * 10))

}
tablas()