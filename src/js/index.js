document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const darkLayer = document.querySelector(".dark-layer");
  const body = document.body;
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    body.style.overflow = body.style.overflow === "hidden" ? "" : "hidden";
    darkLayer.style.backgroundColor =
      darkLayer.style.backgroundColor === "rgba(0, 0, 0, 0.2)"
        ? "rgba(0, 0, 0, 0)"
        : "rgba(0, 0, 0, 0.2)";
  });

  document.addEventListener("click", (e) => {
    if (
      !mobileMenu.contains(e.target) &&
      !burgerBtn.contains(e.target) &&
      mobileMenu.classList.contains("active")
    ) {
      mobileMenu.classList.remove("active");
      burgerBtn.classList.remove("active");
      body.style.overflow = "";
      darkLayer.style.backgroundColor =
        darkLayer.style.backgroundColor === "rgba(0, 0, 0, 0.2)"
          ? "rgba(0, 0, 0, 0)"
          : "rgba(0, 0, 0, 0.2)";
    }
  });
});
