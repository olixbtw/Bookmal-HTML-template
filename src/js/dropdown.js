const dropdown = () => {
  console.log(event.target.nodeName)
  let dropdownList;
  if (event.target.nodeName === "LI") dropdownList = event.target.parentElement
  if (event.target.nodeName === "UL") dropdownList = event.target

  if (dropdownList.classList.contains('open')) {
    //choose new category
    dropdownList.classList.remove('open')
  } else {
    dropdownList.classList.add('open')
  }
}

module.exports = dropdown