// Modale vidéo : ouvre la démo au clic sur un bouton [data-video]
const modal = document.getElementById('video-modal');
const video = modal.querySelector('video');
const title = document.getElementById('video-modal-title');

document.querySelectorAll('[data-video]').forEach((btn) => {
  btn.addEventListener('click', () => {
    video.src = btn.dataset.video;
    title.textContent = btn.dataset.title || 'Démo vidéo';
    modal.showModal();
    video.play().catch(() => {});
  });
});

modal.querySelector('[data-close]').addEventListener('click', () => modal.close());

// Clic sur le fond = fermeture
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.close();
});

// Stoppe la vidéo à la fermeture (bouton, fond ou touche Échap)
modal.addEventListener('close', () => {
  video.pause();
  video.removeAttribute('src');
  video.load();
});

document.getElementById('year').textContent = new Date().getFullYear();
