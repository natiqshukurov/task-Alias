document.addEventListener("DOMContentLoaded", () => {
  homeSlider(".header_body_image", "active");
});

function homeSlider(imageSelectors, activeClass) {
  const images = document.querySelectorAll(imageSelectors);

  images.forEach((image) => {
    image.addEventListener("mouseover", () => {
      images.forEach((subImages) => {
        subImages.classList.remove(activeClass);
      });
      image.classList.add(activeClass);
    });
  });
}
