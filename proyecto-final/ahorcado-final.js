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

console.log(vectorPalabras.length);

const random = Math.floor(Math.random() * 21);

function iniciarJuego() {
    document.body.innerHTML = "";
    let header = document.querySelector("header");
    if (header) {
        header.setAttribute("id", "carga");
        document.body.innerHTML = "<header><h1>Juego del Ahorcado</h1></header>";
    }
}