const contenedor = document.querySelector("#contenedor");
const btnRedes = document.getElementById('iconos');
const cart = document.getElementById('cart');
const tarjeta = document.getElementById('gallery');
// const premioBtn = document.getElementById('premioBtn')


document.querySelector("#boton-menu").addEventListener("click", () => {
    contenedor.classList.toggle("active");
});

btnRedes.addEventListener("click", () => {
    btnRedes.classList(
        alert("Esta siendo Redirigido !NO olvides Seguirnos en nuestras Redes!")
    );
});


cart.addEventListener("click", () => {
if (confirm("Su Carrito de Compras esta esperando por el Pago!!! ¿Desea Continuar?")){
    
}else {
    alert("Esperamos volver a verte pronto para completar el Pago")
}
});

cart.addEventListener("click",datoC)
function datoC (){
    let nombreUsuario = prompt("Introduce tu nombre: ");
        alert ("Bienvenido" + " " + nombreUsuario);
        if(confirm("¿Desea Realizar el Pago?")){
            alert("Compra Realizada con Exito!!")
        }else {
            alert("Esperamos volver a verte pronto para completar la Compra")
        }
}


tarjeta.addEventListener('click', ()=>{
    let cantidad = Number(prompt("¿Cuantas unidades desea añadir al carrito?"));
    if (cantidad >=1){
        alert(`Se ha añadido con Exito la cantidad correcta de este producto!!`);
    } else {
        alert("Debe añadir 1 articulo para continuar");
    }
});

document.getElementById('premioBtn').onclick = function(){
    let usuarioNum = document.getElementById('premioInput').value
    let numerosEscritos = 0;
    let correcto = 7
    let detener = false
    while(numerosEscritos<=usuarioNum && detener == false){
        if(usuarioNum == correcto){
            document.getElementById('resultado').innerHTML = "GANASTE un 25% de Descuento en la Tienda"
            detener = true
        }else{
            document.getElementById('resultado').innerHTML ="Obtienes un 10% de descuento," + " " + "si aciertas el Numero correcto ganaras más";
            numerosEscritos++
        }
    }
};


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
