/**
 *          Angel Geovanny Reyes Vinasco
 *          2024435 IN5CV
 *          
 */
function signoNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if( numero < 0 ){
        return "Negativo";
    } else{
        return "Cero"
    }
}
const numero = parseInt(prompt("Ingrese un numero"));
const signoString = signoNumero(numero);

console.log(signoString);