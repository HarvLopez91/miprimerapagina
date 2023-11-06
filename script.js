let contenidoTitulo = ""

// FUNCIONES

document.addEventListener("DOMContentLoaded", function () {
    let nombre = "Harvey";
    let ciudad = "Medellin";
    let gusto = "gelatina";

    let parrafo = document.querySelector(".parrafo2");

    function cambiarTexto(nombre, ciudad, gusto) {
        let contenido = `Me llamo ${nombre}, nací en El Colegio Cundinamaca y vivo en ${ciudad}. Me gusta ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;
        return contenido;
    }

    parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);
});


let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

function validarFormulario() {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");
  const nombreError = document.getElementById("nombreError");
  const emailError = document.getElementById("emailError");
  const mensajeError = document.getElementById("mensajeError");

  let valido = true;

  if (nombre.value.length < 4) {
      nombreError.textContent = "El nombre debe contener al menos 4 caracteres";
      valido = false;
  } else {
      nombreError.textContent = "";
  }

  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      emailError.textContent = "Ingresa un correo electrónico válido";
      valido = false;
  } else {
      emailError.textContent = "";
  }

  if (mensaje.value.length < 10) {
      mensajeError.textContent = "El mensaje debe contener al menos 10 caracteres";
      valido = false;
  } else {
      mensajeError.textContent = "";
  }

  return valido;
}
    