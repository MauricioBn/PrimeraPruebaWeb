const hora = new Date().getHours(); // Para obtener la hora actual de 0 - 23 

if (0 <= hora <= 5) {
    document.title = "Trasnochando! - Carbajal Services";    
} else if (5 < hora <= 12) {
    document.title = "¡Buenos dias! - Carbajal Services";
} else if (12 < hora <= 17) {
    document.title = "¡Buenas tardes! - Carbajal Services";
} else {
    document.title = "¡Buenas noches! - Carbajal Services";
}


let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/tarjeta-partefrontal.png") {
    miImage.setAttribute("src", "images/tarjeta-parteposterior.png");
  } else {
    miImage.setAttribute("src", "images/tarjeta-partefrontal.png");
  }
};

let Boton =document.querySelector("button")
let TituloPag = document.querySelector("#saludo")

function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem("nombre", miNombre)
    TituloPag.innerHTML = "Bienvenido " + miNombre;
  }
}

if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  TituloPag.textContent = "Bienvenido, " + nombreAlmacenado;
}

Boton.onclick = function () {
  estableceNombreUsuario();
};

