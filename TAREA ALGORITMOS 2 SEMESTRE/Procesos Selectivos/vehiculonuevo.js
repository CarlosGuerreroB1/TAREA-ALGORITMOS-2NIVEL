//15.Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final.
//Analisis de requerimiento
//ent: precio=""(leer), descuento=""(calcular), año=""(calcular), preciofinal=""(calcular)
//Pro: ingresar el precio del vehiculo
// ingrese su año de fabricacion
// descuento = total1 * descuento
// total2 = total1 - descuento
//Sal: escribir preciofinal
//pseudocodigo
// declarar precio="", descuento=""(calcular), año=(calcular), preciofinal=""
// escribir "Ingrese el precio del vehiculo"
// leer precio
// escribir "Ingrese su año de fabricacion"
// leer año
// si (año < 2010)
// descuento = precio * 0.1
// preciofinal= precio - descuento
// escribir preciofinal
// si no
// escribir precio
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function vehiculo(){
    let precio="", descuento="", año="", preciofinal=""
    precio = parseFloat(read("Ingrse el precio del vehiculo:"))
    año = parseFloat(read("Ingrse el año de fabricacion:"))
    if(año < 2010){
        descuento = precio * 0.10
        write("Su descuento es del 10%: " +descuento)
        preciofinal = precio - descuento
        write("El precio final del vehiculo es:" +preciofinal)
    }
    else{
        write("El vehiculo no aplica para elk descuento")
        write(precio)
    }

}
vehiculo()