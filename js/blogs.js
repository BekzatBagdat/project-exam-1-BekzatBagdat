const removeLoadMoreBtn = () => {
  //Removing load more btn after the click
  const loadMoreBtn = document
    .querySelector(".load-more-btn")
    .addEventListener("click", () => {
      document.querySelector(".load-more-btn").style.display = "none";
    });
};
removeLoadMoreBtn();
