// const dropdown = async () => {
const dropdown = () => {
  if (event.target.classList.contains('dropdown-item')) {
    let dropdownBlock = event.target.parentElement.parentElement;

    if (dropdownBlock.getElementsByClassName('dropdown-placeholder')[0].innerText === event.target.innerText) {
      dropdownBlock.classList.remove('open')
      // throw 'you are already here'
      return false
    }

    dropdownBlock.getElementsByClassName('dropdown-placeholder')[0].innerText = event.target.innerText

    if (dropdownBlock.classList.contains('open'))
      dropdownBlock.classList.remove('open')

    let items = dropdownBlock.getElementsByClassName('dropdown-list')[0].children;
    for (let i = 0; i < items.length; i++)
      items[i].classList.remove('active')
    event.target.classList.add('active')

    return event.target.innerText
  }

  if (event.target.classList.contains('dropdown-placeholder')) {
    let dropdownBlock = event.target.parentElement;
    if (!dropdownBlock.classList.contains('open'))
      dropdownBlock.classList.add('open')

    // throw 'no action here';
    return false
  }

  // throw 'no action here';
  return false
}

module.exports = dropdown