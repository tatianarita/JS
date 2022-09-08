alert ('Bienvenidos a Viver');

let nombre = prompt('Ingrese su nombre');

alert(`Hola ${nombre}! vamos a ponerle onda a tu vida`);

const plantas =[
    {id: 1, tipo: 'suculentas', ambiente: 'exterior', riego: 'regular'},
    {id: 2, tipo: 'plantas de interior', ambiente: 'interior', riego: 'poco'},
    {id: 3, tipo: 'cactus', ambiente: 'interior o exterior', riego: 'poco'},
    {id: 4, tipo: 'plantas fumanchu', ambiente: 'escondidas si son muchas', riego: 'moderado'},
];

let buscar = prompt('Qué tipo de plantas buscas?');

let busqueda = plantas.find((item) => item.tipo === buscar);

console.log(busqueda);

if( busqueda === undefined ){
mensaje="No le hay de esa";
console.log(mensaje);
plantas.forEach(index => console.log(index))
}
