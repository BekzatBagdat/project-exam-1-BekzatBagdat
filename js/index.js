// Homepage carousel (slider)
const scrollContainer = document.querySelector(".home-recent-container");
const backBtn = document
  .querySelector(".back-btn")
  .addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1100;
  });
const forwardBtn = document
  .querySelector(".forward-btn")
  .addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1100;
  });
