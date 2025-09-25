/*
            Conversiones -> Explicitas e Implicitas
*/

// Conversion Explicit Type Casting
    const string = '54'
    const integer = parseInt(string)

    //console.log(typeof string)
    //console.log(typeof integer)

    const float = parseFloat("3.14")
    //console.log(typeof float)

    const binary = '1010'
    const decimal = parseInt(binary, 2)
    // console.log(decimal)

    const hexa = 'CAFE' // A = 10, b = 11, C = 12, D = 13, E = 14, F = 15
    // 12 / 10 / 15 / 14
    // 1100 1010 1111 1110
    const decimalHex = parseInt(hexa, 16)
    // console.log(decimalHex)

// Conversion Implicit Type Casting
    const resultado = '5' + 3
    // console.log(resultado)

    const sumaConBoolean = '3' + true
    // console.log(sumaConBoolean)

    const sumaConNumero = 2 + true
    // console.log(sumaConNumero) // 3

    const valorString = '20'
    const valorNumber = 10
    const valorBoolean = true
    console.log("+-------------------+")
    console.log(valorString + valorString) // Lo que lleva string se concatena
    console.log(valorString + valorNumber) // Lo que no sea String lo suma
    console.log(valorString + valorBoolean) // Lo que no sea String lo suma
    console.log("+-------------------+")
    console.log(valorNumber + valorNumber) // Suma normal
    console.log(valorNumber + valorString) // Convierte el numero a string y concatena
    console.log(valorNumber + valorBoolean) // Convierte el boolean a numero y suma
    console.log("+-------------------+")
    console.log(valorBoolean + valorBoolean) // Convierte el boolean a numero y suma
    console.log(valorBoolean + valorNumber)  // Convierte el boolean a numero y suma
    console.log(valorBoolean + valorString) // Convierte el boolean a string y concatena
    console.log("+-------------------+")