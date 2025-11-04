// Navbar transparency on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0, 0, 0, 0.8)";
  } else {
    nav.style.background = "rgba(0, 0, 0, 0.4)";
  }
});


function openImage(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "flex";
  modalImg.src = src;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}

