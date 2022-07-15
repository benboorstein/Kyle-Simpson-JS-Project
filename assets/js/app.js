// maybe a future exercise: redo just with a real API, like from https://icanhazdadjoke.com/


class Bookshelf {
  constructor() {
    this.favoriteBooks = []
  } // no commas just because of how the 'class' syntax is
  addFavoriteBook(bookName) { // in the format more familiar to me: 'addFavoriteBook: function(bookName)...'
    if (!bookName.includes('Great')) {
        this.favoriteBooks.push(bookName)
    }
  }
  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`) // Note that without "String()", 'favoriteBooks.length' is still getting coerced from a number to a string (because it's being put into a string), but passing it into 'String()' makes the number-to-string coercion *explicit*, just so it's clear what's happening when you look at it later. Simpson advises this sort of thing to increase clarity. Robert, too.
    for (let bookName of this.favoriteBooks) {
        console.log(bookName)
    }
  }
}

let BOOK_API = 'https://some.url/api'

// NOTE from Simpson: don't modify this function at all
function fakeAjax(url,cb) { // 'cb' stands for 'callback', i.e., a callback function
  setTimeout(function fakeLoadingDelay() { // this function expression is only named ('fakeLoadingDelay') for clarity. Simpson likes to do this kind of thing
    cb([
      'A Song of Ice and Fire',
      'The Great Gatsby',
      'Crime & Punishment',
      'Great Expectations',
      'You Don\'t Know JS'
    ])
  },500)
}
//////////////////////////////////////////////////////

function loadBooks(theBookshelf) { // Note that 'theBookshelf' is a parameter representing a new instance of the 'Bookshelf' class.
  fakeAjax(BOOK_API, function onBooks(bookNamesArr) { // this function expression is only named ('onBooks') for clarity...
    for (let bookName of bookNamesArr) {
      theBookshelf.addFavoriteBook(bookName)
    }
    theBookshelf.printFavoriteBooks()
  })
}

let myBooks = new Bookshelf()
loadBooks(myBooks)