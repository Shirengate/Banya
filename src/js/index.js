document.addEventListener("DOMContentLoaded", () => {
  // логика бургер меню
  const burgerBtn = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const darkLayer = document.querySelector(".dark-layer");
  const body = document.body;
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    body.style.overflow = body.style.overflow === "hidden" ? "" : "hidden";
    darkLayer.style.zIndex = darkLayer.style.zIndex === "10" ? "-1" : "10";
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
      darkLayer.style.backgroundColor = "rgba(0, 0, 0, 0)";
      darkLayer.style.zIndex = "-1";
    }
  });
  // логика полноэкранного фото
  const fullscreenPhoto = document.querySelector(".fullscreenn-photo");
  const galeryImages = document.querySelector(".products__showcase");
  galeryImages.addEventListener("click", (e) => {
    if (e.target.classList.contains("products__image")) {
      body.style.overflow = body.style.overflow === "hidden" ? "" : "hidden";
      darkLayer.style.zIndex = darkLayer.style.zIndex === "10" ? "-1" : "10";
      darkLayer.style.backgroundColor =
        darkLayer.style.backgroundColor === "rgba(0, 0, 0, 0.2)"
          ? "rgba(0, 0, 0, 0)"
          : "rgba(0, 0, 0, 0.2)";
      fullscreenPhoto.style.backgroundImage = `url(${e.target.src})`;
      fullscreenPhoto.classList.toggle("active");
    }
  });
  document.addEventListener("click", (e) => {
    if (
      !fullscreenPhoto.contains(e.target) &&
      !galeryImages.contains(e.target) &&
      fullscreenPhoto.classList.contains("active")
    ) {
      fullscreenPhoto.classList.remove("active");
      body.style.overflow = "";
      darkLayer.style.backgroundColor = "rgba(0, 0, 0, 0)";
      darkLayer.style.zIndex = "-1";
    }
  });
});
