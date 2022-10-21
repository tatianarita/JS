// array vacio donde almaceno mis prodcutos

let miCompra = []

// filtro para encontrar plantas y macetas

const buscadorPlantas = document.getElementById('buscadorPlantas');
const buscadorMacetas = document.getElementById('buscadorMacetas')

// contenedor de plantas y macetas
const plant = document.getElementById('stockplantas');
const macet = document.getElementById('stockmacetas');

// contenedor de carrito
const productosElegidos = document.getElementById('productosElegidos')

// resultado de la suma de mis productos
const precioTotal = document.getElementById('precioTotal');

const agregados = document.getElementById('agregados')

// filtro de plantas
buscadorPlantas.addEventListener('change',()=>{
    buscadorPlantas.value == 'all' ? mostrarPlantas(stockplantas) : mostrarPlantas(stockplantas.filter(e => e.planta == buscadorPlantas.value))
    })

// filtro de macetas
buscadorMacetas.addEventListener('change',()=>{
    buscadorMacetas.value == 'all' ? mostrarMacetas(stockmacetas) : mostrarMacetas(stockmacetas.filter(e => e.clase == buscadorMacetas.value))
    })

// ================
mostrarPlantas(stockplantas);
mostrarMacetas(stockmacetas);


// funcion para mostrar paquetes
function mostrarPlantas(array){
    // le pido que cree un elemento HTML
    pack.innerHTML='';

    // declaro parametros condicionales para mostrar mis productos
    for (const Planta of array){

        // creo un div a traves de una variable
        let div = document.createElement('div');

        // asigno un classname
        div.className = 'plantas';

        // le asigno el contenido a mi variable (el cual va a corresponder a mi array de productos)
        div.innerHTML = `<div class="card card1 col-12 column">
          <div>
           <small class="first">DEJATE ATRAPAR</small>
           <figure><img src="./multimedia/${Paquete.img}" alt="Image"> </figure>
           <h3>${Planta.nombre}</h3>
            <p>Cantidad ${Planta.cantidad} </p>
            <div class="inner">
            <ul>
              <li><small>Duración ${Paquete.dias} días</small> <span><img src="./UI-kit/icons8-calendar-30.png" alt="">DISPONIBLE TODO EL AÑO</span> </li>
              <li><small>HOTEL?</small> <span><img src="./UI-kit/icons8-hotel-check-out-30.png" alt="">${Paquete.hotel}</span> </li>
              <li><small>Precio en dólares:</small><span><img src="./UI-kit/icons8-sale-price-tag-30.png" alt=""> ${Planta.precio}</span> </li>
            </ul>
            <button id="botonAgregar${Planta.id}" type="button" class="btn btn-warning">SUMALA!</button>
            </div>
        </div>
      </div>
      `
        // contenedor hijo
      plant.appendChild(div);

    //   le pido a mi botón que cumpla la funcion de agregar productos a mi chango
      let btnAgregar = document.getElementById(`botonAgregar${Planta.id}`)
      btnAgregar.addEventListener('click',()=>{
        // a traves de una arrow function
        agregarPlanta(Planta.id)
    
        // utilizo una libreria para dar mejor estilo a mi alerta
        Toastify({

            // llamo los parámetros condicionales en mi alerta, al igual que en mi catálogo
            text: "Agregaste a tu voucher " + '"'+ Paquete.nombre + '"' + " por el precio de " + Paquete.precio + " dólares",
            
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right", 
            stopOnFocus: false,
            style: {
            background: "linear-gradient(to right, #740001, #efba30)",
            },
            onClick: function(){}
            
            }).showToast(); 
    // llamo a mi libreria ^
    
  })
}   
}

