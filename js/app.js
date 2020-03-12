
        // indexof/startxith/endwith/split/toLowerCase/toUpperCase

var favoriteBooks=[
    "Harry Potter", "Game of Thrones","Overlord"
]
     
 function printFavoriteBooks(){
        for( let y of favoriteBooks){
            console.log(y) 
        }
      }

      function addFavoriteBook(book){
        var n=book.includes("Great")
          if (n!=true){
            favoriteBooks.push(book)
          }
          return printFavoriteBooks()
      }
      



     

         


