confetti({
  particleCount: 600,
  spread: 150,
  origin: { x: 0.5, y: 0.5 },
  colors: ["#ff0000", "#0000ff", "#ffcc00"],
});

window.onload = () => {
  confetti({
    particleCount: 800,
    spread: 100,
    origin: { x: 0.5, y: 0.5 },
  });
  setTimeout(() => {
    confetti.reset();
  }, 8000);
};
