const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

/*--Parallax--*/

window.addEventListener('scroll', () => {
  const parallax = document.querySelector('.parallax');
  if (!parallax) return;

  const scrollTop = window.pageYOffset;
  // Adjust the speed factor (0.5 here means half the scroll speed)
  const offset = scrollTop * 0.5;

  // Set the background-position Y based on scroll offset
  parallax.style.backgroundPosition = `center ${-offset}px`;
});