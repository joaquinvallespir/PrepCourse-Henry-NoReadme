function esVocal(letra) {
    // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
    // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
    // Si no es vocal, tambien debe retornar "Dato incorrecto".
    // Tu código:
    if(letra.length===2)
    console.log("Dato incorrecto");
    else if (letra == 'a' || letra == 'A' || letra == 'e' || letra == 'E' || letra == 'i' || letra == 'I' || letra == 'o' || letra == 'O' || letra == 'u' || letra == 'U')
       console.log("Es vocal");
    else
    {
       console.log("Dato incorrecto");
        return "Dato incorrecto"
    }
 }

 console.log(esVocal('l'));