const debounce = require('lodash/debounce')

import './resultWindow'
import articles from '../_data/articles'
import structure from '../_data/structure'
import sort from './sort/sort'
import render from './render/render'
import state from './STORE'
import filter from './sort/filter'
import theme from './theme'

const addClick = (func, elem) => document.getElementById(elem).addEventListener('click', func)

const drawPage = () => {
  theme.change(state.filter)
  render.renderPage(
    filter.apply(
      sort.apply(articles, state.sort), state.filter)
    , structure)

  document.getElementById('sortingFlag')
}

window.onload = () => {
  drawPage()

  addClick(render.addArticles, 'showMore')

  addClick(() => {
    state.sort = sort.click()
    if (state.sort) drawPage()
  }, 'sortingFlag')

  addClick(() => {
    state.filter = filter.click()
    if (state.filter) drawPage()
  }, 'filterFlag')

  window.addEventListener('scroll', toggleMainMenuScrolled)
}

const toggleMainMenuScrolled = debounce((event) => {
  let menuElem = document.getElementsByClassName('main_menu')[0]
  let topArrow = document.getElementById('toTop')

  window.pageYOffset > 50
    ? menuElem.classList.add('scroll')
    : menuElem.classList.remove('scroll')

  window.pageYOffset > window.innerHeight
    ? topArrow.classList.add('scroll')
    : topArrow.classList.remove('scroll')

}, 150, { maxWait: 3000 })
