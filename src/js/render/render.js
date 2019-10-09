let baseElement = document.getElementById('idMain')

const defaultSectionStructure = { items: 3, class: 'three_articles', mod: [], header: '' }
const getSection = require('./generate/section')

//render all items
const renderPage = (articlesArr, sections) => {
  let articles = [...articlesArr]
  baseElement.innerHTML = ''

  //render all sections from structure
  //check number of articles in case there are less than needed left
  sections.forEach(section => {
    let sectionArticles = [];
    for (let i = 0; i < section.items; i++) {
      if (articles[0]) {
        sectionArticles.push(articles[0])
        articles.shift()
      }
    }

    // case if there is less arrticles left than is in predefined section
    if (sectionArticles.length)
      baseElement.innerHTML += getSection(section, sectionArticles)
  });

  //add this logic to "View More"
  // case if there is more arrticles than is in predefined structure
  
  // while (articles.length > 0) {
  //   let sectionArticles = [];
  //   for (let i = 0; i < 3; i++) {
  //     if (articles[0]) {
  //       sectionArticles.push(articles[0])
  //       articles.shift()
  //     }
  //   }

  //   if (sectionArticles.length)
  //     baseElement.innerHTML += getSection(defaultSectionStructure, sectionArticles)
  // }
}

module.exports = { renderPage }

