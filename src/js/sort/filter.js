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

module.exports = {
  teen: filterTeens,
  kids: filterKids,
}