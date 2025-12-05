import { flattenObjectValuesIntoArray, structureBookAsHtmlHelper, renderBooksToDom } from './helper.js';
import books from './bookList.js';

// Click handler for search button
const captureSearchValue = () => {
  const input = document.getElementById('search-bar');
  return input.value
};

// Filter books based on search input
const filterBooks = (str, booksArr) => {
  const returnArr = booksArr.filter( book => book.tags.includes(str));
  return returnArr;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (booksArr) => {
  const bookElements = [];
  
  for ( const book of booksArr ) {
    bookElements.push(structureBookAsHtmlHelper(book))
  }
  
  return bookElements;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (booksArr) => {
  const searchVal = captureSearchValue();
  const filteredBooks = filterBooks(searchVal, booksArr)
  const booksAsHtml = structureBooksAsHtml(filteredBooks);

  renderBooksToDom(booksAsHtml);
  
}

// Grab search button from the DOM
const searchBtn = document.getElementById('search-btn');

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });