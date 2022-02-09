const circle1 = document.getElementById("circulo1");
const circle2 = document.getElementById("circulo2");

let c1Top = -25;
let c2Bottom = -25;

window.addEventListener("scroll", (e) => {
    let scroll = window.scrollY;
    let c1Pos = c1Top + scroll*0.01;
    circle1.style.top = `${c1Pos}%`;
    let c2Pos = c2Bottom + scroll*0.025;
    circle2.style.bottom = `${c2Pos}%`;
})