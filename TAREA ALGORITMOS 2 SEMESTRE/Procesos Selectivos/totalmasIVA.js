//12.Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
//Analisis de requerimiento
//Ent:total1=""(leer), iva=""(calcular), total2=(leer)
//Pro: ingresar el total 
// iva = total1 * 0.15
// total2 = total1 + iva
//Sal: escribir total 2
//pseudocodigo
// declarar total1="", iva=""(calcular), total2=(calcular)
// escribir Ingrese su monto total
// leer total1
// iva = total1 * 0.15
// escribir iva
// total2= total1 + iva
// escrbir total2
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function totalmasiva(){
    let total1="", iva="", total2
    total1 = parseFloat(read("Ingrse su monto total:"))
    iva = total1 * 0.15
    write("IVA 15%: " +iva)
    total2 = total1 + iva
    write("Su monto total por su compra mas IVA es: " +total2)

}
totalmasiva()