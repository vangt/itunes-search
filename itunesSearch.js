"use strict"

function searchItunes(){
	var searchInput = document.getElementById("searchBar").value;
	//Do something if input has spaces
	
	var searchLink = "https://itunes.apple.com/search?term=" + searchInput + "&limit=5";

	
	$.getJSON(searchLink, function(data){
		console.log(data);
	});
}
