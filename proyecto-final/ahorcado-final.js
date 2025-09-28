/** * * Proyecto Final - Ahorcado
 * * Autor: Angel Geovanny Reyes Vinasco
 * Carnet: 2024435
 * Seccion: IN5CV
*/

const vectorPalabras = ["Manzana", "Banano", "Spring", "Java", "Computadora", "Teclado", "Ratón",
    "Pantalla", "Celular", "Programación", "Estados Unidos", "Guatemala", "Perro",
    "Gato", "Elefante", "Cocodrilo", "Murciélago", "Desarrollo", "Diseño", "Internet"];
var array = [];
const imagenes = ["./ahorcadoImagenes/ahorcadoBase-sin-fondo.png", "./ahorcadoImagenes/ahorcadoCabeza-sin-fondo.png",
    "./ahorcadoImagenes/ahorcadoTorzo-sin-fondo.png", "./ahorcadoImagenes/ahorcadoPieIzquierdo-sin-fondo.png", "./ahorcadoImagenes/ahorcadoPieDerecho-sin-fondo.png", "./ahorcadoImagenes/ahorcadoManoIzquierda-sin-fondo.png",
    "./ahorcadoImagenes/ahorcadoCompleto-sin-fondo.png"];
const alt = ["Ahorcado Base", "Ahorcado Cabeza", "Ahorcado Torzo", "Ahorcado Pie Izq", "Ahorcado Pie der", "Ahorcado Mano Izq", "Ahorcado Completo"];
const guiones = document.createElement("div");
const ahorcado = document.createElement("div");
const inputDiv = document.createElement("div");
let palabra = "";
let contadorErrores = 0;

function iniciarJuego() {
    if (document.getElementById('gameOverMessage')) {
        location.reload();
        return;
    }

    document.body.innerHTML = "";
    const header = document.createElement("header");
    array = [];
    contadorErrores = 0;
    if (header) {
        header.setAttribute("class", "titulo");
        header.innerHTML = "<h1 class='probando'>Juego del Ahorcado</h1>";
        document.body.appendChild(header);
        creacionElementos();
    }
}

function asignarPalabras() {
    const random = Math.floor(Math.random() * vectorPalabras.length);
    const palabraSeleccionada = vectorPalabras[random].toUpperCase();
    return palabraSeleccionada;
}

function imprimirImagenes(index) {
    const imagenAhorcado = ahorcado.querySelector('img');

    if (imagenAhorcado) {
        if (index < imagenes.length) {
            imagenAhorcado.src = imagenes[index];
            imagenAhorcado.alt = alt[index];
        } else {
            console.error("Índice de imagen fuera de rango. Juego terminado.");
        }
    }
}

function creacionElementos() {
    palabra = asignarPalabras();
    const largo = palabra.length;

    inputDiv.setAttribute("class", "inputDiv");
    guiones.setAttribute("class", "guiones");
    ahorcado.setAttribute("class", "ahorcado");

    for (let i = 0; i < largo; i++) {
        array.push("<button class='botones' id='boton" + i + "' onclick='logicaAhorcado(" + i + ")'>__</button>");
    }

    guiones.innerHTML = array.join(' ');
    ahorcado.innerHTML = "<img id='imagen-ahorcado' src='" + imagenes[0] + "' alt='" + alt[0] + "'>";

    inputDiv.innerHTML = "<input class='input' type='text' id='inputText' placeHolder='Ingrese aquí su letra' maxLength='1'>";

    const instruccionesIniciales = document.createElement('p');
    instruccionesIniciales.setAttribute('id', 'instrucciones');
    instruccionesIniciales.textContent = "Instrucciones: Escriba 1 letra del abecedario español en el input y toque el espacio que crea donde pueda ir";

    inputDiv.appendChild(instruccionesIniciales);

    document.body.appendChild(ahorcado);
    document.body.appendChild(guiones);
    document.body.appendChild(inputDiv);

    console.log('Palabra seleccionada: ' + palabra);
}

function mostrarFinJuego(mensaje, palabraRevelada, tipo) {
    document.body.innerHTML = "";

    const divFin = document.createElement('div');
    divFin.setAttribute('id', 'gameOverMessage');
    divFin.setAttribute('class', 'game-over-message');

    const tituloColorClass = (tipo === 'perdio' ? 'perdio-titulo' : 'gano-titulo');

    divFin.innerHTML = `
        <h1 class="${tituloColorClass}">${mensaje}</h1>
        <p class="palabra-revelada">La palabra era: <strong class="palabra-texto">${palabraRevelada}</strong></p>
        <button class="button" onclick="location.reload()">Jugar de Nuevo</button>
    `;

    document.body.appendChild(divFin);
}

function logicaAhorcado(index) {
    const input = document.getElementById("inputText");
    const instruccionesP = document.getElementById("instrucciones");
    const errorInput = document.getElementById("errorInput");

    const letraIngresada = input ? input.value.toUpperCase() : null;

    if (input && letraIngresada && letraIngresada.length === 1) {
        if (errorInput) {
            errorInput.remove();
        }
        if (!instruccionesP) {
            const nuevoMensaje = document.createElement('p');
            nuevoMensaje.setAttribute('id', 'instrucciones');
            nuevoMensaje.textContent = "Ingrese una letra";
            inputDiv.appendChild(nuevoMensaje);
        }

        const boton = document.getElementById("boton" + index);

        if (letraIngresada === palabra[index]) {
            boton.textContent = letraIngresada;

            const guionesVisibles = guiones.textContent.replace(/__/g, '').replace(/\s/g, '');
            if (guionesVisibles.length === palabra.length) {
                mostrarFinJuego("¡FELICIDADES, GANASTE!", palabra, 'gano');
                return;
            }

        } else {
            console.log("Letra incorrecta en esa posición.");

            contadorErrores += 1;

            imprimirImagenes(contadorErrores);

            if (contadorErrores >= imagenes.length - 1) {
                mostrarFinJuego("¡HAS PERDIDO!", palabra, 'perdio');
                return;
            }
        }
        input.value = '';

    } else {
        if (instruccionesP) {
            instruccionesP.remove();
        }
        if (!errorInput) {
            const nuevoError = document.createElement('p');
            nuevoError.setAttribute('id', 'errorInput');
            nuevoError.style.color = 'red';
            nuevoError.textContent = "Debe de ingresar una letra";
            inputDiv.appendChild(nuevoError);
        }
    }
}