//6.Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
//Analisis de requerimientos
//ent: caract=""(leer)
//pro: si caract = a, e, i, o, u 
//sal: escribir si es una vocal, si no es una consonante
//pseudocodigo
//declarar carct=""
//escribir "Ingrse un caracter"
//leer caract
// si caract == a, e, i, o, u 
// escribir el caracter es una vocal
// si no
// escribir el caracter es una consonate
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function vocaloconsonante(){
    let caract=""
    caract = read("Ingrese un caracter:")
    if(caract = "a, e, i, o, u"){
        write("El caracter es una vocal")
    }
    else{
        write("El caracter es una consonante")
    }
}
vocaloconsonante()