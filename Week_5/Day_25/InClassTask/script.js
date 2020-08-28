
var song = {
  "songName": "test1",
  "songURL": "test1"
};

function addSong() {

	event.preventDefault();

	var inputVal1 = document.getElementById("name").value;
	var inputVal2 = document.getElementById("url").value;

  var  tempSong = {
  	songName : inputVal1,
  	songURL : inputVal2
  };
  	console.log('Sending Song:', tempSong);
  console.log('Posting request to Mock API...');
  fetch('https://5f3f665344212d0016fecac5.mockapi.io/songs', {
    method: 'POST',
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(tempSong)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('Created Song:', tempSong);
  });
}

//addSong(song);

async function fetchSongs() {
	event.preventDefault();
    let response = await fetch('https://5f3f665344212d0016fecac5.mockapi.io/songs');
    let data = await response.json();
    console.log(data);

    var baseDiv = document.getElementById("myDiv");
    data.forEach(function (item) {
    	console.log(item.songURL);
    	var audioDiv = document.createElement("div");

        var audioButton = document.createElement("audio");
        audioButton.setAttribute("src",item.songURL);
    	//var audioSource = document.createElement("source");
    	//audioSource.setAttribute("src", item.songURL);
    	//audioButton.appendChild(audioSource);
    	audioDiv.appendChild(audioButton);

    	baseDiv.appendChild(audioDiv);
    });
    
}

//fetchSongs();