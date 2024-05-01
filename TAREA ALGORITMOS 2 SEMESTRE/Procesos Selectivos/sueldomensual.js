//16. Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo
//anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y 
//mostrar el sueldo neto anual.
//Analisis de requerimiento
//ent: sueldo=""(leer), impuesto=""(calcular), sueldonta=(calcular)
//Pro: "Ingrese su sueldo"
// si (sueldo > 30000)
// impuesto = sueldo * 0.15
// escribir "su impuesto es del 15%"
// sueldona = sueldo + impuesto
// escribir sueldonta
// si no 
// escribir sueldo
//Sal: escribir sueldo
//pseudocodigo
// declarar sueldo="", impuesto="", sueldonta
//"Ingrese su sueldo"
//leer sueldo
// si (sueldo > 30000)
// impuesto = sueldo * 0.15
// escribir "su impuesto es del 15%"
// sueldona = sueldo + impuesto
// escribir sueldonta
// si no 
// escribir sueldoo
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function sueldonetoanual(){
    let sueldo="", impuesto="", sueldonta=""
    sueldo = parseFloat(read("Ingrse su sueldo neto anual:"))
    if(sueldo > 30000){
        impuesto = sueldo * 0.15
        write("Su impuesto es de 15%: " +impuesto)
        sueldonta = sueldo + impuesto
        write("Su sueldo neto anual es:" +sueldonta)
    }
    else{
        write("Su sueldo neto anual es: " +sueldo)
    }

}
sueldonetoanual()