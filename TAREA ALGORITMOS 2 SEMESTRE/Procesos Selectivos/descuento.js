//13.Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
//Analisis de requerimiento
//ent: total1=""(leer), descuento=""(calcular), total2=""(calcular)
//Pro: ingresar el total
// ingrese su descuento 
// descuento = total1 * descuento
// total2 = total1 - descuento
//Sal: escribir total2
//pseudocodigo
// declarar total1="", descuento=""(calcular), total2=(calcular)
// escribir Ingrese su monto total
// leer total1
// escribir su descuento (ej: 0.15)
// descuento = total1 * 0.15
// escribir descuento
// total2= total1 - descuento
// escrbir total2
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function descuento(){
    let total1="", descuento="", total2=""
    total1 = parseFloat(read("Ingrse su monto total:"))
    descuento = parseFloat(read("Ingrse su descuento (ej: 0.3):"))
    descuento = total1 * descuento
    write("Descuento: "+descuento)
    total2 = total1 - descuento
    write("Su monto total mas el descuento es: " +total2)

}
descuento()