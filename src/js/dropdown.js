const dropdown = () => {
  if (event.target.classList.contains('dropdown-item')) {
    let dropdownBlock = event.target.parentElement.parentElement;

    dropdownBlock.getElementsByClassName('dropdown-placeholder')[0].innerText = event.target.innerText

    if (dropdownBlock.classList.contains('open'))
      dropdownBlock.classList.remove('open')

    let items = dropdownBlock.getElementsByClassName('dropdown-list')[0].children;
    for (let i = 0; i < items.length; i++)
      items[i].classList.remove('active')
    event.target.classList.add('active')
    //  - change active item
    // !other actions
  }

  if (event.target.classList.contains('dropdown-placeholder')) {
    let dropdownBlock = event.target.parentElement;
    if (!dropdownBlock.classList.contains('open'))
      dropdownBlock.classList.add('open')
    // !other actions
  }

}

module.exports = dropdown