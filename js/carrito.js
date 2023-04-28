const galeria = document.getElementById(`gallery`)
const verCarrito = document.getElementById(`cart`)
const contenedorModal = document.getElementById(`contenedor-modal`)
const cantidadCarrito = document.getElementById(`cantidadCarrito`)
const buscador = document.getElementById(`buscador`)
const botonBuscar = document.getElementById(`botonBuscar`)
// array de productos
const items = [
    {
        id: 1,
        nombre: "Reloj Curren",
        precio: 34,
        img: "./img/Relojes/Curren-d.png",
        cantidad: 1,
    },

    {
        id: 2,
        nombre: "Reloj Curren",
        precio: 34,
        img: "./img/Relojes/Curren-a.png",
        cantidad: 1,
    },

    {
        id: 3,
        nombre: "Reloj Curren",
        precio: 34,
        img: "./img/Relojes/Curren-n.png",
        cantidad: 1,
    },

    {
        id: 4,
        nombre: "Reloj Curren",
        precio: 34,
        img: "./img/Relojes/Reloj-Marron.png",
        cantidad: 1,
    },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// crear productos
items.forEach((product)=>{
    let contenido = document.createElement("div");
    contenido.classList.add(`tarjeta`)
    contenido.innerHTML = `
        <img src="${product.img}" alt="${product.nombre}">
        <h3>${product.nombre}</h3>
        <p>esta es una decripcion corta</p>
        <h6>$${product.precio}</h6>
        <ul>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-regular fa-star"></i></li>
        </ul>
        
    `
    galeria.append(contenido);

    let comprar = document.createElement("button");
    comprar.innerHTML = "Comprar Ahora";
    comprar.classList.add("buy")

    contenido.appendChild(comprar);

    // push del carrito
    comprar.addEventListener("click", ()=>{   
    let repetido = carrito.some((productoRepetido)=> productoRepetido.id === product.id);
    if(repetido){
        carrito.map((prod)=>{
            if(prod.id === product.id){
                prod.cantidad++
            }
        });
    }else{    
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
    }    
        console.log(carrito);
        console.log(carrito.length);
        guardarInfo();
        mostrarCantidades();
    });
});

// Funcion para mostrar Carrito
const mostrarCarrito = ()=>{
    contenedorModal.innerHTML="";
    contenedorModal.style.display = "block"
    const modal = document.createElement("div");
    modal.className = `modal-titulo`
    modal.innerHTML = `
        <h2 class="modal-title">Carrito</h2>
    `
    contenedorModal.append(modal);

    const botonModal = document.createElement("h3");
    botonModal.innerText = "X";
    botonModal.className = "boton-modal";

    botonModal.addEventListener("click", ()=>{
        contenedorModal.style.display="none";
    })

    modal.append(botonModal);
    carrito.forEach((product)=>{
        let contenidoModal = document.createElement("div");
        contenidoModal.className = "contenidoModal"
        contenidoModal.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio}$</p>
            <span class="restar"> - </span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class="sumar"> + </span>
            <span>Total: ${product.cantidad * product.precio}</span>
        `;
        contenedorModal.append(contenidoModal)

        let restar = contenidoModal.querySelector(".restar");
        restar.addEventListener("click",()=>{
            if(product.cantidad !== 1){
            product.cantidad--;
            };
            guardarInfo();
            mostrarCarrito();
        });

        let sumar = contenidoModal.querySelector(".sumar");
        sumar.addEventListener("click", ()=>{
            product.cantidad++;
            guardarInfo();
            mostrarCarrito();
        });


        let eliminarProducto = document.createElement("span");
        eliminarProducto.innerText = "X";
        eliminarProducto.className = "borrar-producto"
        contenidoModal.append(eliminarProducto);

        eliminarProducto.addEventListener("click", eliminarProductoCarrito)
    });

    const total = carrito.reduce((acc,el)=> acc + el.precio *el.cantidad, 0);
    const totalCompra = document.createElement("div");
    totalCompra.className = "total-compra";
    totalCompra.innerHTML = `
    total a pagar: $${total}
    `
    contenedorModal.append(totalCompra);
};

// evento para mostrar productos en el carrito
verCarrito.addEventListener("click", mostrarCarrito);

// funcion para borrar producto del carrito

const eliminarProductoCarrito = () =>{
    const encontrarId = carrito.find((element) => element.id);
    carrito = carrito.filter((carritoId) =>{
        return carritoId !== encontrarId;
    });
    mostrarCantidades();
    guardarInfo();
    mostrarCarrito();
};

// funcion mostrarCantidades en el span + localStorage
const mostrarCantidades = ()=>{
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}
mostrarCantidades();


// localStorage
const guardarInfo = ()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


// Creando filtro de busqueda

// const filtrar = ()=>{
//     galeria.innerHTML = ``;
//     const valorDeBusqueda = buscador.value.toLowerCase();
//     for(let valor of items){
//         let nombre = valor.nombre.toLowervalor();
//         if(nombre.indexOf(valorDeBusqueda) !== -1){
//             galeria.innerHTML += 
//         };
//     };
// };

// botonBuscar.addEventListener("click", filtrar)
