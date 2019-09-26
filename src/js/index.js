let articles = require('../_data/articles')
let structure = require('../_data/structure')

renderPage = require('./render/render')

window.onload = () => {
  renderPage(articles, structure)
}