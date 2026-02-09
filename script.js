const logo = document.getElementById("logo");

const firstName = "Soraiya";
const secondName = "Soraiya";

// expose for other pages/scripts
try { window.firstName = firstName; window.secondName = secondName; } catch(e) {}

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

  if (logo && logo.style) {
    logo.style.transform = `
      translate(-50%, -50%)
      translate(${currentX - 50}vw, ${currentY - 50}vh)
      scale(${scale})
    `;
  }
});
