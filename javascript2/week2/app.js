'use strict';

//number 1.1
  let bookTitles = ["harry_potter_chamber_secrets", "rich_dad_poor_dad", "alchemist", "think_and_grow_rich", "eat_pray_love", "barack_obama", "pride_and_prejudice", "after_lives", "unfinished", "the_little_price"]


  //number 1.3

  function makeUl() {
    let ul = document.createElement('ul');
    ul.innerText = "Available Books"
    for (let i = 0; i < bookTitles.length; i++) {
   
      let list = bookTitles[i]
      ul.setAttribute("id", "unordered_list")
      ul.innerHTML += `<li>${list}</li>`;
    }
    return ul;
  }
  document.body.append(makeUl());


  // number 1.4

  let booksObjects = {
    book1: {
      "title": "harry_potter_chamber_secrets",
      "language": "English",
      "author": "Harry",
      "ratings": 10
    },
    book2: {
      "title": "rich_dad_poor_dad",
      "language": "English",
      "author": "Robert T. Kiyosaki",
      "ratings": 10
    },
    book3: {
      "title": "alchemist",
      "language": "English",
      "author": "Paulo Coelho",
      "ratings": 8
    },
    book4: {
      "title": "think_and_grow_rich",
      "language": "English",
      "author": "Napoleon Hill",
      "ratings": 9

    },
    book5: {
      "title": "eat_pray_love",
      "language": "Mandarin",
      "author": "Elizabeth Gilbert",
      "ratings": 10
    },
    book6: {
      "title": "barack_obama",
      "language": "English",
      "author": "Barack Obama",
      "ratings": 7
    },
    book7: {
      "title": "pride_and_prejudice",
      "language": "English",
      "author": "Jane Austen",
      "ratings": 5

    },
    book8: {
      "title": "after_lives",
      "language": "English",
      "author": "Abdulrazak Gurnah",
      "ratings": 9
    },
    book9: {
      "title": "unfinished",
      "language": "Hindi",
      "author": "Priyanka Chopra Jonas",
      "ratings": 6
    },
    book10: {
      "title": "the_little_price",
      "language": "French",
      "author": "Antoine De Saint-Exupery",
      "ratings": 7
    }
  }

//1.7 img src

booksObjects.book1.img = './images/1. H.P.jpeg'
booksObjects.book2.img = './images/2. R.D.P.D.jpeg'
booksObjects.book3.img = './images/3. Alchemist.jpeg'
booksObjects.book4.img = './images/4. think-and-grow-rich.jpeg'
booksObjects.book5.img = './images/5. eat.pray.love.jpeg'
booksObjects.book6.img = './images/6. B.O.jpeg'
booksObjects.book7.img = './images/7. Pride-And-Prejudice.jpeg'
booksObjects.book8.img = './images/8. after_lives.jpeg'
booksObjects.book9.img = './images/9. unfinished.jpeg'
booksObjects.book10.img = './images/10. little prince.jpeg'

//console.log(booksObjects)


  //1.5 


  function makeHtmlElements() {
    let body = document.querySelector("body")
    for (const key in booksObjects) {
      let myDiv = document.createElement("div");

      let bookName = document.createElement("h2");
      bookName.innerHTML = booksObjects[key].title

      let bookImage = document.createElement("img")
      bookImage.setAttribute("class", "imageStyle")
      bookImage.src = booksObjects[key].img;


    
      let bookLanguage = document.createElement("p");
      bookLanguage.innerHTML = 'Language: ' + booksObjects[key].language
    
      let bookAuthor = document.createElement("p");
      bookAuthor.innerHTML = 'Author: ' + booksObjects[key].author
    

      let bookRating = document.createElement("p")
      bookRating.innerHTML = 'Rating: ' + booksObjects[key].ratings
   
      body.appendChild(myDiv)
      myDiv.appendChild(bookName);
      myDiv.appendChild(bookImage);
      myDiv.appendChild(bookLanguage);
      myDiv.appendChild(bookAuthor);
      myDiv.appendChild(bookRating);

    }
  }

  makeHtmlElements()
  
  
  

/*
  Object.keys(booksObjects)

function imgElements() {
  let body = document.querySelector("body")
  for (const bookImg in booksObjects) {
    
    let bookImage = document.createElement("img")
    bookImage.setAttribute("class", "imageStyle")
    bookImage.src = booksObjects[bookImg].img;

    document.body.appendChild(bookImage);
    
  }
}
imgElements()
     
*/
  
  //1.8

  //for (let key in booksObjects) {
  //console.log(`${key}: ${booksObjects[key]}`);
  //}
  // creating img element and putting source of each book


  /*
  Object.keys(booksObjects).forEach(function (key, index) {
    key = img
     index = 
  }) */

  
  

