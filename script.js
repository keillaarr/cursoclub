let currentIndex = 0;
const images = [
    'assets/9357d3ea7e6f9cc.jpg',
    'assets/Banner.png',
    'assets/plugin_banners_wordpress.jpg',
];

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateBanner();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBanner();
}

function updateBanner() {
    document.getElementById('banner').style.backgroundImage = `url('${images[currentIndex]}')`;
    document.getElementById('bannerLink').href = `https://seu-link-${currentIndex + 1}-aqui`;
}

// Mudança automática a cada 5 segundos
setInterval(nextImage, 5000);

function scrollLeft() {
  const container = document.getElementById('scrollContainer');
  container.appendChild(container.firstElementChild);
}

function scrollRight() {
  const container = document.getElementById('scrollContainer');
  container.insertBefore(container.lastElementChild, container.firstElementChild);
}
