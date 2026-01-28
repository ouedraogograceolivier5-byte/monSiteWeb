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
