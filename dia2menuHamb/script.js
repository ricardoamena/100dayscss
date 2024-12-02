const menu = document.querySelector(".menu");

const lineTop = document.querySelector(".line1");
const lineCentro = document.querySelector(".line2");
const lineButtom = document.querySelector(".line3");

menu.addEventListener("click", () => {
  lineTop.classList.toggle("top");
  lineCentro.classList.toggle("centro");
  lineButtom.classList.toggle("buttom");
});
