let formulario = document.getElementById("formulario");
let presupuesto = document.getElementById("presupuesto");
const pedido =[]
formulario.addEventListener("submit", (e) => {
e.preventDefault () 
const pedido =[]
let input = e.target.children;
pedido.push(input[1].value);
pedido.push(input[3].value);
pedido.push(input[5].value);
pedido.push(input[7].value);
pedido.push(input[9].value);
presupuesto.innerHTML = "";

let nombre = pedido[0];
let apellido = pedido[1];
let telefono = pedido[2];
let email = pedido[3];
let detalle = pedido[4];



pedido.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = item; 
    presupuesto.append(div);
});

alert(`${nombre} tu consulta ha sido enviada con exito!
Resumen:${detalle} `)

})