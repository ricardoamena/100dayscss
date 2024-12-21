const buscar = document.getElementById("search-icon");
const menu = document.getElementById("menu-icon");

let buscador = document.getElementById("search");
let note = document.getElementById("note");
let listas = document.getElementById("lista");

buscar.addEventListener("click", () => {
  buscador.classList.toggle("input");
});

menu.addEventListener("click", () => {
  note.classList.toggle("active");
  listas.classList.toggle("activo");
});
