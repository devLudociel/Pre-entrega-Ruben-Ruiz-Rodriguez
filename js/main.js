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


////////////         Programacion para el Juego        ////////////

let preguntas = ["a.png","imgA.png","imgB.png","imgC.png","imgD.png","imgE.png", "imgF.png"];

let guardarOp = [0,0,2,1,1,0,1];

let opciones =[];

opciones.push(["UN LENGUAJE", "UN PROGRAMA", "CAPTURADOR DE DATOS"]);
opciones.push(["PRIMITIVOS", "FACILES", "SIMPLES"]);
opciones.push(["_PARENT", "_SELF", "_BLANK"]);
opciones.push(["DISPLAY:HIDDEN", "DISPLAY:NONE", "DISPLAY:CONTENT"]);
opciones.push(["INSECT", "BUG", "BICHO"]);
opciones.push(["*(ASTERISCO)", "#(NUMERAL)", "%(PORCENTAJE)"]);
opciones.push(["VARIABLE", "CICLO", "FUNCION"]);


let posActual = 0;
let cantidadAcertada = 0;

function comenzarJuego(){
    posActual=0;
    cantidadAcertada=0;
    document.getElementById('pantalla-inicial').style.display = "none";
    document.getElementById('pantalla-juego').style.display = "block";
    cargarPreguntas();
}

function cargarPreguntas(){
    if(preguntas.length<=posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgCosa").src = "img/"+ preguntas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];


    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre"
    document.getElementById("n1").className = "nombre"
    document.getElementById("n2").className = "nombre"
    document.getElementById("l0").className = "letra"
    document.getElementById("l1").className = "letra"
    document.getElementById("l2").className = "letra"
}


function comprobarRespuesta(opElegida){
    if(opElegida == guardarOp[posActual]){
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
    }
    else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + guardarOp[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + guardarOp[posActual]).className = "letra letraAcertada";
    }
    posActual++;

    setTimeout(cargarPreguntas,1000);
}

function terminarJuego(){
    document.getElementById("pantalla-juego").style.display= "none";  
    document.getElementById("pantalla-final").style.display= "block";

    document.getElementById("numCorrectas").innerHTML = cantidadAcertada;
    document.getElementById("numIncorrectas").innerHTML = preguntas.length - cantidadAcertada;
}

function volverAlInicio(){
    document.getElementById("pantalla-final").style.display= "none";  
    document.getElementById("pantalla-inicial").style.display= "block";
    document.getElementById("pantalla-juego").style.display= "none";

}