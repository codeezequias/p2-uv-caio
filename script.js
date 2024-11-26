const toggleButton = document.getElementById("toggle-theme");
const body = document.body;
const navbarLinks = document.querySelectorAll(".navbar ul li a");
const retangulos = document.querySelectorAll(".retangulo, .retangulo2, .retangulo3");

// Função para alternar o tema
toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    navbarLinks.forEach(link => link.classList.toggle("light-mode"));
    retangulos.forEach(retangulo => retangulo.classList.toggle("light-mode"));
    toggleButton.classList.toggle("light-mode");
});
