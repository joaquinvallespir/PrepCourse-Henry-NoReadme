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

// Definir la función que recibe un objeto como parámetro
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

 
 
 
 
 