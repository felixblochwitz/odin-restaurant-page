import homeImgPath from "../assets/img/sushi_home.jpg";
const loadHome = function() {
  const contentDiv = document.getElementById("content");
  contentDiv.classList.add("home");

  const homeDiv = document.createElement("div");
  homeDiv.id = "home";
  homeDiv.style.backgroundImage = `url(${homeImgPath})`;

  const title = document.createElement("h1");
  title.textContent = "Sushi Palace";
  title.id = "title";

  const subTitle = document.createElement("h2");
  subTitle.textContent = "Best Sushi In Town";
  subTitle.id = "sub-title";

  homeDiv.appendChild(title);
  homeDiv.appendChild(subTitle);
  contentDiv.appendChild(homeDiv);
};

export { loadHome };
