const imgs = document.querySelectorAll('#carrusel img');
let current = 0;

function updateCarrusel() {
    
  const total = imgs.length;
  imgs.forEach((img, i) => {
    img.className = '';
   
    // Calcula cuántos pasos hay desde la imagen activa hasta esta imagen
    // + total y % total evitan números negativos y que se pase del máximo
    // El resultado siempre será 0, 1 o 2 (con 3 imágenes)
    const diff = (i - current + total) % total;

    if (diff === 0) img.classList.add('active');       // diff 0 → centro (imagen activa)
    else if (diff === 1) img.classList.add('next');    // diff 1 → derecha cercana
    else if (diff === total - 1) img.classList.add('prev');  // diff 2 → izquierda cercana
    else if (diff === 2) img.classList.add('next2');   // diff 2 → derecha lejana (con más de 3 imgs)
    else if (diff === total - 2) img.classList.add('prev2'); // izquierda lejana (con más de 3 imgs)
    else img.classList.add('hidden'); // cualquier otra imagen se oculta
  });

  document.querySelectorAll('.puntoAbajo').forEach((punto, i) => {
    punto.classList.toggle('active', i === current);
  });
}

document.getElementById('btnDer').addEventListener('click', () => {
  current = (current + 1) % imgs.length;
  updateCarrusel();
});

document.getElementById('btnIzq').addEventListener('click', () => {
  current = (current - 1 + imgs.length) % imgs.length;

  updateCarrusel();
});

updateCarrusel();
// fotos
document.querySelectorAll('#bodas img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <span class="lightbox-close">✕</span>
      <img src="${img.src}" alt="${img.alt}">
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', e => {
      if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
        overlay.remove();
      }
    });
  });
});

document.querySelectorAll('#book img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <span class="lightbox-close">✕</span>
      <img src="${img.src}" alt="${img.alt}">
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', e => {
      if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
        overlay.remove();
      }
    });
  });
});
document.querySelectorAll('#urbano img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <span class="lightbox-close">✕</span>
      <img src="${img.src}" alt="${img.alt}">
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', e => {
      if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
        overlay.remove();
      }
    });
  });
});
document.querySelectorAll('#animales img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <span class="lightbox-close">✕</span>
      <img src="${img.src}" alt="${img.alt}">
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', e => {
      if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
        overlay.remove();
      }
    });
  });
});

