/**
 *          Angel Geovanny Reyes Vinasco
 *          2024435 IN5CV
 *          
 * Juego FizzBuzz del 1 al 100
 */
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}