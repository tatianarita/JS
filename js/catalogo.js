const contenedorproductos = document.getElementById("contenedorproductos")
const productos = [
  {id: 1.1, nombre: "suculenta love", cantidad: 1, precio: 500, tipo: "plant", clase: "exterior", img: '../imagenes/suculove.jpg'},
  {id: 1.2, nombre: "cactus", cantidad: 1, precio: 700, tipo: "plant", clase: "exterior", img: '../imagenes/cac.jpg'},
  {id: 1.3, nombre: "monstera", cantidad: 1, precio: 1400, tipo: "plant", clase: "exterior", img: '../imagenes/monstera.jpg'},
  {id: 1.4, nombre: "suculenta crasa", cantidad: 1, precio: 600, tipo: "plant", clase: "exterior", img: '../imagenes/echeverria.jpg'},
  {id: 1.5, nombre: "suculenta colgante", cantidad: 1, precio: 550, tipo: "plant", clase: "exterior", img: '../imagenes/rosario.jpg'},
  {id: 1.6, nombre: "lengua de suegra", cantidad: 1, precio: 800, tipo: "plant", clase: "exterior", img: '../imagenes/sanseveria.jpg'},
  {id: 1.6, nombre: "palo de agua", cantidad: 1, precio: 1500, tipo: "plant", clase: "exterior", img: '../imagenes/palodeagua.jpg'},
  {id: 1.6, nombre: "suculentas varias", cantidad: 1, precio: 750, tipo: "plant", clase: "exterior", img: '../imagenes/sucuvarias.jpg'},
  {id: 2.1, nombre: "maceta terracota", cantidad: 1, precio: 650, tipo: "macet",clase: "exterior", img: '../imagenes/terracota.jpg'},
  {id: 2.2, nombre: "maceta cemento", cantidad: 1, precio: 500, tipo: "macet", clase: "exterior", img: '../imagenes/cemento.jpg'},
  {id: 2.3, nombre: "maceta personalizada", cantidad: 1, precio: 700, tipo: "macet", clase: "exterior", img: '../imagenes/personalizada.jpg'},
  {id: 2.4, nombre: "maceta colgante", cantidad: 1, precio: 900, tipo: "macet", clase: "interior", img: '../imagenes/colgante.jpg'},
  {id: 2.5, nombre: "terrario globe", cantidad: 1, precio: 1100, tipo: "macet", clase: "interior", img: '../imagenes/globe.jpg'},
  {id: 2.6, nombre: "kokedama", cantidad: 1, precio: 1400, tipo: "macet", clase: "interior", img: '../imagenes/terra.jpg'},
  {id: 2.7, nombre: "jardinera", cantidad: 1, precio: 2500, tipo: "macet", clase: "exterior", img: '../imagenes/jardinera.jpg'},
]
let lista = JSON.stringify(productos)
localStorage.setItem("inventario", lista)



let filterM = productos.filter((i) => i.tipo.includes ("macet"))
let filterP = productos.filter((i) => i.tipo.includes ("plant"))
console.log(filterM)
function mostrarfiltro(array){
  for (i of array) {
    let item =document.createElement("div");
        item.innerHTML = ` <figure><img src="${i.img}" alt="Image"> </figure>
        <h3>Producto: ${i.nombre} </h3>
        <p>Código del producto: ${i.id}</p>
        <p>Ambiente: ${i.clase} </p>
        <b>$ ${i.precio}</b>
        `
  contenedorproductos.append(item);
  }
}

const buscadorProd = document.getElementById('buscadorProd');
// filtro de búsqueda de productos
buscadorProd.addEventListener('change',()=>{
  contenedorproductos.innerHTML = "";
  if (buscadorProd.value == 'plant') {mostrarfiltro(filterP)
  } else {mostrarfiltro(filterM)}
})


