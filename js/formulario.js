/*Formulario de presupuesto*/ 
let formulario = document.getElementById("formulario");
let presupuesto = document.getElementById("presupuesto");
/*array para los datos que ingresa el usuario*/ 
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
pedido.push(input[11].value);
pedido.push(input[13].value);
presupuesto.innerHTML = "";
console.log(pedido)
/*asignamos variables a los datos que se ingresan*/ 
let nombre = pedido[0];
let apellido = pedido[1];
let preferencia = pedido[2];
let espacio = pedido[3];
let telefono = pedido[4];
let email = pedido[5];
let detalle = pedido[6];

console.log (preferencia)
const div = document.getElementById("opciones");
/*fetch*/
if ((preferencia) == "cactus") { 
     fetch("../data.json")
    .then(response => response.json())
    .then(data=>{
        data.forEach(aproximados =>{
            opciones.innerHTML = "";
            const div = document.createElement("div");
            div.innerHTML = `<p>Aproximado:</p>
            ${aproximados.opcion1}`;
            opciones.append(div);
        })   
    })}
if ((preferencia) == "suculentas") { 
    fetch("../data.json")
    .then(response => response.json())
    .then(data=>{
        data.forEach(aproximados =>{
            opciones.innerHTML = "";
            const div = document.createElement("div");
            div.innerHTML = `<p>Aproximado:</p>
            ${aproximados.opcion2}`;
            opciones.append(div);
        })
    })}
if ((preferencia) == "plantas de interior") { 
    fetch("../data.json")
    .then(response => response.json())
    .then(data=>{
        data.forEach(aproximados =>{
            opciones.innerHTML = "";
            const div = document.createElement("div");
            div.innerHTML = `<p>Aproximado:</p>
            ${aproximados.opcion3}`;
            opciones.append(div);
        })
    })}
pedido.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = item; 
    presupuesto.append(div);
});
/*librería*/ 
Swal.fire(
    'Tu consulta ha sido enviada con exito!')

})