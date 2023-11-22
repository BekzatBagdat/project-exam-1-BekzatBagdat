// Homepage carousel (slider)
const homeCarousel = () => {
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
};
homeCarousel();

//API fetch
const firstThree = document.querySelector(".recent-first-three");
const secondThree = document.querySelector(".recent-second-three");
const getContent = async () => {
  try {
    //First Three
    //Adding Loader
    firstThree.textContent = "Loading...";
    firstThree.style.fontSize = "1.4rem";
    firstThree.style.textAlign = "center";
    firstThree.style.color = "#092d4d";
    firstThree.style.justifyContent = "center";
    //Fetching first
    const url = "https://bekzatbagdat.no/wp-json/wp/v2/posts/?per_page=3";
    const response = await fetch(url);
    const json = await response.json();
    const articles = json;
    //Creating HTMl
    createHTML(articles, firstThree);
    //Second Three
    secondThree.textContent = "Loading...";
    secondThree.style.fontSize = "1.4rem";
    secondThree.style.textAlign = "center";
    secondThree.style.color = "#092d4d";
    secondThree.style.justifyContent = "center";
    //fetching second
    const secondUrl =
      "https://bekzatbagdat.no/wp-json/wp/v2/posts/?per_page=3&page=2";
    const secondResponse = await fetch(secondUrl);
    const secondJson = await secondResponse.json();
    const secondArticles = secondJson;
    //Creating HTMl
    createHTML(secondArticles, secondThree);
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

//Creating HTML for recent posts
const createHTML = (articles, container) => {
  //Removing Loader
  container.textContent = "";
  articles.forEach((article) => {
    //get image
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

      //Creating html
      const htmlArticleCard = `
    <div class="home-recent-article-card">
    <img
      src="${imgSource}"
      alt="${article.title.rendered}"
    />
    <h3>
    ${article.title.rendered}
    </h3>
    <p class="home-recent-article-date-p">${formattedDate}</p>
    <div class="recent-article-btn">
      <a href="post.html?id=${article.id}">Read the article</a>
    </div>
  </div>
    `;
      container.innerHTML += htmlArticleCard;
    };
    fetchImg();
  });
};
