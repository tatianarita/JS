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


alert(`${nombre} tu consulta ha sido enviada con exito!
Resumen:${detalle} `)

})

let aproximados = JSON.stringify(['suculentas entre $5000 y $10000','plantas de interior entre $6000 y $8000','cactus entre $7000 y $11000',]
);
localStorage.setItem ('aproximados', aproximados);
let datos = JSON.parse(localStorage.getItem("aproximados"));
console.log (datos)
datos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = item; 
    opciones.append(div);
});
