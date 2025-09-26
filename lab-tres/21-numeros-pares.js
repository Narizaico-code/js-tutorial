/**
 *          Angel Geovanny Reyes Vinasco
 *          2024435 IN5CV
 *          
 * Obtener números pares de un arreglo
 */
function obtenerPares(arreglo) {
    let pares = [];
    
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            pares.push(arreglo[i]);
        }
    }
    
    return pares;
}

let arreglo = [];
for (let i = 1; i <= 20; i++) {
    arreglo.push(i);
}

let numerosPares = obtenerPares(arreglo);

console.log("Arreglo original: " + arreglo);
console.log("Números pares: " + numerosPares);