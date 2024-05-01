//18.“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
//El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100
//pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
//Se requiere un algoritmo que ayude a determinar el presupuesto que se debe 
//presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva
////Analisis de requerimiento
//ent: costototal=""(leer), personas=""(leer), iva=""(calcular)
//pro: escribir "Ingrese la cantidad de personas"
//     leer personas
//     si(personas > 100)
//     escribir "el costo del platillo por persona es de $200"
//     iva = 200 * 0.15
//     costototal = iva + 200
//     si(personas < 200)
//     escribir "el costo del platillo por persona es de $15"
//     iva = 15 * 0.15
//     costototal = iva + 15
//     si(personas > 200)
//     escribir "el costo del platillo por persona es de $10"
//     iva = 10 * 0.15
//     costototal = iva + 10
//     si(personas < 100)
//     escribir "el costo del platillo por persona es de $20"
//     iva = 20 * 0.15
//     costototal = iva + 20
//sal: escribir costototal
//pseudocodigo
// declarar costototal="", personas="", iva=""
//     escribir "Ingrese la cantidad de personas"
//     leer personas
//     si(personas > 100)
//     escribir "el costo del platillo por persona es de $200"
//     iva = 200 * 0.15
//     costototal = iva + 200
//     si(personas < 200)
//     escribir "el costo del platillo por persona es de $15"
//     iva = 15 * 0.15
//     costototal = iva + 15
//     si(personas > 200)
//     escribir "el costo del platillo por persona es de $10"
//     iva = 10 * 0.15
//     costototal = iva + 10
//     si(personas < 100)
//     escribir "el costo del platillo por persona es de $20"
//     iva = 20 * 0.15
//     costototal = iva + 20
// escribir costotal
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function somosmas(){
    let personas="", costotal="", iva=""
    personas = parseInt(read("Ingrese la cantidad de personas: "))
    if(personas > 100 & personas < 200){
        write("El costo del platillo es $200")
        iva = 200 * 0.15
        write("IVA: " +iva)
        costotal = iva + 200
        write("El costo total es:" +costotal)
    }
    else if(personas < 200 & personas > 100){
        write("El costo del platillo es $15")
        iva = 15 * 0.15
        write("IVA: " +iva)
        costotal = iva + 15
        write("El costo total es:" +costotal)
    }
    else if(personas > 200){
        write("El costo del platillo es $10")
        iva = 10 * 0.15
        write("IVA: " +iva)
        costotal = iva + 10
        write("El costo total es:" +costotal)
    }
    else if(personas < 100){
        write("El costo del platillo es $20")
        iva = 20 * 0.15
        write("IVA: " +iva)
        costotal = iva + 20
        write("El costo total es:" +costotal)
    }
}
somosmas()