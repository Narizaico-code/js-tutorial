/**
 *          Angel Geovanny Reyes Vinasco
 *          2024435 IN5CV
 * 
 * Determinar si es mayor o menor de edad
 */
const edad = parseInt(prompt("Por favor, ingresa tu edad:"));

if (edad >= 18) {
    console.log("Con " + edad + " años eres: Mayor de edad");
} else {
    console.log("Con " + edad + " años eres: Menor de edad");
}