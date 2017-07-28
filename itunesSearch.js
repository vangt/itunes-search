"use strict"

function searchItunes(){
    
    $("#artistTable").empty();

    var appear = document.getElementById("artistTable");
    if (appear.style.display === "none") {
        appear.style.display = "block";
    }
   
	var searchInput = document.getElementById("searchBar").value;
	//Do something if input has spaces

	var searchLink = "https://itunes.apple.com/search?term=" + searchInput + "&limit=5";

	$.getJSON(searchLink, function(data){
		var artistData = "";
		var d = data.results;
		console.log(data);
		$.each(d, function(index, name){
			artistData += "<tr>";
            artistData += "<td><a href=\"" + name.collectionViewUrl + "\" target=\"_blank\"><img src=\"" + name.artworkUrl100 + "\"></a></td>";            
            artistData += "<td>" + name.artistName + "</td>";
            artistData += "<td>" + name.trackName + "</td>";
            artistData += "<td>" + name.collectionName + "</td>";
            artistData += "<td>" + name.trackPrice + "</td>";
            artistData += "<td>" + name.trackExplicitness +"</td>";
            artistData += "<td>" + name.trackTimeMillis/60000 +"</td>";            
			artistData += "</tr>"		
		});
		$("#artistTable").append(artistData);
		//console.log(artistData);		
	});
}
