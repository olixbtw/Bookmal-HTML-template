let articles = require('../data/articles')
let structure = require('../data/structure')

renderPage = require('./render/render')

window.onload = () => {
  renderPage(articles, structure)
}