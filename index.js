confetti({
  particleCount: 200,
  spread: 90,
  origin: { x: 0.5, y: 0.5 },
  colors: ["#ff0000", "#0000ff", "#ffcc00"],
});

window.onload = () => {
  confetti({
    particalCount: 500,
    spread: 100,
    origin: { x: 0.5, y: 0.5 },
  });
  setTimeout(() => {
    confetti.reset();
  }, 2000);
};
