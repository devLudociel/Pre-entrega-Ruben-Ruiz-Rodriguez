let galeria = document.getElementById(`gallery`)
let verCarrito = document.getElementById(`cart`)
let contenedorModal = document.getElementById(`contenedor-modal`)
const items = [
    {
        id: 1,
        nombre: "Reloj Curren",
        precio: 34,
        img: "./img/Relojes/Curren-d.png",
    },

    {
        id: 2,
        nombre: "Reloj Curren",
        precio: 34,
        img: "./img/Relojes/Curren-a.png",
    },

    {
        id: 3,
        nombre: "Reloj Curren",
        precio: 34,
        img: "./img/Relojes/Curren-n.png",
    },

    {
        id: 4,
        nombre: "Reloj Curren",
        precio: 34,
        img: "./img/Relojes/Reloj-Marron.png",
    },
];

let carrito = [];

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

    comprar.addEventListener("click", ()=>{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click",()=>{
    const modal = document.createElement("div");
    modal.className = `modal-titulo`
    modal.innerHTML = `
        <h2 class="modal-title">Carrito</h2>
    `
    contenedorModal.append(modal);

    const botonModal = document.createElement("h3");
    botonModal.innerText = "X";
    botonModal.className = "boton-modal";

    modal.append(botonModal);
    carrito.forEach((product)=>{
        let contenidoModal = document.createElement("div");
        contenidoModal.className = "contenidoModal"
        contenidoModal.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio}$</p>
        `;
        contenedorModal.append(contenidoModal)
    });
    
    const total = carrito.reduce((acc,el)=> acc + el.precio, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-compra";
    totalCompra.innerHTML = `
    total a pagar: $${total}
    `
    contenedorModal.append(totalCompra);
});