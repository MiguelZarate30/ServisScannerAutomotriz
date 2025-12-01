// assets/script.js
document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery-grid img');
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  const img = document.createElement('img');
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  // Abrir lightbox al hacer clic en una imagen
  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      img.src = image.src;
      lightbox.classList.add('show');
    });
  });

  // Cerrar al hacer clic en el fondo
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('show');
    }
  });
});
