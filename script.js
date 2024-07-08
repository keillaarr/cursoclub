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
  {
    imagem: 'assets/curso1.jpg',
    titulo: 'Título do Curso 5',
    descricao: 'Descrição breve do curso 5.',
    preco: '$80.00',
    link: 'https://seu-link-curso5-aqui'
  },
  {
    imagem: 'assets/curso1.jpg',
    titulo: 'Título do Curso 5',
    descricao: 'Descrição breve do curso 5.',
    preco: '$80.00',
    link: 'https://seu-link-curso5-aqui'
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
      card.classList.add('card', 'bg-base-100', 'shadow-xl', 'mx-2');
      card.style.width = '18rem'; // Define a largura fixa do card

      card.innerHTML = `
          <figure class="px-6 pt-6">
              <img src="${curso.imagem}" alt="${curso.titulo}" class="rounded-xl h-40 w-full object-cover">
          </figure>
          <div class="card-body items-center text-center p-3">
              <div class="flex justify-between w-full">
                  <h2 class="card-title text-lg font-bold">${curso.titulo}</h2>
                  <p class="text-blue-gray-900 font-medium">${curso.preco}</p>
              </div>
              <div><p class="text-blue-gray-900 font-medium">${curso.descricao} </div>
              <div class="card-actions mt-2 w-full flex justify-center">
                    <a href="${curso.link}" target="_blank" class="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-lg font-semibold transition duration-300">
                      Compre Aqui
                  </a>
              </div>
          </div>
      `;
      container.appendChild(card);
  });

  // Após adicionar os cards, definir os listeners de scroll
  const scrollContainer = document.getElementById('scrollContainer');
  const leftCarouselButton = document.querySelector('.carousel-left-button');
  const rightCarouselButton = document.querySelector('.carousel-right-button');
  let scrollPosition = 0;

  function scrollLeft() {
      scrollContainer.scrollBy({
          left: -200,
          behavior: 'smooth'
      });
  }

  function scrollRight() {
      scrollContainer.scrollBy({
          left: 200,
          behavior: 'smooth'
      });
  }

  leftCarouselButton.addEventListener('click', scrollLeft);
  rightCarouselButton.addEventListener('click', scrollRight);
}

