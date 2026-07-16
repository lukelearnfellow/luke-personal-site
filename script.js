document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  const cursorGlow = document.querySelector(".cursor-glow");
  const revealItems = document.querySelectorAll(".reveal");

  if (year) year.textContent = new Date().getFullYear();

  if (cursorGlow) {
    window.addEventListener("pointermove", (event) => {
      cursorGlow.style.left = `${event.clientX}px`;
      cursorGlow.style.top = `${event.clientY}px`;
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.setProperty("--delay", entry.target.dataset.delay || 0);
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
});
