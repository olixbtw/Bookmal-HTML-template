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
  render.renderPage(
    filter.apply(
      sort.apply(articles, state.sort), state.filter)
    , structure)

  document.getElementById('sortingFlag')
}

window.onload = () => {
  drawPage()

  addClick(() => {
    state.sort = sort.click()
    if (state.sort) drawPage()
    if (state.sort) console.log('sort')
  }, 'sortingFlag')

  addClick(() => {
    state.filter = filter.click()
    if (state.filter) drawPage()
    if (state.filter) theme.change(state.filter)
    if (state.filter) console.log('filter')
  }, 'filterFlag')

  window.addEventListener('scroll', toggleMainMenuScrolled)
}

const toggleMainMenuScrolled = debounce((event) => {
  let menuElem = document.getElementsByClassName('main_menu')[0]
  if (window.pageYOffset > 50)
    menuElem.classList.add('scroll')
  else
    menuElem.classList.remove('scroll')
}, 100)
