/*Modal pop up functionality*/
const image = document.querySelector(".post-img");
const modal = document.querySelector(".post-img-modal");
const modalImage = document.querySelector(".modal-img");
image.onclick = () => {
  modal.style.display = "block";
  modalImage.src = image.getAttribute("src");
  modalImage.alt = image.getAttribute("alt");
};
modal.onclick = () => {
  modal.style.display = "none";
};
