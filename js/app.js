
        // indexof/startxith/endwith/split/toLowerCase/toUpperCase


var validation=function(){
    var error= false;
    var bookname= document.getElementById("txt");

    if(bookname.value==""){
      error=true;
      bookname.style.border="2px solid red";
      bookname.focus()
    }
    if(error){
      console.log("error detected");
      return false
    }
    else{
      return true
    }
}

var favoriteBooks=[
    "Harry Potter", "Game of Thrones","Overlord",300
]
     
 function printFavoriteBooks(){
        for( let y of favoriteBooks){
           y=String(y)
            console.log(y) 
            // console.log(typeof y)

        }
      }

      function addFavoriteBook(book){
        var n=book.includes("Great")
          if (n!=true){
            favoriteBooks.push(book)
          }
          return printFavoriteBooks()
      }





     

         


