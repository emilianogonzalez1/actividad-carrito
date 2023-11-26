const rutTextInput = document.querySelector('#num-rut');
const rutRadioInput = document.querySelector('#rutRadio');
const carrito = document.querySelector('.tabla');

function verificarRutInput(){
    if(rutRadioInput.checked){
        rutTextInput.classList.remove('d-none')
    }
    else{
        rutTextInput.classList.add('d-none')
    }
}

const boton = document.querySelector('#botonAgregar');

boton.addEventListener('click',()=>{
    const opciones = document.querySelector('#select').value;
    const precioFinal = document.querySelector('.precio-final')
    let numPrecioFinal = parseInt(precioFinal.textContent)
    console.log(numPrecioFinal)

    if(opciones == 'Laptop'){
        numPrecioFinal += 500
        precioFinal.textContent = numPrecioFinal
        carrito.innerHTML +=`
        <tr>
            <th>${opciones}</th>
            <th>USD<span>500</span></th>
        </tr>
        `
    }
    else if(opciones == 'Pc gamer'){
        numPrecioFinal += 749
        precioFinal.textContent = numPrecioFinal
        carrito.innerHTML +=`
        <tr>
            <th>${opciones}</th>
            <th>USD<span>749</span></th>
        </tr>
        `

    }
    else if(opciones == 'Teclado mecanico'){
        numPrecioFinal += 110
        precioFinal.textContent = numPrecioFinal
        carrito.innerHTML +=`
        <tr>
            <th>${opciones}</th>
            <th>USD<span>110</span></th>
        </tr>
        `
    }
    console.log(numPrecioFinal)
})

