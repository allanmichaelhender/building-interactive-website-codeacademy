import { flattenObjectValuesIntoArray, structureBookAsHtmlHelper, renderBooksToDom } from './helper.js';
import { books } from './bookList.js';


// Click handler for search button
const captureSearchValue = () => {
  const input = document.getElementById('search-bar');
  console.log('yes')

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


const searchBtnClickHandler = (booksArr) => {
  const searchVal = captureSearchValue();
  const filteredBooks = filterBooks(searchVal, booksArr)
  const booksAsHtml = structureBooksAsHtml(filteredBooks);

  renderBooksToDom(booksAsHtml);
  
}

const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });