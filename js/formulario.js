let formulario = document.getElementById("formulario");
let presupuesto = document.getElementById("presupuesto");
const pedido =[]
formulario.addEventListener("submit", (e) => {
e.preventDefault () 
/*ARRAY*/ 
const pedido =[]
let input = e.target.children;
pedido.push(input[1].value);
pedido.push(input[3].value);
pedido.push(input[5].value);
pedido.push(input[7].value);
pedido.push(input[9].value);
pedido.push(input[11].value);
pedido.push(input[13].value);
presupuesto.innerHTML = "";

let nombre = pedido[0];
let apellido = pedido[1];
let telefono = pedido[2];
let email = pedido[3];
let preferencia = pedido[4];
let espacio = pedido[5];
let detalle = pedido[6];


pedido.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = item; 
    presupuesto.append(div);
});

Swal.fire(
    'Tu consulta ha sido enviada con exito!')

})

fetch("./data.json")
.then(response => response.json())
.then(data=>{
        data.forEach(aproximados =>{
            const div = document.createElement("div");
            div.innerHTML = `
            ${aproximados.id}
            ${aproximados.nombre}
            ${aproximados.precio}
            `
            opciones.append(div);
        })
    })

  

    const contenedorproductos = document.getElementById("contenedorproductos")

    stockplantas.forEach((producto) => {
        const div = createElement(`div`)
        div.innerHTML
    });