// import dropdown from './dropdown'
const dropdown = require('./dropdown')

const filterTeens = (articles) => {
  let arr = [...articles]
  arr = arr.filter(item => item.category === "teens")
  return arr
}

const filterKids = (articles) => {
  let arr = [...articles]
  arr = arr.filter(item => item.category === "kids")
  return arr
}

const chooseFiler = (arr, key) => {
  switch (key) {
    case 'Baby Side':
      return filterKids(arr)

    case 'Teen Side':
      return filterTeens(arr)

    default:
      return arr
  }
}

module.exports = {
  apply: chooseFiler,
  click: dropdown
}