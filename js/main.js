const contenedor = document.querySelector("#contenedor");
const btnRedes = document.getElementById('iconos');
const cart = document.querySelector("#cart");
const tarjeta = document.getElementById('gallery');

document.querySelector("#boton-menu").addEventListener("click", () => {
    contenedor.classList.toggle("active");
});

btnRedes.addEventListener("click", () => {
    btnRedes.classList(
        alert("Esta siendo Redirigido !NO olvides Seguirnos en nuestras Redes!")
    );
});

document.querySelector("#cart").addEventListener("click", () => {
    cart.classList(confirm("Su Carrito de Compras esta esperando por el Pago!!! ¿Desea Continuar?"));
});


tarjeta.addEventListener('click', ()=>{
    let cantidad = prompt("¿Cuantas unidades desea añadir al carrito?");
    if (cantidad >= 1) {
        alert("Se ha añadido con Exito!!");
    } else {
        alert("Debe añadir 1 articulo para continuar");
    }
});

const comprobarancho = () => {
    if (window.innerWidth <= 768) {
        contenedor.classList.remove("active");
    } else {
        contenedor.classList.add("active");
    }
};

comprobarancho();

window.addEventListener("resize", () => {
    comprobarancho();
});
