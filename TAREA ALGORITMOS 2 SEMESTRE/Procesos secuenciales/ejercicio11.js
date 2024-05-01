//11.Solicitar al usuario una distancia en metros y mostrarla en centímetros.
//Analisia de requerimientos
//Ent: metros=""(leer), centimetros=""
//Pro: centimetros=metros*100
//sal: centimetros
//Pseudocodigo
//declarar metros="", centimetros=""
//escribir "Ingrese los metros"
//leer metros
//centimetros = metros * 100
//escribir centimetros
//FinAlgortimo
const read = require('prompt-sync')();
const write = console.log
function metrosAcentimetros(){
    let metros="", centimetros=""
    metros = parseFloat(read("Ingrese los metros: "))
    centimetros = metros * 100
    write("Los " +metros+ " metros en centimetros son " +centimetros)
}
metrosAcentimetros()