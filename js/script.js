document.querySelectorAll('.ripple-img').forEach(img => {
  img.addEventListener('pointerdown', e => {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    img.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
