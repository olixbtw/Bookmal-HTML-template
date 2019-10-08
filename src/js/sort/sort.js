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

const toggleActiveButton = () => {
  if (!event.target.classList.contains('active')) {
    for (let i = 0; i < event.target.parentElement.children.length; i++)
      event.target.parentElement.children[i].classList.remove('active')

    event.target.classList.add('active')
    return true
  }
  else return false
}


module.exports = {
  view: sortByView,
  date: sortByDate,
  toggleActiveButton
}