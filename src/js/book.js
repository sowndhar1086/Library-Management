var book;
/*
$.getJSON("./src/data/books.json", function(json) {
  book = json; 
  for(var i = 0; i < book.length; i++){
    console.log(book.title)
  }
});
*/

  document.addEventListener("DOMContentLoaded", () => {
    const elems = document.querySelectorAll("select");
    const instances = M.FormSelect.init(elems);
  });

$(document).ready(function() {
  let data='';

  $.getJSON("./src/data/books.json", function(json) {
    book = json; 
    
    for(var i = 0; i < book.length; i++){
      //console.log(book[i].title)

      data = '        <div class="card">          <div class="card-image waves-effect waves-block waves-light">            <img class="activator" src="./'+book[i].imageLink+'">          </div>          <div class="card-content">            <span class="card-title activator grey-text text-darken-4">: '+ book[i].title +'<i class="material-icons right">more_vert</i></span>          </div>          <div class="card-reveal">            <i class="card-title material-icons right">close</i><br></i>            <span class="s6 title grey-text text-darken-4">Author:</span>            <ul class="collection with-header">              <li class="collection-header">'+book[i].author+'</li>            </ul>                        <span class="s6 title grey-text text-darken-4">Book Name:</span>            <ul class="collection with-header">              <li class="collection-header">'+book[i].title+'</li>            </ul>            <span class="s6 title grey-text text-darken-4">Published Year:</span>            <ul class="collection with-header">              <li class="collection-header">'+book[i].year+'</li>            </ul>            <span class="s6 title grey-text text-darken-4">Country:</span>            <ul class="collection with-header">              <li class="collection-header">'+book[i].country+'</li>            </ul>            <span class="s6 title grey-text text-darken-4">Pages:</span>            <ul class="collection with-header">              <li class="collection-header">'+book[i].pages+'</li>            </ul>            <span class="s6 title grey-text text-darken-4">Language:</span>            <ul class="collection with-header">              <li class="collection-header">'+book[i].language+'</li>            </ul>            <p></p>          </div>        </div>';


  $('.result-container').append(data);
      
    }
  });
});



// ***** WARNING DO NOT DELETE, BELOW COMMENTED LINES *****


/*
'
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="./'+book[i].imageLink+'">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">: '+ book[i].title +'<i class="material-icons right">more_vert</i></span>
          </div>
          <div class="card-reveal">

            <i class="card-title material-icons right">close</i><br></i>
            <span class="s6 title grey-text text-darken-4">Author:</span>
            <ul class="collection with-header">
              <li class="collection-header">'+book[i].author+'</li>
            </ul>
            
            <span class="s6 title grey-text text-darken-4">Book Name:</span>
            <ul class="collection with-header">
              <li class="collection-header">'+book[i].title+'</li>
            </ul>

            <span class="s6 title grey-text text-darken-4">Published Year:</span>
            <ul class="collection with-header">
              <li class="collection-header">'+book[i].year+'</li>
            </ul>

            <span class="s6 title grey-text text-darken-4">Country:</span>
            <ul class="collection with-header">
              <li class="collection-header">'+book[i].country+'</li>
            </ul>

            <span class="s6 title grey-text text-darken-4">Pages:</span>
            <ul class="collection with-header">
              <li class="collection-header">'+book[i].pages+'</li>
            </ul>

            <span class="s6 title grey-text text-darken-4">Language:</span>
            <ul class="collection with-header">
              <li class="collection-header">'+book[i].language+'</li>
            </ul>
            <p></p>
          </div>
        </div>
';
*/