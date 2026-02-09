const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = 300;

  const progress = Math.min(scrollY / maxScroll, 1);

  const startX = 50;
  const startY = 50;
  const endX = 5;
  const endY = 5;

  const currentX = startX + (endX - startX) * progress;
  const currentY = startY + (endY - startY) * progress;

  const scale = 1 - progress * 0.5;

  logo.style.transform = `
    translate(-50%, -50%)
    translate(${currentX - 50}vw, ${currentY - 50}vh)
    scale(${scale})
  `;
});
