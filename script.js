// Banner
let bannerIndex = 0;
const bannerImages = [
    'assets/9357d3ea7e6f9cc.jpg',
    'assets/Banner.png',
    'assets/plugin_banners_wordpress.jpg',
];

function nextBannerImage() {
    bannerIndex = (bannerIndex + 1) % bannerImages.length;
    updateBanner();
}

function prevBannerImage() {
    bannerIndex = (bannerIndex - 1 + bannerImages.length) % bannerImages.length;
    updateBanner();
}

function updateBanner() {
    document.getElementById('banner').style.backgroundImage = `url('${bannerImages[bannerIndex]}')`;
    document.getElementById('bannerLink').href = `https://seu-link-${bannerIndex + 1}-aqui`;
}

// Chama a função para atualizar o banner inicial
updateBanner();

// Adicione event listeners para os botões de navegação do banner
document.querySelector('.banner-left-button').addEventListener('click', prevBannerImage);
document.querySelector('.banner-right-button').addEventListener('click', nextBannerImage);

// Mudança automática do banner a cada 5 segundos
setInterval(nextBannerImage, 5000);


// Dados simulados dos cursos mais vendidos (substitua com seus dados reais)
const maisVendidos = [
  {
      imagem: 'assets/curso1.jpg',
      titulo: 'Título do Curso 1',
      descricao: 'Descrição breve do curso 1.',
      preco: '$95.00',
      link: 'https://seu-link-curso1-aqui'
  },
  {
      imagem: 'assets/carreira-e-desenvolvimento-pessoal.jpg',
      titulo: 'Título do Curso 2',
      descricao: 'Descrição breve do curso 2.',
      preco: '$85.00',
      link: 'https://seu-link-curso2-aqui'
  },
  {
    imagem: 'assets/curso-1.png',
    titulo: 'Título do Curso 3',
    descricao: 'Descrição breve do curso 3.',
    preco: '$20.00',
    link: 'https://seu-link-curso3-aqui'
  },
  {
    imagem: 'assets/financas-e-negocios.jpeg',
    titulo: 'Título do Curso 4',
    descricao: 'Descrição breve do curso 4.',
    preco: '$100.00',
    link: 'https://seu-link-curso4-aqui'
  },
  {
    imagem: 'assets/curso1.jpg',
    titulo: 'Título do Curso 5',
    descricao: 'Descrição breve do curso 5.',
    preco: '$80.00',
    link: 'https://seu-link-curso5-aqui'
  },
  // Adicione mais objetos conforme necessário
];

// Função para gerar HTML dos cards e adicionar ao DOM
function adicionarCardsMaisVendidos() {
  const container = document.getElementById('scrollContainer');
  maisVendidos.forEach(curso => {
      // Criando elementos HTML
      const card = document.createElement('div');
      card.classList.add('scroll-item', 'bg-white', 'shadow-md', 'rounded-lg', 'overflow-hidden');
      card.innerHTML = `
          <img src="${curso.imagem}" alt="${curso.titulo}" class="w-full h-48 object-cover object-center">
          <div class="p-4">
              <h3 class="text-gray-900 font-bold text-lg mb-2">${curso.titulo}</h3>
              <p class="text-gray-600 text-sm">${curso.descricao}</p>
              <div class="flex justify-between items-center mt-2">
                  <p class="text-blue-gray-900 font-medium">${curso.preco}</p>
                  <a href="${curso.link}" class="bg-red-500 text-blue-gray-900 hover:bg-blue-gray-900/20 py-2 px-4 rounded-lg font-semibold transition duration-300">
                      Compre Aqui
                  </a>
              </div>
          </div>
      `;
      container.appendChild(card);
  });

  // Após adicionar os cards, definir os listeners de scroll
  const scrollItems = document.querySelectorAll('.scroll-item');
  const scrollContainer = document.getElementById('scrollContainer');
  const leftCarouselButton = document.querySelector('.carousel-left-button');
  const rightCarouselButton = document.querySelector('.carousel-right-button');
  let scrollPosition = 0;

  function scrollLeft() {
      if (scrollPosition > 0) {
          scrollPosition -= 1;
      } else {
          scrollPosition = scrollItems.length - 1;
      }
      scrollContainer.scrollTo({
          left: scrollItems[scrollPosition].offsetLeft,
          behavior: 'smooth'
      });
  }

  function scrollRight() {
      if (scrollPosition < scrollItems.length - 1) {
          scrollPosition += 1;
      } else {
          scrollPosition = 0;
      }
      scrollContainer.scrollTo({
          left: scrollItems[scrollPosition].offsetLeft,
          behavior: 'smooth'
      });
  }

  leftCarouselButton.addEventListener('click', scrollLeft);
  rightCarouselButton.addEventListener('click', scrollRight);
}

// Chama a função para adicionar os cards quando o documento HTML estiver completamente carregado
document.addEventListener('DOMContentLoaded', adicionarCardsMaisVendidos);
