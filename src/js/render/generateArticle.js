module.exports = (className, params) => {
  return `
    <article class="${className}-content_block">
      <figure class="${className}-image">
        <img src="assets/images/common/${params.img.src}" alt="${params.img.alt}">
      </figure>
      <div class="${className}-column">
        <div class="${className}-shrink">
          <header class="${className}-category">${params.category}</header>
          <div class="${className}-card">
            <h4 class="${className}-text">${params.title}</h4>
            <div class="${className}-block_stats block_stats">
              <a href="#" class="block_stats-date">${params.date}</a>
              <a href="#" class="block_stats-views">${params.views}</a>
            </div>
            <div class="${className}-actions">
              <button class="${className}-button button">Читати</button>
              <div class="${className}-bookmark bookmark-block"><img src="assets/images/UI/bookmark_big.svg"
                  alt="bookmark icon"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  `
}