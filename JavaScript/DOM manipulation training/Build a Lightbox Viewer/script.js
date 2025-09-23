const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");
const galleryImages = document.querySelectorAll(".gallery .gallery-item");

const openLightbox = (src) => {
  lightboxImage.src = src.replace("-thumbnail", "");
  lightbox.style.display = "flex";
};

const closeLightbox = () => {
  lightbox.style.display = "none";
};

closeBtn.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.style.display === "flex") {
    closeLightbox();
  }
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    openLightbox(image.getAttribute("src"));
  });
});
