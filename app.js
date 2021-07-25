'use strict'
let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

let books = [];

function book(bookName, bookPages, thePrice){
this.bookName = bookName;
this.bookPages = bookPages;
this.thePrice = thePrice;

books.push(this)
}



