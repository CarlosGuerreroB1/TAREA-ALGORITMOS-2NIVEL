//17. La asociación de vinicultores tiene como política fijar un precio inicial al kilo de 
//banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando
//se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere
//determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
//Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
//Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.
//Analisis de requerimiento
//ent: tipo=""(leer), tamaño=""(leer)
//pro: escribir "Su tipo es A o B"
//     leer tipo
//     escribir "Es Tamaño 1 o 2"
//     leer tamaño
//     si(tipo = A; tamaño = 1)
//     escribir "su cargo al precio inicial es de $2"
//     si no(tipo = A; tamañ0 = 2)
//     escribir "su cargo al precio inicial es de $3"
//     si(tipo = B; tamaño = 1)
//     escribir "su cargo al precio inicial es de $3"
//     si no(tipo = B; tamañ0 = 2)
//     escribir "su cargo al precio inicial es de $2"
//sal: escribir el tipo y el tamaño
//pseudocodigo
// declarar tipo=""(leer), tamaño=""(leer)
//     escribir "Su tipo es A o B"
//     leer tipo
//     escribir "Es Tamaño 1 o 2"
//     leer tamaño
//     si(tipo = A; tamaño = 1)
//     escribir "su cargo al precio inicial es de $2"
//     si no(tipo = A; tamañ0 = 2)
//     escribir "su cargo al precio inicial es de $3"
//     si(tipo = B; tamaño = 1)
//     escribir "su cargo al precio inicial es de $3"
//     si no(tipo = B; tamañ0 = 2)
//     escribir "su cargo al precio inicial es de $2"
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function kilobanano(){
    let tipo="", tamaño=""
    tipo = read("Elija su tipo de precio inical, A o B:")
    tamaño= parseInt(read("Elija el tipo de tamaño, 1 o 2:"))
    if(tipo == "A" & tamaño ==1 ){
        write("Su cargo al precio inicial es de $2")
    }
    else if(tipo == "A" & tamaño ==2){
        write("Su cargo al precio inicial es de $3")
    }
    if(tipo = "B" & tamaño == 1 ){
        write("Su cargo al precio inicial es de $3")
    }
    else if(tipo = "B" & tamaño == 2){
        write("Su cargo al precio inicial es de $2")
    }
}
kilobanano()