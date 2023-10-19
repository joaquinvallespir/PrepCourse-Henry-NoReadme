// crear y asignar

var deportes = { 
    conBalon: ['Football', 'Basketball', 'Rugby'], 
    sinBalon: ['Boxeo', 'Surf', 'Trekking']} ;

// crear y modificar
var persona = {nombre: 'Lucas', edad: 26, estudios: { esProgramador: true}};
console.log(persona.nombre)
persona.nombre = 'Martin'
console.log(persona.edad);
persona.edad = 32;
console.log(persona.nombre)
console.log(persona.edad);
// eliminar
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);
delete autos.marcas;
console.log(autos);
//objeto con funciones
var misFunciones = {
    saludar: function() {
        console.log('Hola');
    },
};

misFunciones.saludar();

var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes']};
console.log(atuendos.manos)

atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);


var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos){
    comidas[propUno] = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];
};
diferenciaDeNotaciones('saludable','noSaludable');
console.log(comidas);

//Verifica si tiene la propiedad
var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
var tienePropiedad = libro.hasOwnProperty('autor');
console.log(tienePropiedad);

//Devuelve todas la propiedades
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades)

//Recorre el objeto, propiedades y valores
var mundo = {continentes: 7, paises: 195, oceanos: 5}
for(var prop in mundo){
    console.log('Esta es la propiedad: ' + prop);
    console.log('Este es el valor: ' + mundo[prop]);
}

//this define el contexto para usar la propiedad en vez de una variable externa con el mismo nombre
var mascota = {
    animal: 'Perro', 
    raza: 'Ovejero Alemán', 
    amistoso: true, 
    dueña: 'María López',
    info: function() {console.log('Mi perro es un ' + this.raza);},
};

mascota.info();
