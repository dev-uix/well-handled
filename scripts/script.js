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


document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionContent.classList.add('open');
    } else {
      accordionContent.style.maxHeight = 0;
      accordionContent.classList.remove('open');
    }

    // Close other accordions
    document.querySelectorAll('.accordion-header').forEach(otherButton => {
      if (otherButton !== button && otherButton.classList.contains('active')) {
        otherButton.classList.remove('active');
        const otherContent = otherButton.nextElementSibling;
        otherContent.style.maxHeight = 0;
        otherContent.classList.remove('open');
      }
    });
  });
});