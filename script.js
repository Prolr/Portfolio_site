const menu = document.querySelector(".navegacao");
const botao = document.querySelector("#menu-toggle");
const overlay = document.querySelector(".overlay");

botao.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
  botao.classList.toggle("active"); 

  if (menu.classList.contains("active")) {
    botao.innerHTML = "✕";
  } else {
    botao.innerHTML = "☰";
  }
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
  botao.classList.remove("active"); 
  botao.innerHTML = "☰";
});

document.querySelectorAll(".navegacao a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    botao.classList.remove("active");
    botao.innerHTML = "☰";
  });
});
