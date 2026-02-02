//Mode sombre ou clair
function mode_sombre_clair(){
  const toggleBtn = document.getElementById('toggle-theme');
  const body = document.body;

  // Vérifie si un thème est déjà enregistré
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Sauvegarde le choix dans le navigateur
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}


//Menu
const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');
const icon = menuToggle.querySelector('.icon');
const label = menuToggle.querySelector('.label');

menuToggle.addEventListener('click', () => {
  const isOpen = menuList.classList.toggle('show');
  menuToggle.classList.toggle('open', isOpen);
  label.textContent = isOpen ? 'Fermer' : 'Menu';
  icon.textContent = isOpen ? '✖' : '☰';
});

// Fermer le menu si on clique ailleurs
document.addEventListener('click', (event) => {
  if (!menuList.contains(event.target) && event.target !== menuToggle) {
    menuList.classList.remove('show');
    menuToggle.classList.remove('open');
    label.textContent = 'Menu';
    icon.textContent = '☰';
  }
});

//Images
const images = document.querySelectorAll('.gallery img');
const indicators = document.querySelectorAll('.indicators span');
let current = 0;
let slideshowInterval;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
    indicators[i].classList.toggle('active', i === index);
  });
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

document.getElementById('next').addEventListener('click', () => {
  nextImage();
  resetSlideshow();
});

document.getElementById('prev').addEventListener('click', () => {
  prevImage();
  resetSlideshow();
});

indicators.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    current = i;
    showImage(current);
    resetSlideshow();
  });
});

function startSlideshow() {
  slideshowInterval = setInterval(nextImage, 4000); // toutes les 4 secondes
}

function resetSlideshow() {
  clearInterval(slideshowInterval);
  startSlideshow();
}

// Démarrage automatique
startSlideshow();

//Message
const barre = document.getElementById('barre');
const detail = document.getElementById('detail');
const arrow = document.getElementById('arrow');

barre.addEventListener('click', () => {
  detail.classList.toggle('active');
  arrow.textContent = detail.classList.contains('active') ? '▲' : '▼';
});

document.getElementById("barre").addEventListener("click", function () {
  document.querySelector(".indice2").classList.toggle("active");
});
