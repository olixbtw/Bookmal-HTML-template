const debounce = require("lodash/debounce");

require("./resultWindow");
const articles = require("../_data/articles");
const structure = require("../_data/structure");
const sort = require("./sort/sort");
const render = require("./render/render");
const state = require("./STORE");
const filter = require("./sort/filter");
const theme = require("./theme");

const addClick = (func, elem) => document.getElementById(elem).addEventListener("click", func);

const drawPage = () => {
  theme.change(state.filter);
  render.renderPage(
    filter.apply(
      sort.apply(articles, state.sort), state.filter)
    , structure);

  document.getElementById("sortingFlag");
};

window.onload = () => {
  drawPage();

  addClick(render.addArticles, "showMore");

  addClick(() => {
    state.sort = sort.click();
    if (state.sort) drawPage();
  }, "sortingFlag");

  addClick(() => {
    state.filter = filter.click();
    if (state.filter) drawPage();
  }, "filterFlag");

  window.addEventListener("scroll", toggleMainMenuScrolled);
};

const toggleMainMenuScrolled = debounce(() => {
  let menuElem = document.getElementsByClassName("main_menu")[0];
  let topArrow = document.getElementById("toTop");

  window.pageYOffset > 50
    ? menuElem.classList.add("scroll")
    : menuElem.classList.remove("scroll");

  window.pageYOffset > window.innerHeight
    ? topArrow.classList.add("scroll")
    : topArrow.classList.remove("scroll");

}, 150, { maxWait: 3000 });
