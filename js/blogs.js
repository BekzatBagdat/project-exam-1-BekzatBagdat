const removeLoadMoreBtn = () => {
  //Removing load more btn after the click
  const loadMoreBtn = document
    .querySelector(".load-more-btn")
    .addEventListener("click", () => {
      document.querySelector(".load-more-btn").style.display = "none";
    });
};
removeLoadMoreBtn();

//Fetching API
const container = document.querySelector(".blogs-ul");
const getContent = async () => {
  try {
    //Loader
    container.textContent = "Loading...";
    container.style.fontSize = "2rem";
    container.style.textAlign = "center";
    container.style.color = "#092d4d";
    container.style.justifyContent = "center";
    const url = "https://bekzatbagdat.no/wp-json/wp/v2/posts/?per_page=100";
    //Fetching...
    const response = await fetch(url);
    const json = await response.json();
    const articles = json;
    createHTML(articles);
  } catch (error) {
    document.querySelector("body").textContent = ` ${error} 😔😔😔`;
    document.querySelector("body").style.textAlign = "center";
    document.querySelector("body").style.fontFamily = "Poppins";
    document.querySelector("body").style.fontSize = "1.7rem";
    document.querySelector("body").style.backgroundColor = "#092d4d";
    document.querySelector("body").style.color = "#ffffff";
    document.querySelector("body").style.marginTop = "200px";
  }
};
getContent();

const createHTML = (articles) => {
  //Removing loader
  container.textContent = "";
  container.style.fontSize = "";
  container.style.textAlign = "";
  container.style.color = "";
  container.style.justifyContent = "";

  articles.forEach((article) => {
    //Fetch img
    const fetchImg = async () => {
      const site = `https://bekzatbagdat.no/wp-json/wp/v2/media/${article.featured_media}`;
      const mediaData = await fetch(site);
      const media = await mediaData.json();
      const imgSource = media.guid.rendered;
      //formatting date:
      const orgDate = article.date;
      const dateObj = new Date(orgDate);
      const monthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const day = dateObj.getDate();
      const month = dateObj.getMonth();
      const year = dateObj.getFullYear();
      const formattedDate = `${day} ${monthName[month]}, ${year}`;
      const html = `
    <li>
              <div class="blog-card">
                <img
                  src="${imgSource}"
                  alt="${article.title.rendered}"
                />
                <h2>
                ${article.title.rendered}
                </h2>
                <p>${formattedDate}</p>
                <a href="post.html?id=${article.id}">Read the Article</a>
              </div>
     </li>`;
      container.innerHTML += html;
    };
    fetchImg();
  });
};
