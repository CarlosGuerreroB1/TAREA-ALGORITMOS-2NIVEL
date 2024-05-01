//13.Dado un arreglo de 5 nombres presentarlos todos
//analisis de requerimientos
//ent: arreglo nombres[]
//pro: leer nombres
//salida escribir nombres
//pseudocodigo
//declarar nombres=["Ariel, Justin, Emiro, Luis, Amy"]
// escribir nombres
//FinAlgoritmos
const read = require('prompt-sync')();
const write = console.log
function arregloname(){
    let nombres=["Ariel, Justin, Emiro, Luis, Amy"]
    write("Los nombres de mi arreglo son: " +nombres)
}
arregloname()