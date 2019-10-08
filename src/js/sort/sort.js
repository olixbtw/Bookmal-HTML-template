import render from '../render/render'

const sortByView = (articles) => {
  let arr = [...articles]
  const compareFn = (b, a) => parseInt(a.views) - parseInt(b.views)
  arr.sort(compareFn)
  return arr
}

const sortByDate = (articles) => {
  let arr = [...articles]
  const compareFn = (b, a) => new Date(a.date) - new Date(b.date)
  arr.sort(compareFn)
  return arr
}

// --- change to if instead of async??
const toggleActiveButton = async () => {
  if (!event.target.classList.contains('active')) {
    for (let i = 0; i < event.target.parentElement.children.length; i++)
      event.target.parentElement.children[i].classList.remove('active')

    event.target.classList.add('active')
    return await true
  }
  else throw 'page is already rendered'
}

// sorting
const displaySortedPage = {
  view: () => toggleActiveButton()
    .then(() => render.renderPage(sortByView(articles), structure)).catch(() => { }),
  date: () => toggleActiveButton()
    .then(() => render.renderPage(sortByDate(articles), structure)).catch(() => { }),
}

module.exports = {
  view: sortByView,
  date: sortByDate,
  display: displaySortedPage
}