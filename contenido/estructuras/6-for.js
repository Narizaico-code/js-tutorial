/**
 * 
 * 
 *              Ciclo For -> Para
 */

let lista = ["Comer" , "Dormir", "Codear", "Repetir"];

//for (let i = 0; i < lista.length; i++) {
//    console.log(lista[i]);
//}

// For-Of ----------------> For each
let canasta = ["Manzana" , "Naranjas", "Mangos" , "Uvas"]
//for (frutas of canasta) {
//    console.log(frutas);
//}
// For-In
// -> Itera sobre las propiedades de un objeto

const canastaDeFrutas = {
    nombre : "Manzana",
    precio : 5.0,
    tipo : "Verde",
    marca : "Chanita's apple"
}

//for (fruta in canastaDeFrutas) {
//    console.log(fruta);
//}

for (fruta in canastaDeFrutas){
    console.log(`${fruta} : ${canastaDeFrutas[fruta]}`)
}

for (fruta of canastaDeFrutas) {
    console.log(fruta)
}