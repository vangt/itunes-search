"use strict"

function searchItunes(){
	var searchInput = document.getElementById("searchBar").value;
	//Do something if input has spaces

	var searchLink = "https://itunes.apple.com/search?term=" + searchInput + "&limit=5";

	$.getJSON(searchLink, function(data){
		var artistData = "";
		var d = data.results;
		console.log(data);
		$.each(d, function(index, name){
			artistData += "<tr>";
			artistData += "<td>" + name.artistName + "</td>";
			artistData += "<td>" + name.artistId + "</td>";
            artistData += "<td>" + name.trackName + "</td>";
			artistData += "</tr>"
		$("#artistTable").html(artistData);
		});
		console.log(artistData);		
	});
}
