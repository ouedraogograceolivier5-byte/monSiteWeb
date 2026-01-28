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
