// navbar icono

let menuIcon = document.getElementById('menu-ico')
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-run')
  navbar.classList.toggle('active')
}
//secciones scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// header fondo despues de scroll 100 asigna la clase sticky
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offSet = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offSet && top < offSet + height) {
      //activar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
   // remover la clase active en icon y navbar linsk scroll
  menuIcon.classList.remove('bx-run');
  navbar.classList.remove('active');
};



// envio formulario
const form = document.querySelector("form");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const celular = document.getElementById("numero");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

function sendEmail() {
  console.log("enviando");
  const cuerpoMensaje = `nombre: ${nombre.value}<br> correo: ${correo.value}<br> celular: ${celular.value}<br> asunto: ${asunto.value} <br> mensaje: ${this.mensaje.value}`;
  Email.send({
    SecureToken : '3483a64b-7d23-4adb-9e2b-e92742804881',
    To: "lagrima365@gmail.com",
    From: "lagrima365@gmail.com",
    Subject: asunto.value,
    Body: cuerpoMensaje,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "¡Gracias por tu mensaje!",
        text: "Nos pondremos en contacto contigo lo antes posible.!",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Lo sentimos, ha ocurrido un error al enviar el formulario. Por favor, verifica los campos marcados en rojo e intenta nuevamente.!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } 
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail(); 
  form.reset();
});

