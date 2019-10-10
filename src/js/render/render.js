let baseElement = document.getElementById('idMain')

let articlesLeft = [];
const getSection = require('./generate/section')
const getArticle = require('./generate/article')

//render all items
const renderPage = (articles, sections) => {
  let articlesArr = [...articles]
  baseElement.innerHTML = ''

  //render all sections from structure
  //check number of articles in case there are less than needed left
  sections.forEach(section => {
    let sectionArticles = [];
    for (let i = 0; i < section.items; i++) {
      if (articlesArr[0]) {
        sectionArticles.push(articlesArr[0])
        articlesArr.shift()
      }
    }

    if (section.class === 'hero')
      document.getElementById('heroArea').innerHTML = getSection(section, sectionArticles)
    else if (sectionArticles.length) // case if there is less arrticles left than is in predefined section
      baseElement.innerHTML += getSection(section, sectionArticles)

  });

  margins.check()
  articlesLeft = articlesArr
  checkMore()
}

const addArticles = () => {
  margins.remove()
  let appendChildren = '';
  for (let i = 0; i < 5; i++)
    if (articlesLeft) {
      appendChildren += getArticle('three_articles', articlesLeft[0])
      articlesLeft.shift()
    }

  baseElement.children[baseElement.children.length - 1].children[0].innerHTML += appendChildren
  checkMore()
  margins.check()
  // event.preventDefault()
}

module.exports = {
  renderPage,
  addArticles
}

const margins = {
  check: () => {
    let children = baseElement.children[baseElement.children.length - 1].getElementsByTagName('article')
    if (baseElement.children[baseElement.children.length - 1].classList.contains('three_articles')
      && children.length % 3 !== 0) {
      children[children.length - 1].setAttribute('style', 'margin-right:auto; margin-left:auto;')
      if (children.length % 3 === 2)
        children[children.length - 2].setAttribute('style', 'margin-right:auto; margin-left:auto;')
    }
  },
  remove: () => {
    let children = baseElement.children[baseElement.children.length - 1].getElementsByTagName('article')
    for (let i = 0; i < children.length; i++)
      children[i].removeAttribute('style')
  }
}

const checkMore = () => {
  if (articlesLeft.length)
    showMore.classList.add('thereIsMore')
  else
    showMore.classList.remove('thereIsMore')
}