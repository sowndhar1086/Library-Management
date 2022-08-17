//document.getElementById("search").addEventListener(onclick, filter(form));


function filter(form) {
  //alert(form.bookName.value);

  var bookName = form.bookName.value;
  var author = form.author.value;
  search(bookName, author);
  //return false;
}


function search(bookName, author) {
  let data='';

  //document.querySelector("result-container").innerHTML = " ";
  $('.result-container').html("");
  document.getElementsByClassName("result-container").innerHTML = " ";


  //regex
  var regexT = new RegExp(bookName);
  var regexA = new RegExp(author);
  var count = 0;

  //json
  $.getJSON("./src/data/books.json", function(json) {
    book = json; 
    
    for(var i = 0; i < book.length; i++){
      console.log(book[i].title)
      var matchesTitle = regexT.test(book[i].title);
      var matchesAuthor = regexA.test(book[i].author);

      if (matchesTitle && matchesAuthor) {
        data = '        <div class="card">          <div class="card-image waves-effect waves-block waves-light">            <img class="activator" src="./'+book[i].imageLink+'">          </div>          <div class="card-content">            <span class="card-title activator grey-text text-darken-4">: '+ book[i].title +'<i class="material-icons right">more_vert</i></span>          </div>          <div class="card-reveal">            <i class="card-title material-icons right">close</i><br></i>            <span class="s6 title grey-text text-darken-4">Author:</span>            <ul class="collection with-header">              <li class="collection-header">'+book[i].author+'</li>            </ul>                        <span class="s6 title grey-text text-darken-4">Book Name:</span>            <ul class="collection with-header">              <li class="collection-header">'+book[i].title+'</li>            </ul>            <span class="s6 title grey-text text-darken-4">Published Year:</span>            <ul class="collection with-header">              <li class="collection-header">'+book[i].year+'</li>            </ul>            <span class="s6 title grey-text text-darken-4">Country:</span>            <ul class="collection with-header">              <li class="collection-header">'+book[i].country+'</li>            </ul>            <span class="s6 title grey-text text-darken-4">Pages:</span>            <ul class="collection with-header">              <li class="collection-header">'+book[i].pages+'</li>            </ul>            <span class="s6 title grey-text text-darken-4">Language:</span>            <ul class="collection with-header">              <li class="collection-header">'+book[i].language+'</li>            </ul>            <p></p>          </div>        </div>';
        $('.result-container').append(data);
        count++;
      }
      
    }
  });
 //return false;
}








/*
$('#txt-search').keyup(function(){
  var searchField = $(this).val();
if(searchField === '')  {
$('#filter-records').html('');
return;
}

  var regex = new RegExp(searchField, "i");
  var output = '<div class="row">';
  var count = 1;
$.each(data, function(key, val){
if ((val.employee_salary.search(regex) != -1) || (val.employee_name.search(regex) != -1)) {
output += '<div class="col-md-6 well">';
output += '<div class="col-md-3"><img class="img-responsive" src="'+val.profile_image+'" alt="'+ val.employee_name +'" /></div>';
output += '<div class="col-md-7">';
output += '<h5>' + val.employee_name + '</h5>';
output += '<p>' + val.employee_salary + '</p>'
output += '</div>';
output += '</div>';
if(count%2 == 0){
output += '</div><div class="row">'
}
count++;
}
});
output += '</div>';
$('#filter-records').html(output);
});
*/