import articles from '../_data/articles'
import structure from '../_data/structure'

import sort from './sort/sort'
import render from './render/render'

import dropdown from './dropdown'

const addClick = (func, elem) => document.getElementById(elem).addEventListener('click', func)

window.onload = () => {
  render.renderPage(articles, structure)
  addClick(sort.display.view, 'sortByViews')
  addClick(sort.display.date, 'sortByDate')
  addClick(dropdown, 'categoryFilter')
}


