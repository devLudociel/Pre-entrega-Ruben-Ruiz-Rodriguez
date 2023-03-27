const contenedor = document.querySelector('#contenedor');
const btnRedes = document.querySelector('.fa-brands');
const cart = document.querySelector('#cart');
const tarjeta = document.querySelector('.tarjeta');

document.querySelector('#boton-menu').addEventListener('click', () =>{
    contenedor.classList.toggle('active');
})

document.querySelector('.fa-brands').addEventListener('click', ()=>{
    btnRedes.classList(alert("Esta siendo Redirigido a nuestras Redes !NO olvides Seguirnos!"))
});

document.querySelector('#cart').addEventListener('click', ()=>{
    cart.classList(alert("Su Carrito de Compras esta esperando por el Pago!!!"))
});

document.querySelector('.tarjeta').addEventListener('click', ()=>{
        let aviso = prompt('Cuantas unidades desea añadir al carrito?')
        console.log(aviso)
        alert("Se ha añadido con Exito!!")
});



const comprobarancho = () =>{
    if(window.innerWidth<=768){
        contenedor.classList.remove('active')
    }
    else{
        contenedor.classList.add('active')
    }
}

comprobarancho();


window.addEventListener('resize', ()=>{
    comprobarancho();
})