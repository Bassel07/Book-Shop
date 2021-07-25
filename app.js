'use strict'

let booksnames = ['1','2','3','4','5'] 

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

book.prototype.calcTotal = function calcTotal(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; 
          }
    }
}

