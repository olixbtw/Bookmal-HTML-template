// import dropdown from './dropdown'
const themeTeens = () => {
  changeImgs("themes/white/");
  document.body.classList.remove("themeKids");
  document.body.classList.add("themeTeens");
};

const themeKids = () => {
  changeImgs("themes/white/");
  document.body.classList.add("themeBaby");
  document.body.classList.remove("themeTeens");
};

const themeDefault = () => {
  changeImgs();
  document.body.classList.remove("themeBaby");
  document.body.classList.remove("themeTeens");
};

const chooseTheme = (key) => {
  if (typeof (key) === "string")
    key = key.toLowerCase();

  switch (key) {
    case "Baby Side".toLowerCase():
      themeKids();
      return;

    case "Teen Side".toLowerCase():
      themeTeens();
      return;

    default:
      themeDefault();
      return;
  }
};

module.exports = {
  change: chooseTheme
};

const changeImgs = (mod = "") => {
  let allImgs = document.querySelectorAll("[data-theme-image]");

  allImgs.forEach(element => {
    let a = element.getAttribute("src");
    a = a.replace(/themes\/[a-zA-Z0-9]*\//g, "");
    a = a.replace("/images/", "/images/" + mod);
    element.setAttribute("src", a);
  });
};