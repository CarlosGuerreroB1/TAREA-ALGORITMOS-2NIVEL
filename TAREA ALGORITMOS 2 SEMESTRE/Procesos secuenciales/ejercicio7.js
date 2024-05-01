//7.Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
//Analisi de requerimientos
//Ent: celcius=""(leer), fahrenheit=""
//Pro: fahrenheit= (celcius * 9/5) +32
//Sal: fahrenheit
//pseudocodigo
//declarar celcius="", fahrenheit=""
//escribir "Ingrese los grados celcius"
//leer celcius
//fahrenheit= (celcius * 9/5) +32
//escribir "En grados fahrenheit serian " fahrenheit
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function celciusfahrenheit(){
    let celcius="", fahrenheit=""
    celcius = parseFloat(read("Ingrese los grados celcuis que desea convertir a fahrenheit:"))
    fahrenheit= (celcius * 9/5) +32
    write("Los ", celcius, " grados celcius a grados fahrenheit son ", fahrenheit)
}
celciusfahrenheit()