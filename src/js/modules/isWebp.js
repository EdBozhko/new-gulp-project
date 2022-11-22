export const isWebp = () => {
  const html = document.querySelector('html');
  const webP = new Image();

  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

  webP.onload = webP.onerror = () => html.classList.add(webP.height == 2 ? 'webp' : 'no-webp');
};
