const $ = require('jquery');
/*$(".img").css("height", window.innerHeight + "px");*/
$(document).on("click", getResults());
$(document).on("keypress", function(a){
  console.log(a);
  if (a.keyCode === 13){
    getResults();
  };
});
function getResults(){
  $.getJSON("http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&titles=Main+Page&generator=search&exlimit=10&exintro=1callback=?&inprop=url&gsrsearch=" + $("#search").val())
  .then(function(resp, txt, xhr){
    console.log(resp);
    for (var i in resp.query.pages){
    $("#result").append(resp.query.pages[i].extract);
   };
  });
};
