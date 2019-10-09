import articles from '../_data/articles'
import structure from '../_data/structure'

import sort from './sort/sort'
import render from './render/render'

import dropdown from './dropdown'

const addClick = (func, elem) => document.getElementById(elem).addEventListener('click', func)

window.onload = () => {
  render.renderPage(articles, structure)
  addClick(displaySortedPage.view, 'sortByViews')
  addClick(displaySortedPage.date, 'sortByDate')

  addClick(dropdown, 'categoryFilter')

  let headerIcons = document.getElementsByClassName('main_header-header_icon')
  for (let i = 0; i < headerIcons.length; i++)
    headerIcons[i].addEventListener('click', openSearch)
}

const openSearch = () => {
  document.getElementById('search').classList.add('open')
}

document.getElementsByClassName('search-close')[0].addEventListener('click', () => document.getElementById('search').classList.remove('open'))

const displaySortedPage = {
  view: () => { if (sort.toggleActiveButton()) render.renderPage(sort.view(articles), structure) },
  date: () => { if (sort.toggleActiveButton()) render.renderPage(sort.date(articles), structure) },
}