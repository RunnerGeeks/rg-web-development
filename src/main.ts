import './style.css'
import { setupCounter } from './counter.ts'
import fantasyBooks from '../json/fantasy-books.json'

// Function to create a card for each book
function createBookCard(book) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card', 'mb-3');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.textContent = book.title;

  const author = document.createElement('p');
  author.classList.add('card-text');
  author.textContent = `Author: ${book.authors[0].name}`;

  const image = document.createElement('img');
  image.src = book.formats["image/jpeg"];
  image.classList.add('w-image');

  // Add other book properties as needed (e.g., subjects, formats, etc.)

  // Creamos el div para la imagen y para el text
  const cardDivImage = document.createElement('div');
  const cardDivText = document.createElement('div');

  // Agregamos la imagen a su div
  cardDivImage.appendChild(image);

  //Agregamos el texto a su div
  cardDivText.appendChild(title);
  cardDivText.appendChild(author);

  cardBody.appendChild(cardDivImage);
  cardBody.appendChild(cardDivText);
  cardDiv.appendChild(cardBody);

  return cardDiv;
}

// Get the container where cards will be added
const container = document.getElementById('bookContainer');

// Loop through the books and create cards dynamically
fantasyBooks.results.forEach((book) => {
  const bookCard = createBookCard(book);
  container.appendChild(bookCard);
});


setupCounter(document.querySelector('#counter')!, fantasyBooks.results)
