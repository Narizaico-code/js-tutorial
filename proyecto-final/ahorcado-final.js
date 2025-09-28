/** 
 * 
 *          Proyecto Final - Ahorcado
 * 
 *          Autor: Angel Geovanny Reyes Vinasco
 *          Carnet: 2024435
 *          Seccion: IN5CV
*/

const vectorPalabras = ["Manzana","Banano", "Spring", "Java", "Computadora", "Teclado", "Ratón", 
    "Pantalla", "Celular", "Programación", "Estados Unidos", "Guatemala", "Perro", 
    "Gato", "Elefante", "Cocodrilo", "Murciélago", "Desarrollo", "Diseño", "Internet"];
var array = [];
var imagenes = ["./ahorcadoImagenes/ahorcadoBase-sin-fondo.png", "./ahorcadoImagenes/ahorcadoCabeza-sin-fondo.png", 
    "./ahorcadoImagenes/ahorcadoTorzo-sin-fondo.png", "./ahorcadoImagenes/ahorcadoPieIzquierdo-sin-fondo.png", "./ahorcadoImagenes/ahorcadoPieDerecho-sin-fondo.png", "./ahorcadoImagenes/ahorcadoManoIzquierda-sin-fondo.png",
    "./ahorcadoImagenes/ahorcadoCompleto-sin-fondo.png"];
// console.log(vectorPalabras.length);

function iniciarJuego() {
    document.body.innerHTML = "";
    const header = document.createElement("header");
    if (header) {
        header.setAttribute("class", "titulo");
        header.innerHTML = "<h1 class='probando'>Juego del Ahorcado</h1>";
        document.body.appendChild(header);
        creacionElementos(0);
    }
}

function asignarPalabras() {
    const random = Math.floor(Math.random() * vectorPalabras.length);
    const palabraSeleccionada = vectorPalabras[random];
    return palabraSeleccionada;
}

function creacionElementos(index) {
    const palabraSeleccionada = asignarPalabras();
    const largo = palabraSeleccionada.length;
    const guiones = document.createElement("div");
    const ahorcado = document.createElement("div");
    const inputDiv = document.createElement("div");
    inputDiv.setAttribute("class", "inputDiv");
    guiones.setAttribute("class", "guiones");
    ahorcado.setAttribute("class", "ahorcado");
    for (let i = 0; i < largo; i++) {
        array.push("<button class='botones' id='boton"+i+"' onclick='logicaAhorcado("+i+")'>__</button>");
        console.log(i);
    }

    guiones.innerHTML = array.join(' ');
    ahorcado.innerHTML = "<img src='"+imagenes[index]+"' alt='Foto base de ahorcado'>";
    inputDiv.innerHTML = "<input class='input' type='text' id='inputText' placeHolder='Ingrese aquí su letra' maxLength='1'>";
    inputDiv.innerHTML += "<p>Instrucciones: Escriba 1 letra del abecedario español en el input y toque el espacio que crea donde pueda ir</p>";
    document.body.appendChild(ahorcado);
    document.body.appendChild(guiones);
    document.body.appendChild(inputDiv);
    console.log('Palabra seleccionada: ' + palabraSeleccionada);

    return document;
}

function logicaAhorcado(index) {
    creacionElementos(0);

}