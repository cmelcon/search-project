const $ = require('jquery');
$(document).on("keypress", function(a){
  console.log(a);
  if (a.keyCode === 13){
    $.getJSON("http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exlimit=10&callback=?&exintro=1&gsrsearch=" + $("#search").val())
    .then(function(resp, txt, xhr){
      console.log(resp);
      for (var i in resp.query.pages){
      $("#result").append(resp.query.pages[i].extract);
     };
    });
  };
});
