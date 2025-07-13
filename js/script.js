// ===== Dados simulados dos cursos =====
const cursosMaisVendidos = [
  { title: 'Curso de Marketing Digital', image: 'assets/curso-marketing-digital.webp', price: 'R$ 49,90', link: '#' },
  { title: 'Programação', image: 'assets/prog.png', price: 'R$ 29,90', link: '#' },
  { title: 'Aprovado em Concursos', image: 'assets/curso1.jpg', price: 'R$ 39,90', link: '#' },
  { title: 'Design Gráfico para Iniciantes', image: 'assets/desinggrafico.webp', price: 'R$ 44,90', link: '#' },
  { title: 'Fotografia Digital', image: 'assets/fotografia.jpg', price: 'R$ 34,90', link: '#' },
  { title: 'Excel Avançado', image: 'assets/excel.jpg', price: 'R$ 29,90', link: '#' },
  { title: 'Finanças Pessoais', image: 'assets/financas.jpg', price: 'R$ 39,90', link: '#' },
  { title: 'Redação para ENEM', image: 'assets/redacao.jpg', price: 'R$ 27,90', link: '#' },
  { title: 'Inglês', image: 'assets/ingles.png', price: 'R$ 49,90', link: '#' },
  { title: 'Programação Web Completa', image: 'assets/programacao.jpg', price: 'R$ 59,90', link: '#' },
  { title: 'Marketing para Redes Sociais', image: 'assets/mkt.jpg', price: 'R$ 39,90', link: '#' },
  { title: 'Liderança e Gestão de Equipes', image: 'assets/lideranca.jpg', price: 'R$ 44,90', link: '#' },
  { title: 'Introdução à Inteligência Artificial', image: 'assets/ia.jpg', price: 'R$ 69,90', link: '#' },
  { title: 'Yoga para Iniciantes', image: 'assets/yoga.jpg', price: 'R$ 24,90', link: '#' },
  { title: 'Técnicas de Vendas', image: 'assets/vendas.jpg', price: 'R$ 34,90', link: '#' },
  { title: 'Culinária Vegetariana', image: 'assets/culinaria-vegetariana.jpg', price: 'R$ 29,90', link: '#' },
  { title: 'Desenvolvimento Mobile', image: 'assets/mobile.jpg', price: 'R$ 59,90', link: '#' },
  { title: 'Preparatório para ENEM', image: 'assets/enem.jpg', price: 'R$ 49,90', link: '#' },
];

const cursosComDesconto = [
  { title: 'Empreendedorismo 360°', image: 'assets/curso1.jpg', price: 'R$ 19,90', link: '#' },
  { title: 'Maquiagem Profissional', image: 'assets/images.jpg', price: 'R$ 24,90', link: '#' },
  { title: 'Curso de Fotografia Básica', image: 'assets/fotografia.jpg', price: 'R$ 22,90', link: '#' },
  { title: 'Introdução à Programação', image: 'assets/prog.png', price: 'R$ 17,90', link: '#' },
  { title: 'Curso Básico de Excel', image: 'assets/excel.jpg', price: 'R$ 19,90', link: '#' },
  { title: 'Marketing Digital para Iniciantes', image: 'assets/curso-marketing-digital.webp', price: 'R$ 21,90', link: '#' },
  { title: 'Inglês para Viagens', image: 'assets/ingles.png', price: 'R$ 23,90', link: '#' },
];

const novosCursos = [
  { title: 'Nutrição e Esporte', image: 'assets/nutrieesporte.png', price: 'R$ 44,90', link: '#' },
  { title: 'Gastronomia Criativa', image: 'assets/gastronomia.webp', price: 'R$ 34,90', link: '#' },
  { title: 'Blockchain e Criptomoedas', image: 'assets/blockchain.jpg', price: 'R$ 59,90', link: '#' },
  { title: 'Técnicas de Meditação', image: 'assets/meditacao.jpg', price: 'R$ 29,90', link: '#' },
  { title: 'Redes Sociais para Negócios', image: 'assets/marketing-social.jpg', price: 'R$ 39,90', link: '#' },
  { title: 'Edição de Vídeo com Premiere', image: 'assets/edicao-video.jpg', price: 'R$ 54,90', link: '#' },
  { title: 'Desenvolvimento Front-End', image: 'assets/frontend.jpg', price: 'R$ 59,90', link: '#' },
];


// Cria o card do curso com animação fade-in
function createCourseCard(curso) {
  const card = document.createElement('div');
  card.className = 'course-card bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-red-400 transition relative fade-in';
  card.style.minWidth = '240px';

  card.innerHTML = `
    <a href="${curso.link}" target="_blank" rel="noopener noreferrer" class="block overflow-hidden rounded-t-lg">
      <img src="${curso.image}" alt="${curso.title}" loading="lazy" class="w-full h-40 object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
    </a>
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">${curso.title}</h3>
      <p class="text-red-500 font-bold">${curso.price}</p>
    </div>
  `;

  return card;
}

// Renderiza os cards no container especificado
function renderCards(containerId, cursos) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // limpa antes de renderizar
  cursos.forEach(curso => {
    const card = createCourseCard(curso);
    container.appendChild(card);
  });
}

// Controla o scroll do carrossel
function setupCarouselButtons() {
  const leftButtons = document.querySelectorAll('.carousel-left');
  const rightButtons = document.querySelectorAll('.carousel-right');

  leftButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const container = document.getElementById(targetId);
      container.scrollBy({ left: -300, behavior: 'smooth' });
    });
  });

  rightButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const container = document.getElementById(targetId);
      container.scrollBy({ left: 300, behavior: 'smooth' });
    });
  });
}

// Banner rotativo
const banners = [
  { image: 'assets/banner1.jpg', link: '#' },
  { image: 'assets/banner2.jpg', link: '#' },
  { image: 'assets/banner3.jpg', link: '#' },
];

let bannerIndex = 0;
const bannerEl = document.getElementById('banner');
const bannerLinkEl = document.getElementById('bannerLink');
const prevBannerBtn = document.getElementById('prevBanner');
const nextBannerBtn = document.getElementById('nextBanner');

function showBanner(index) {
  bannerEl.style.backgroundImage = `url('${banners[index].image}')`;
  bannerLinkEl.href = banners[index].link;
}

prevBannerBtn.addEventListener('click', () => {
  bannerIndex = (bannerIndex - 1 + banners.length) % banners.length;
  showBanner(bannerIndex);
});

nextBannerBtn.addEventListener('click', () => {
  bannerIndex = (bannerIndex + 1) % banners.length;
  showBanner(bannerIndex);
});

// Autoplay banner a cada 7 segundos
setInterval(() => {
  bannerIndex = (bannerIndex + 1) % banners.length;
  showBanner(bannerIndex);
}, 7000);

// Busca por nome de curso
const buscaInput = document.getElementById('busca');

function filterCourses() {
  const query = buscaInput.value.toLowerCase();

  function filterList(cursos) {
    return cursos.filter(curso => curso.title.toLowerCase().includes(query));
  }

  renderCards('scrollContainer1', filterList(cursosMaisVendidos));
  renderCards('scrollContainer2', filterList(cursosComDesconto));
  renderCards('scrollContainer3', filterList(novosCursos));
}

buscaInput.addEventListener('input', filterCourses);

// Inicializa tudo
function init() {
  renderCards('scrollContainer1', cursosMaisVendidos);
  renderCards('scrollContainer2', cursosComDesconto);
  renderCards('scrollContainer3', novosCursos);
  setupCarouselButtons();
  showBanner(bannerIndex);
}

init();
