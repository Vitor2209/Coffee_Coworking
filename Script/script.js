// Seleciona os elementos
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

// Evento de clique no botão
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navbar.classList.toggle('active');
});
