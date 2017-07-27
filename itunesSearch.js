"use strict"

function searchItunes(){
	var searchInput = document.getElementById("searchBar").value;
	//Do something if input has spaces
	
	var searchLink = "https://itunes.apple.com/search?term=" + searchInput + "&limit=5";

	var dataResults = [];

	dataResults = $.getJSON(searchLink, function(data){
        console.log(data);
        getNames(data);
        return data;
	});

    var x = dataResults;

}

function getNames(data){
    document.getElementById("searchResults").innerHTML = data.results[0].artistName;
}