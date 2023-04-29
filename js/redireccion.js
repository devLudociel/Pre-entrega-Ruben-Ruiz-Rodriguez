const form = document.getElementById(`form`);
const agradecer = document.getElementById(`botonPagoFinal`)

form.addEventListener("submit", datosForm)

function datosForm(e){
    e.preventDefault();
    let name = document.getElementById(`name`).value;
    let email = document.getElementById(`email`).value;
    let direccion = document.getElementById(`direccion`).value;
    let ciudad = document.getElementById(`ciudad`).value;
    let estado = document.getElementById(`estado`).value;
    let zip = document.getElementById( `zip`).value;
    let card = document.getElementById(`card`).value;
    let nameC = document.getElementById(`nameC`).value;
    let mes = document.getElementById(`mes`).value;
    let year = document.getElementById(`year`).value;
    let cvv = document.getElementById(`cvv`).value;
    console.log(name,email,direccion,ciudad,estado,zip,nameC,mes,year,cvv);
};

const agradecerP = ()=>{
    location.href = `./agradecimientos.html`
    volver();
};
