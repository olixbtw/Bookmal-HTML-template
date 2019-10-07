
const sortByView = (articles) => {
  let arr = [...articles]
  const compareFn = (b, a) => parseInt(a.views) - parseInt(b.views)
  arr.sort(compareFn)
  return arr
}

const sortByDate = (articles) => {
  let arr = [...articles]
  const compareFn = (b, a) => new Date(a.date) - new Date(b.date)
  arr.sort(compareFn)
  return arr
}

module.exports = {
  view: sortByView,
  date: sortByDate,
}