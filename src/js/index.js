import articles from '../_data/articles'
import structure from '../_data/structure'
import sort from './sort/sort'
import render from './render/render'
import './resultWindow'
import state from './STORE'
import filter from './sort/filter'

const addClick = (func, elem) => document.getElementById(elem).addEventListener('click', func)

const drawPage = () => {
  render.renderPage(
    filter.apply(
      sort.apply(articles, state.sort), state.filter)
    , structure)
}

window.onload = () => {
  drawPage()

  addClick(() => {
    state.sort = sort.click()
    if (state.sort) drawPage()
  }, 'sortingFlag')

  addClick(() => {
    state.filter = filter.click()
    if (state.filter) drawPage()
  }, 'filterFlag')
}
