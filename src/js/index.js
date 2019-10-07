const articles = require('../_data/articles')
const structure = require('../_data/structure')

const sort = require('./sort/sort')
const render = require('./render/render')

const addClick = (func, elem) => document.getElementById(elem).addEventListener('click', func)

window.onload = () => {
  render.renderPage(articles, structure)
  addClick(displaySortedPage.view, 'sortByViews')
  addClick(displaySortedPage.date, 'sortByDate')
}

const displaySortedPage = {
  view: () => toggleActiveButton()
    .then(() => render.renderPage(sort.view(articles), structure)).catch(() => { }),
  date: () => toggleActiveButton()
    .then(() => render.renderPage(sort.date(articles), structure)).catch(() => { }),
}

const toggleActiveButton = async () => {
  if (!event.target.classList.contains('active')) {
    for (let i = 0; i < event.target.parentElement.children.length; i++)
      event.target.parentElement.children[i].classList.remove('active')

    event.target.classList.add('active')
    return await true
  }
  else throw 'page is already rendered'
}
