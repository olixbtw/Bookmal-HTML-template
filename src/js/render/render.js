let baseElement = document.getElementById('idMain')

getSection = require('./generate/section')
const defaultSection = { items: 3, class: 'three_articles', mod: [], header: '' }

//render all items
const renderPage = (articlesArr, sections) => {
  let articles = [...articlesArr]
  baseElement.innerHTML = ''
  let articleCount = 0;

  //render all basic sections
  sections.forEach(section => {
    let sectionArticles = [];
    // case if there is less arrticles than is in predefined structure
    for (let i = articleCount; i < articleCount + section.items; i++) {
      if (articles[0]) {
        sectionArticles.push(articles[0])
        articles.shift()
      }
    }

    if (sectionArticles.length)
      baseElement.innerHTML += getSection(section, sectionArticles)
  });

  //add this logic to "View More"
  // case if there is more arrticles than is in predefined structure
  while (articles.length > 0) {
    let sectionArticles = [];
    for (let i = 0; i < 3; i++) {
      if (articles[0]) {
        sectionArticles.push(articles[0])
        articles.shift()
      }
    }

    if (sectionArticles.length)
      baseElement.innerHTML += getSection(defaultSection, sectionArticles)
  }
}

module.exports = {
  renderPage
}
