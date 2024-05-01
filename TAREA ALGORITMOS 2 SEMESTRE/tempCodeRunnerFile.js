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