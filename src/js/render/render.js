let baseElement = document.getElementById('idMain')

const defaultSectionStructure = { items: 3, class: 'three_articles', mod: [], header: '' }
const getSection = require('./generate/section')
const generateSorter = require('./generate/sorter')

//for more articles than needed

// let showMore = document.getElementById('showMore')
// const appendArticle = () => {
//   console.log('123')
//   event.preventDefault() // page started to scroll???
// }

//render all items
const renderPage = (articlesArr, sections) => {
  let articles = [...articlesArr]
  // showMore.removeEventListener('click', appendArticle)
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

    if (section.class === 'hero')
      document.getElementById('heroArea').innerHTML = getSection(section, sectionArticles)
    else if (sectionArticles.length) // case if there is less arrticles left than is in predefined section
      baseElement.innerHTML += getSection(section, sectionArticles)

  });

  if (baseElement.children[baseElement.children.length - 1].classList.contains('three_articles') && baseElement.children[baseElement.children.length - 1].getElementsByTagName('article').length % 2 === 0) {
    let children = baseElement.children[baseElement.children.length - 1].getElementsByTagName('article')
    children[0].setAttribute('style', 'margin-right:auto;margin-left:auto;')
    children[1].setAttribute('style', 'margin-right:auto;margin-left:auto;')
  }

  // if (articles.length) {
  //   showMore.classList.add('thereIsMore')
  //   showMore.addEventListener('click', appendArticle)
  // }
}

module.exports = { renderPage }

