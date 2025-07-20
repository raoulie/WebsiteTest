document.querySelectorAll('.ripple-img').forEach(img => {
  img.addEventListener('pointerdown', e => {
    const container = img.closest('.ripple-container') || img;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    container.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

