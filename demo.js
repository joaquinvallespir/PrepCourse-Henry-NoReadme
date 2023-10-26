// function continueStatement(num) 
// {
//    let contador = 0 ;
//    let nuevoNum = num;
//    let array = [];
//    while(contador<10)
//       {
//          if(contador===5)
//          {
//             contador++;
//             continue;
//          }
//          nuevoNum += 2;
//          array.push(nuevoNum);
//          contador++;
//       }
//    return array;
// }
//  console.log(continueStatement(50));

/* // Definir la función que recibe un objeto como parámetro
function agregarMultiplicacion(objeto) {
   // Verificar si el objeto tiene las propiedades necesarias
   if (objeto.hasOwnProperty('propiedad1') && objeto.hasOwnProperty('propiedad2')) {
     // Agregar una nueva función al objeto que multiplica las propiedades
     objeto.multiplicarPropiedades = function() {
       return objeto.propiedad1 * objeto.propiedad2;
     };
   } else {
     console.error('El objeto no tiene las propiedades necesarias');
   }
 }
 
 // Crear un objeto
 const miObjeto = {
   propiedad1: 5,
   propiedad2: 10
 };
 
 // Llamar a la función para agregar la función de multiplicación
 agregarMultiplicacion(miObjeto);
 
 // Ahora puedes usar la función agregada para multiplicar las propiedades
 const resultado = miObjeto.multiplicarPropiedades();
 console.log('El resultado de la multiplicación es: ' + resultado);
 */

/*  function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayPadre = [];
   var arrayHijo = [];
   for(var prop in objeto)
      arrayHijo.push([prop, objeto[prop]]);

  
   
  
  arrayPadre.push(arrayHijo)
  console.log(arrayPadre)
   return arrayPadre;
}
var uwu = {D: 1, B: 2, C: 3}
deObjetoAarray(uwu) */
 
// var array = [[],[]]
 
// function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
//   var contador = {};
//   var stringOrdenado = string.split("").sort().join("");

//   for (elemento of stringOrdenado)
//   {
//     if(contador.hasOwnProperty(elemento))
//      contador[elemento]++;
//     else
//       contador[elemento] = 1;
//   }
//   console.log(contador)
// }

// numberOfCharacters('adsjfdsfsfjsdjfhacabcsbajda')
 
// function asAmirror(frase) {
//   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
//   // La diferencia es que cada palabra estará escrita al inverso.
//   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
//   // Tu código:
//   var contador = 0
//   var palabras = [];
//   var palabra = "";
//   for (let i = 0; i<frase.length; i++)
//   {
//      if(frase[i] === " ")
//         {
//            palabras[contador] = palabra
//            contador++;
//            palabra = "";
//         }
//      else
//         palabra = frase[i] + palabra
//         if(i === frase.length-1)
//         {
//           palabras[contador] = palabra
//            palabra = "";
//         }
//   }
// console.log(palabras);
//  for(let i = 0; i< palabras.length; i++)
//  {
//   if(i === palabras.length-1)
//   palabra = palabra + palabras[i]
//   else
//   palabra = palabra + palabras[i] + " "
//  }
//   return palabra
// }

// asAmirror("The Henry Challenge is close!")

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  numeroString = numero.toString();
  condicion = true;
 
     for(i=0; i<(numeroString.length/2); i++)
     {
      console.log(i)
      console.log(numeroString.length-1-i)
      if(numeroString[i] !== numeroString[(numeroString.length-1-i)])
        condicion = false;
     }
 
 console.log(condicion)
  return condicion;
  
}
/*
0 5
1 4
2 3
*/
capicua(2321232);