import articles from "../_data/articles";
import debounce from "lodash/debounce";
const search = document.getElementById("search");
const closeBtn = search.getElementsByClassName("search-close")[0];
const searchList = search.getElementsByClassName("search-result_list")[0];
const searchInput = search.getElementsByClassName("search-input")[0];

const openSearch = () => {
  if (!search.classList.contains("open")) {
    searchInput.value = "";
    searchList.innerHTML = "";
  }
  search.classList.toggle("open");
};

const closeSearch = () => {
  search.classList.remove("open");
};

const generate = (item) => {
  if (item) return `
    <li class="search-result_item">
      <a href="${item.link}" class="search-result_link">
        <img class="search-image" src="./assets/images/common/${item.img.src}" alt="${item.img.src}" class="search-result_image">
        <span class="search-result_text">${item.title}</span>
      </a>
    </li>
    `;
  else return `
    <li class="search-result_item">
      <span class="search-result_text">Ми нічого не знайшли ;(</span>
    </li>
  `;
};

const initiateSearch = debounce((event) => {
  searchList.innerHTML = "";
  if (event.target.value.toLowerCase().replace(" ", "")) {
    let foundArticles = articles.filter(item =>
      item.title.toLowerCase().replace(" ", "")
        .match(event.target.value.toLowerCase().replace(" ", ""))
    );

    foundArticles.forEach(el => {
      searchList.innerHTML += generate(el);
    });

    if (foundArticles.length === 0)
      searchList.innerHTML += generate(false);
  }
}, 500, { maxWait: 2000 });

searchInput.addEventListener("input", initiateSearch);
closeBtn.addEventListener("click", closeSearch);
document.getElementsByClassName("main_header-header_icon--search")[0]
  .addEventListener("click", openSearch);



