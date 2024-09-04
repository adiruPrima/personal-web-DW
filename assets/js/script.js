document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburger.addEventListener("click", () => {
    // Toggle the "hidden" class on the content
    mobileMenu.classList.toggle("hidden");
  });
});
