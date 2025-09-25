/*
        Tipo de dato number `NUMBER`
*/
// 1. entero
    const enter = 33
    const decimal = 3.34
// 2. notacion cientifica
    const cientifica = 5e4
// 3. infinito y NaN(No es un Numero, Not a Number)
    const infinito = Infinity
    const noEsNumero = NaN
// Operaciones aritmeticas
// 1. suma, resta, multiplicacion y division
    const suma = 5 + 6
    const resta = 10 - 10
    const multiplicacion = 3*4
    const division = 16/4
// 2. modulo y exponenciacion
    const modulo = 16 % 8 // El resultado es 0
    const exponenciacion = 2**4

// La presicion en JavaScript
    const resultado = 0.1 + 0.2 // Da 0.3 (En teoría).
    // console.log(resultado.toFixed(1) == 0.3) // 
    // console.log(resultado.toFixed(1))

// Operaciones avanzadas
    const raizCuadrada = Math.sqrt(16)
    const valorAbsoluto = Math.abs(-7)
    const aleatorio = Math.floor(Math.random()*20+10) * -1
    //console.log(raizCuadrada)
    //console.log(valorAbsoluto)
    //console.log(aleatorio)
// Lenguajes de programacion
    // Compilados: Java( JVM -> .java _-_> .class --> .jar, RuntimeException), C, C++, Rust

    // Interpretados: Javascript --> Lee -> Ejecuta, Python
        const numero = 2
        const boolean = true
        // Conversion implicita
        console.log(numero + boolean)
        