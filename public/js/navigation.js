const linkBrand = document.querySelector('.navbar-brand');
let links = document.getElementsByClassName('enlaceMenu');
links = Array.from(links);
const linkContacto = document.querySelector('.linkContacto');
const footerLink = document.querySelector('.footerLink');

// Secciones
const acerca = document.getElementById('acerca');
const servicios = document.getElementById('servicios');
const tecnologias = document.getElementById('tecnologias');
const proceso = document.getElementById('proceso');
const contacto = document.getElementById('contacto');
const formulario = document.querySelector('.revealL');

const secciones = [acerca,servicios,tecnologias,proceso];
const reveal = secciones;
reveal.shift();

for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const seccion = secciones[i];
    link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scroll({top: seccion.offsetTop, behavior:'smooth'});
    })
}
linkBrand.addEventListener("click", (e) => {
    e.preventDefault();
})
linkContacto.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({top: contacto.offsetTop, behavior: 'smooth'})
})
footerLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({top: 0, behavior: 'smooth'})
})
for (const s of reveal) {
    s.style.opacity = "0";
}
acerca.style.opacity = "0";
formulario.style.opacity = "0";
window.addEventListener('scroll', (e) => {
    let scroll = window.scrollY;
    reveal.forEach(seccion => {
        if(seccion.offsetTop < scroll + 500){
            seccion.classList.add('animate__animated', 'animate__fadeIn');
        }
    });
    if(acerca.offsetTop < scroll+100){ 
        acerca.classList.add('animate__animated', 'animate__fadeIn');
    }if(contacto.offsetTop < scroll+500){
        formulario.classList.add('animate__animated', 'animate__fadeInRight');
    }
})