let infoclima = JSON.stringify(['Verano riego diario','Primavera riego moderado','Invierno riego escaso', 'Otoño riego semanal']
);
localStorage.setItem ('infoclima', infoclima);
let datos = JSON.parse(localStorage.getItem("infoclima"));
console.log (datos)
datos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = item; 
    info.append(div);
});

let textoConsejo = document.querySelector("#textoConsejo");

function mostrarConsejos (div, description) {
    switch (div){
        case 1:
            textoConsejo.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('btnUno').style.backgroundColor = '#76e742';
            document.getElementById('btnDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('btnTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('btnCuatro').style.backgroundColor = '#b9b9b9';
            break;
        case 2:
            textoConsejo.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('btnUno').style.backgroundColor = '#b9b9b9';
            document.getElementById('btnDos').style.backgroundColor = '#76e742';
            document.getElementById('btnTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('btnCuatro').style.backgroundColor = '#b9b9b9';
            break;
        case 3:
            textoConsejo.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('btnUno').style.backgroundColor = '#b9b9b9';
            document.getElementById('btnDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('btnTres').style.backgroundColor = '#76e742';
            document.getElementById('btnCuatro').style.backgroundColor = '#b9b9b9';
            break;
        case 4:
            textoConsejo.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('btnUno').style.backgroundColor = '#b9b9b9';
            document.getElementById('btnDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('btnTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('btnCuatro').style.backgroundColor = '#76e742';
            break;
        default:
            textoConsejo.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('btnUno').style.backgroundColor = '#76e742';
            document.getElementById('btnDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('btnTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('btnCuatro').style.backgroundColor = '#b9b9b9';
            break;
    }

}
