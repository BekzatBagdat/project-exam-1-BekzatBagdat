//Fetching API
const container = document.querySelector(".post-section");
const getContent = async () => {
  try {
    //Loader
    container.textContent = "Loading...";
    container.style.fontSize = "2rem";
    container.style.textAlign = "center";
    container.style.color = "#092d4d";
    container.style.justifyContent = "center";
    //Getting parameters from the query string
    const qString = document.location.search;
    const params = new URLSearchParams(qString);
    const id = params.get("id");
    const url = "https://bekzatbagdat.no/wp-json/wp/v2/posts/";
    const urlId = url + id;
    //Fetching...
    const response = await fetch(urlId);
    const json = await response.json();
    const data = json;
    createHTML(data);
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

//Creating HTMl
const createHTML = (data) => {
  //Chaning the title of the page
  const pageTitle = document.querySelector("title");
  pageTitle.textContent = `DigiBlog | ${data.title.rendered}`;
  //Remove loader
  container.textContent = "";
  container.style.fontSize = "";
  container.style.textAlign = "";
  container.style.color = "";
  container.style.justifyContent = "";
  //Fetch img
  const fetchImg = async () => {
    const site = `https://bekzatbagdat.no/wp-json/wp/v2/media/${data.featured_media}`;
    const mediaData = await fetch(site);
    const media = await mediaData.json();
    const imgSource = media.guid.rendered;
    //formatting date:
    const orgDate = data.date;
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
  <p class="post-author">By <span>Boris Brodiee</span></p> 
  <div class="post-content">
  <img
    class="post-img"
    src="${imgSource}"
    alt="${data.title.rendered}"
  />
  <h1>${data.title.rendered}</h1>
  <p class="post-date">${formattedDate}</p>
  <div class="post-txt">
    ${data.content.rendered}
  </div>
</div>`;
    container.innerHTML += html;
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
  };
  fetchImg();
};
