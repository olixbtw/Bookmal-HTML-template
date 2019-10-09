import articles from '../_data/articles'
import debounce from 'lodash/debounce'
const search = document.getElementById('search')
const closeBtn = search.getElementsByClassName('search-close')[0]
const searchList = search.getElementsByClassName('search-result_list')[0]
const searchInput = search.getElementsByClassName('search-input')[0]

const openSearch = () => {
  if (!search.classList.contains('open')) {
    searchInput.value = ''
    searchList.innerHTML = ''
  }
  search.classList.toggle('open')
}

const closeSearch = () => {
  search.classList.remove('open')
}

const addItem = () => {
  searchList += `
    <li>
      <span class="search-result_text">Список пустий</span>
    </li>
  `
}

const initiateSearch = debounce((event) => {
  searchList.innerHTML = '';
  if (event.target.value.toLowerCase().replace(' ', '')) {
    let foundArticles = articles.filter(item =>
      item.title.toLowerCase().replace(' ', '')
        .match(event.target.value.toLowerCase().replace(' ', ''))
    )

    foundArticles.forEach(el => {
      searchList.innerHTML += `
      <li class="search-result_item">
        <a href="${el.link}" class="search-result_link">
          <img src="./assets/images/common/${el.img.src}" alt="${el.img.src}" class="search-result_image">
          <span class="search-result_text">${el.title}</span>
        </a>
      </li>
      `
    });

    if (foundArticles.length === 0)
      searchList.innerHTML += `
        <li class="search-result_item">
          <span class="search-result_text">Список пустий</span>
        </li>
      `
  }
}, 500)

searchInput.addEventListener('input', initiateSearch)
closeBtn.addEventListener('click', closeSearch)
document.getElementsByClassName('main_header-header_icon--search')[0].addEventListener('click', openSearch)



