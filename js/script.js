// ===== Banner Rotativo =====
const banners = [
  { img: 'assets/banner1.jpg', link: 'https://link1.com' },
  { img: 'assets/banner2.jpg', link: 'https://link2.com' },
  { img: 'assets/banner3.jpg', link: 'https://link3.com' }
];

let bannerIndex = 0;
const bannerEl = document.getElementById('banner');
const bannerLinkEl = document.getElementById('bannerLink');

function updateBanner() {
  bannerEl.style.backgroundImage = `url('${banners[bannerIndex].img}')`;
  bannerLinkEl.href = banners[bannerIndex].link;
}

function nextBanner() {
  bannerIndex = (bannerIndex + 1) % banners.length;
  updateBanner();
}

function prevBanner() {
  bannerIndex = (bannerIndex - 1 + banners.length) % banners.length;
  updateBanner();
}

document.getElementById('nextBanner').addEventListener('click', nextBanner);
document.getElementById('prevBanner').addEventListener('click', prevBanner);
setInterval(nextBanner, 5000); // troca automática a cada 5s
updateBanner(); // inicia com o primeiro banner

// ===== Carrosséis Horizontais =====
const leftButtons = document.querySelectorAll('.carousel-left');
const rightButtons = document.querySelectorAll('.carousel-right');

leftButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const container = document.getElementById(targetId);
    container.scrollBy({ left: -300, behavior: 'smooth' });
  });
});

rightButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const container = document.getElementById(targetId);
    container.scrollBy({ left: 300, behavior: 'smooth' });
  });
});

// ===== Geração dinâmica de cards de cursos =====
function createCourseCard({ title, image, price, link }) {
  const card = document.createElement('a');
  card.href = link;
  card.target = '_blank';
  card.className = 'min-w-[250px] max-w-xs bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden';

  card.innerHTML = `
    <img src="${image}" alt="${title}" class="w-full h-40 object-cover" loading="lazy" />
    <div class="p-4">
      <h3 class="text-lg font-bold mb-2">${title}</h3>
      <p class="text-red-500 font-semibold">${price}</p>
    </div>
  `;

  return card;
}

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


// ===== Renderiza cards por seção =====
function renderCards(containerId, cursos) {
  const container = document.getElementById(containerId);
  cursos.forEach(curso => {
    const card = createCourseCard(curso);
    container.appendChild(card);
  });
}

renderCards('scrollContainer1', cursosMaisVendidos);
renderCards('scrollContainer2', cursosComDesconto);
renderCards('scrollContainer3', novosCursos);
