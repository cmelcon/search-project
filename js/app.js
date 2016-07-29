const $ = require('jquery');
$("#bt").on("click", getResults);
$(document).on("keypress", function(a){
	console.log(a);
	if (a.keyCode === 13){
		getResults();
	};
});
function getResults(){
	$.getJSON("http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&list=&titles=Main+Page&generator=search&exlimit=10&exintro=1&callback=?&inprop=url&gsrsearch=" + $("#search").val())
	.then(function(resp, txt, xhr){
		console.log(resp);
		for (var i in resp.query.pages){
			$("#result").append("<a href="+resp.query.pages[i].fullurl+">"+resp.query.pages[i].title+"</a>");
		};
	});
};
