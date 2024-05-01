//14.Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
////Analisis de requerimientos
//ent: nota=""(leer)
//pro: si nota >= 60 
// escribir aprobado
// si no reprobado
//sal: escribir aprobado o reprobado
//pseudocodigo
//declarar nota=""
//escribir "Ingrse su nota"
//leer nota
// si num >= 60 
// escribir aprobado
// si no
// escribir reprobado
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function aprobadoreprobado(){
    let nota=""
    nota = parseInt(read("Ingrese su nota:"))
    if(nota >= 60){
        write("Su nota de " +nota+ " por lo tanto esta aprobado, FELICIDADES")
    }
    else{
        write("Su nota es de " +nota+ " por  lo tanto esta reprobado, Lo siento, suerte la proxima")
    }
}
aprobadoreprobado()