// Chama a função para adicionar os cards quando o documento HTML estiver completamente carregado
document.addEventListener('DOMContentLoaded', adicionarCardsMaisVendidos);
// Dados simulados dos cursos com desconto (substitua com seus dados reais)
const cursosComDesconto = [
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
{
  imagem: 'assets/curso1.jpg',
  titulo: 'Título do Curso 5',
  descricao: 'Descrição breve do curso 5.',
  preco: '$80.00',
  link: 'https://seu-link-curso5-aqui'
},
{
  imagem: 'assets/curso1.jpg',
  titulo: 'Título do Curso 5',
  descricao: 'Descrição breve do curso 5.',
  preco: '$80.00',
  link: 'https://seu-link-curso5-aqui'
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
function adicionarCardsCursosComDesconto() {
  const container = document.getElementById('scrollContainer3');
  cursosComDesconto.forEach(curso => {
      // Criando elementos HTML
      const card = document.createElement('div');
      card.classList.add('card', 'bg-base-100', 'shadow-xl', 'mx-2');
      card.innerHTML = `
          <figure class="px-6 pt-6">
              <img src="${curso.imagem}" alt="${curso.titulo}" class="rounded-xl h-40 w-full object-cover">
          </figure>
          <div class="card-body items-center text-center p-3">
              <div class="flex justify-between w-full">
                  <h2 class="card-title text-lg font-bold">${curso.titulo}</h2>
                  <p class="text-blue-gray-900 font-medium">${curso.preco}</p>
              </div>
              <div><p class="text-blue-gray-900 font-medium">${curso.descricao}</p></div>
              <div class="card-actions mt-2 w-full flex justify-center">
                  <a href="${curso.link}" target="_blank" class="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-lg font-semibold transition duration-300">
                      Compre Aqui
                  </a>
              </div>
          </div>
      `;
      container.appendChild(card);
  });

  // Após adicionar os cards, definir os listeners de scroll
  const scrollItems = document.querySelectorAll('.card');
  const scrollContainer = document.getElementById('scrollContainer3');
  const leftCarouselButton = document.querySelector('.carousel-left-button3');
  const rightCarouselButton = document.querySelector('.carousel-right-button3');
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

// Chama a função para adicionar os cards de cursos com desconto quando o documento HTML estiver completamente carregado
document.addEventListener('DOMContentLoaded', adicionarCardsCursosComDesconto);

const novosCursos = [
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
{
  imagem: 'assets/curso1.jpg',
  titulo: 'Título do Curso 5',
  descricao: 'Descrição breve do curso 5.',
  preco: '$80.00',
  link: 'https://seu-link-curso5-aqui'
},
{
  imagem: 'assets/curso1.jpg',
  titulo: 'Título do Curso 5',
  descricao: 'Descrição breve do curso 5.',
  preco: '$80.00',
  link: 'https://seu-link-curso5-aqui'
},
{
  imagem: 'assets/curso1.jpg',
  titulo: 'Título do Curso 5',
  descricao: 'Descrição breve do curso 5.',
  preco: '$80.00',
  link: 'https://seu-link-curso5-aqui'
}

];

// Função para gerar HTML dos cards e adicionar ao DOM
function adicionarCardsNovosCursos() {
  const container = document.getElementById('scrollContainer4');
  novosCursos.forEach(curso => {
      // Criando elementos HTML
      const card = document.createElement('div');
      card.classList.add('card', 'bg-base-100', 'shadow-xl', 'mx-2');
      card.innerHTML = `
          <figure class="px-6 pt-6">
              <img src="${curso.imagem}" alt="${curso.titulo}" class="rounded-xl h-40 w-full object-cover">
          </figure>
          <div class="card-body items-center text-center p-3">
              <div class="flex justify-between w-full">
                  <h2 class="card-title text-lg font-bold">${curso.titulo}</h2>
                  <p class="text-blue-gray-900 font-medium">${curso.preco}</p>
              </div>
              <div><p class="text-blue-gray-900 font-medium">${curso.descricao}</p></div>
              <div class="card-actions mt-2 w-full flex justify-center">
                  <a href="${curso.link}" target="_blank" class="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-lg font-semibold transition duration-300">
                      Compre Aqui
                  </a>
              </div>
          </div>
      `;
      container.appendChild(card);
  });

  // Após adicionar os cards, definir os listeners de scroll
  const scrollItems = document.querySelectorAll('.card');
  const scrollContainer = document.getElementById('scrollContainer4');
  const leftCarouselButton = document.querySelector('.carousel-left-button4');
  const rightCarouselButton = document.querySelector('.carousel-right-button4');
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

// Chama a função para adicionar os cards de novos cursos quando o documento HTML estiver completamente carregado
document.addEventListener('DOMContentLoaded', adicionarCardsNovosCursos);


// Dados simulados de exemplo (substitua com seus dados reais)
const exemplos = [
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
{
  imagem: 'assets/curso1.jpg',
  titulo: 'Título do Curso 5',
  descricao: 'Descrição breve do curso 5.',
  preco: '$80.00',
  link: 'https://seu-link-curso5-aqui'
},
{
  imagem: 'assets/curso1.jpg',
  titulo: 'Título do Curso 5',
  descricao: 'Descrição breve do curso 5.',
  preco: '$80.00',
  link: 'https://seu-link-curso5-aqui'
},
{
  imagem: 'assets/curso1.jpg',
  titulo: 'Título do Curso 5',
  descricao: 'Descrição breve do curso 5.',
  preco: '$80.00',
  link: 'https://seu-link-curso5-aqui'
}
  // Adicione mais objetos conforme necessário
];

// Função para gerar HTML dos cards e adicionar ao DOM
function adicionarCardsExemplos() {
  const container = document.getElementById('scrollContainer5');
  exemplos.forEach(exemplo => {
      // Criando elementos HTML
      const card = document.createElement('div');
      card.classList.add('card', 'bg-base-100', 'shadow-xl', 'mx-2');
      card.innerHTML = `
          <figure class="px-6 pt-6">
              <img src="${exemplo.imagem}" alt="${exemplo.titulo}" class="rounded-xl h-40 w-full object-cover">
          </figure>
          <div class="card-body items-center text-center p-3">
              <div class="flex justify-between w-full">
                  <h2 class="card-title text-lg font-bold">${exemplo.titulo}</h2>
                  <p class="text-blue-gray-900 font-medium">${exemplo.preco}</p>
              </div>
              <div><p class="text-blue-gray-900 font-medium">${exemplo.descricao}</p></div>
              <div class="card-actions mt-2 w-full flex justify-center">
                  <a href="${exemplo.link}" target="_blank" class="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-lg font-semibold transition duration-300">
                      Compre Aqui
                  </a>
              </div>
          </div>
      `;
      container.appendChild(card);
  });

  // Após adicionar os cards, definir os listeners de scroll
  const scrollItems = document.querySelectorAll('.card');
  const scrollContainer = document.getElementById('scrollContainer5');
  const leftCarouselButton = document.querySelector('.carousel-left-button5');
  const rightCarouselButton = document.querySelector('.carousel-right-button5');
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

// Chama a função para adicionar os cards de exemplos quando o documento HTML estiver completamente carregado
document.addEventListener('DOMContentLoaded', adicionarCardsExemplos);