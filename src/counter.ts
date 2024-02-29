export function setupCounter(element: HTMLButtonElement, books: any) {

  function sortArrayOfString(array: any): any {
    let copyArray: any = array.slice()

    for (let i: number = 0; i < copyArray.length; i++) {
      for (let j: number = i + 1; j < copyArray.length; j++) {
        if (copyArray[i].title.localeCompare(copyArray[j].title) > 0) {
          let temp: any = copyArray[i]
          copyArray[i] = copyArray[j]
          copyArray[j] = temp
        }
      }
    }

    return copyArray
  }

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

  const setCounter = () => {
    if (element.innerHTML == 'Ordenar Ascendente') {
      element.innerHTML = 'Ordenar Descendente';
      console.log(sortArrayOfString(books));

      const container = document.getElementById('bookContainer');

      let count = container.getElementsByClassName('card').length;
      console.log(count);

      for (let i = 0; i < count; i++) {
        container.removeChild(container?.getElementsByClassName('card')[0]);
      }


      sortArrayOfString(books).forEach((book) => {
        const bookCard = createBookCard(book);
        container.appendChild(bookCard);
      });


    } else {
      element.innerHTML = 'Ordenar Ascendente'
    }

  }
  element.addEventListener('click', () => setCounter())
  setCounter()
}
