
        // indexof/startxith/endwith/split/toLowerCase/toUpperCase

var favoriteBooks=[
    "Harry Potter", "Game of Thrones","Overlord"
]
     
 function printFavoriteBooks(){
        for( var y=0;y<favoriteBooks.length; y+=1){
            var book=favoriteBooks[y]
            console.log(book) 
        }
      }

      function addFavoriteBook(bk){
        var n=bk.includes("Great")
          if (n!=true){
            favoriteBooks.push(bk)
          }
          return printFavoriteBooks()
      }

      



     

         


