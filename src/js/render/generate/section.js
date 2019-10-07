getArticle = require('./article')


module.exports = (sectionParams, articles) => {
  let generatedModifier = '';
  let header = '';

  if (sectionParams.mod && sectionParams.mod.length)
    sectionParams.mod.forEach(mod => {
      generatedModifier += ` ${sectionParams.class}--${mod}`
    });

  if (sectionParams.items !== articles.length)
    generatedModifier += ` ${sectionParams.class}--not_full`

  if (sectionParams.header) {
    header += `<header class="${sectionParams.class}-section_header">${sectionParams.header}</header>`
  }

  let sectionText = `
  <section class="${sectionParams.class}${generatedModifier}">
    <div class="${sectionParams.class}-container">${header}
  `

  for (let i = 0; i < sectionParams.items; i++) {
    if (articles[i])
      sectionText += getArticle(sectionParams.class, articles[i])
  }

  sectionText += `</div></section>`
  return sectionText
}