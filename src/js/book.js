var books;

$.getJSON("/src/data/books.json", function(json) {
  books = json; // this will show the info it in firebug console
});

console.log(books);