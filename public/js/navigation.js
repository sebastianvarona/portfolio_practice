let links = document.getElementsByClassName('enlaceMenu');
links = Array.from(links);

// Secciones
const acerca = document.getElementById('acerca');
const servicios = document.getElementById('servicios');
const tecnologias = document.getElementById('tecnologias');
const proceso = document.getElementById('proceso');
const contacto = document.querySelector('.revealL');

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
for (const s of reveal) {
    s.style.opacity = "0";
}
acerca.style.opacity = "0";
contacto.style.opacity = "0";
console.log(acerca.offsetTop)
window.addEventListener('scroll', (e) => {
    let scroll = window.scrollY;
    console.log(scroll)
    reveal.forEach(seccion => {
        if(seccion.offsetTop < scroll + 500){
            seccion.classList.add('animate__animated', 'animate__fadeIn');
        }
    });
    if(acerca.offsetTop < scroll+100){ 
        acerca.classList.add('animate__animated', 'animate__fadeIn');
    }if(contacto.offsetTop < scroll+500){
        contacto.classList.add('animate__animated', 'animate__fadeInRight');
    }
})