// Funcion Constructora
// function Auto (puertas, color, marca, año, ruedas) {
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;

//     this.informacion = function (){
//         console.log("Este es un " + this.marca + " de color " + this.color);
//     };
// }

// var miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
// console.log(miPrimerAuto);
// console.log(miPrimerAuto.marca);
// miPrimerAuto.informacion();

//Expresion de clase
// class Auto{
//     constructor(puertas, color, marca, año, ruedas) {
//         this.puertas = puertas;
//         this.color = color;
//         this.marca = marca;
//         this.año = año;
//         this.ruedas = ruedas;
//     }
//     informacion (){
//         console.log("Este es un " + this.marca + " de color " + this.color);
//     }
// }

// var miSegundoAuto = new Auto(4, "Blanco", "Fiat", 2015, 4)
// console.log(miSegundoAuto);
// console.log(miSegundoAuto.marca);
// miSegundoAuto.informacion();

class Football{
    constructor(jugador){
        this.jugador = jugador
    }
    obtenerNombre() {
        console.log(this.jugador);
    }
}

var argentina = new Football('Messi');
var brasil = new Football('Pele');

argentina.obtenerNombre();
brasil.obtenerNombre();