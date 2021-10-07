class Bookshelf {
  constructor() {
    this.favoriteBooks = []
  }
  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
        this.favoriteBooks.push(bookName)
    }
  }
  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`) // Note that without "String()", 'favoriteBooks.length' is still getting coerced from a number to a string (because it's being put into a string), but passing it into 'String()' makes that number-to-string coercion explicit, just so it's clear what's happening when you look at it later. Simpson advises this sort of thing to increase clarity.
    for (let bookName of this.favoriteBooks) {
        console.log(bookName)
    }
  }
}

let BOOK_API = "https://some.url/api"

// NOTE from Simpson: don't modify this function at all
function fakeAjax(url,cb) { // 'cb' stands for 'callback', i.e., a callback function
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS"
    ])
  },500)
}
//////////////////////////////////////////////////////

function loadBooks(theBookshelf) { // Note that 'theBookshelf' is a parameter representing an instance of the Bookshelf class.
  fakeAjax(BOOK_API, function onBooks(bookNamesArr) { // this function expression is only named ('onBooks') for clarity. Simpson likes to do this kind of thing
    for (let bookName of bookNamesArr) {
      theBookshelf.addFavoriteBook(bookName)
    }
    theBookshelf.printFavoriteBooks()
  })
}

let myBooks = new Bookshelf()
loadBooks(myBooks)

/* What's logged (here just so I don't need to share on Vercel as well):

Line 11: Favorite Books: 3
Line 13: A Song of Ice and Fire
Line 13: Crime & Punishment
Line 13: You Don't Know JS

*/