const quotesContent = document.querySelector('.quotes__content');
const shuffleButton = document.querySelector('.quotes__shuffle');
const CATEGORIES = ['motivation', 'wisdom', 'humour', 'love'];
const API_URL = 'https://dummyjson.com/quotes/random/6';

function getRandomCategory() {
  const randomIndex = Math.floor(Math.random() * CATEGORIES.length);

  return CATEGORIES[randomIndex];
}

function renderLoading() {
  quotesContent.innerHTML = Array(6)
    .fill(
      `
      <article class="quotes__card quotes__card--loading">

        <div class="quotes__skeleton-line"></div>

        <div class="quotes__skeleton-line quotes__skeleton-line--short"></div>

        <div class="quotes__footer">
          <div class="quotes__skeleton-author"></div>

          <div class="quotes__skeleton-tag"></div>
        </div>

      </article>
    `
    )
    .join('');
}

function renderQuotes(quotes) {
  quotesContent.innerHTML = quotes
    .map((quote) => {
      return `
        <article class="quotes__card">
          <figure class="quotes__figure">

            <blockquote class="quotes__text">
              “${quote.quote}”
            </blockquote>

            <figcaption class="quotes__footer">
              <cite class="quotes__author">
                ${quote.author}
              </cite>

              <span class="quotes__tag">
                ${getRandomCategory()}
              </span>
            </figcaption>

          </figure>
        </article>
      `;
    })
    .join('');
}

async function fetchQuotes() {
  renderLoading();

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch quotes');
    }

    const quotes = await response.json();

    renderQuotes(quotes);
  } catch (error) {
    console.error(error);
  }
}

fetchQuotes();

shuffleButton.addEventListener('click', fetchQuotes);
