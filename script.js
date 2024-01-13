// script.js

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');

    hamburgerMenu.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});


const slides = document.querySelector('.slides');
const radios = document.querySelectorAll('input[type="radio"]');
let currentSlide = 0;

function showSlide(index) {
  const offset = index * -100 + '%';
  slides.style.transform = 'translateX(' + offset + ')';
}

function handleRadioChange(event) {
  const index = Array.from(radios).indexOf(event.target);
  currentSlide = index;
  showSlide(index);
}

function autoPlay() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % radios.length;
    radios[currentSlide].checked = true;
    showSlide(currentSlide);
  }, 5000); // Troque 5000 para o intervalo desejado em milissegundos
}

function makeImagesResponsive() {
  const slidesContainer = document.querySelector('.slider');
  const slidesWidth = slidesContainer.offsetWidth;

  const slidesList = document.querySelectorAll('.slide');
  slidesList.forEach(slide => {
    // C
    slide.style.width = slidesWidth * 0.8 + 'px'; //ajustar os slides para 80% do tamanho do containner

    // Ajusta o tamanho das imagens dentro dos slides
    const image = slide.querySelector('img'); 
    image.style.width = '100%';
    image.style.height = 'auto';
    image.style.maxWidth = '100%';
  });
}

window.addEventListener('resize', makeImagesResponsive);
radios.forEach(radio => radio.addEventListener('change', handleRadioChange));

// Iniciar a reprodução automática
autoPlay();

// Garantir que os slides sejam responsivos na carga da página
makeImagesResponsive();




let currentPage = 1;

function changePage(direction) {
  if (direction === 'prev' && currentPage > 1) {
    currentPage--;
  } else if (direction === 'next' && currentPage < 3) {
    currentPage++;
  } else if (typeof direction === 'number' && direction >= 1 && direction <= 3) {
    currentPage = direction;
  }

  // Atualiza a visualização ou executa outras ações conforme a página atual (currentPage)
  updatePageView();
}

function updatePageView() {
  // Adicione aqui a lógica para atualizar a visualização com base na página atual (currentPage)
  console.log('Página atual:', currentPage);
}







