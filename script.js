const links = document.querySelectorAll('nav a');
const slides = document.querySelectorAll('.slide');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSlide = document.querySelector(targetId);

    // Calcula a posição vertical do slide de destino
    const targetPosition = targetSlide.offsetTop;

    // Rola a página suavemente até a posição vertical do slide
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});