const generateDate = require('./date')

module.exports = (className, params) => {
  return `
    <article class="${className}-content_block">
      <figure class="${className}-image">
        <img class="${className}-image-image" src="assets/images/common/${params.img.src}" alt="${params.img.alt}">
      </figure>
      <div class="${className}-column">
        <div class="${className}-shrink">
          <header class="${className}-theme">${params.theme}</header>
          <div class="${className}-card">
            <h4 class="${className}-text">${params.title}</h4>
            <div class="${className}-block_stats block_stats">
              <a href="#" class="block_stats-date">${generateDate(params.date)}</a>
              <a href="#" class="block_stats-views">${params.views}</a>
            </div>
            <div class="${className}-actions">
              <button class="${className}-button button">Читати</button>
              <div class="${className}-bookmark bookmark-block"><img class="bookmark-block-image" src="assets/images/UI/bookmark_yellow_big.svg"
                  alt="bookmark icon"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  `
}