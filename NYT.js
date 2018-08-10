
var variable = "ben bernanke"
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

var button = $("<button>");


$('#submit').on('click',function(){
    var search = $('#search').val()
    var numRecords = $('#NumRecords').val()
    var startYear =($('#StartYear').val())
    var endYear = ($('#EndYear').val())
    
    url += '?' + $.param({
        'api-key': "58f2f70504d841bfa279c876969f1357",
        'q': search,
        'begin_date': "20150622",
        'end_date': "20180810",
        'page': 10
      });
      

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
        
      console.log(result);
    //   var content = JSON.stringify(result)
    for (var i = 0;i<numRecords;i++){
        var link = result.response.docs[i].web_url
        var newItem = $('<a>').attr('href',link)
        var title = $('<div>').html(result.response.docs[i].headline.main)
        var year = $('<div>').html(result.response.docs[i].pub_date.slice(0,10))
        var author = $('<div>').html(result.response.docs[i].byline.original)
        newItem.append(title,author,year)
        $('#TopArticles').append(newItem)
    }

    }).fail(function(err) {
      throw err;
    })




})

$('#clear').on('click',function(){
   $('#search').val('')
   $('#NumRecords').val('')
   $('#StartYear').val('')
   $('#EndYear').val('')
})

  

// $("#submit").on("click", function() {

// });