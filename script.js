let images = [
  'assets/Banner.png',
  'assets/Banner2.png',
  'assets/Banner3.png',
];

let currentIndex = 0;
let bannerLink = document.getElementById('bannerLink');

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('banner').style.backgroundImage = `url(${images[currentIndex]})`;
  updateBannerLink();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('banner').style.backgroundImage = `url(${images[currentIndex]})`;
  updateBannerLink();
}

function updateBannerLink() {
  switch (currentIndex) {
      case 0:
          bannerLink.href = 'https://seu-link-1-aqui';
          break;
      case 1:
          bannerLink.href = 'https://seu-link-2-aqui';
          break;
      case 2:
          bannerLink.href = 'https://seu-link-3-aqui';
          break;
      default:
          bannerLink.href = '#';
          break;
  }
}

function scrollRight() {
  let scrollContainer = document.getElementById('scrollContainer');
  scrollContainer.scrollLeft += 200;
}

function scrollLeft() {
  let scrollContainer = document.getElementById('scrollContainer');
  scrollContainer.scrollLeft -= 200;
}
