
//let baseContainerDiv = document.getElementById("baseContainerDiv");

let topSongsTabContent = document.getElementById("ulTopSongs");
if (topSongsTabContent != undefined && topSongsTabContent != null) {
    topSongsTabContent.addEventListener("click", function () {
        getSongsFromRapidAPIShazamAndCreateCards("list-artist-top-tracks");
    })
}

let recommendedSongsTabContent = document.getElementById("ulRecommendedSongs");
if (recommendedSongsTabContent != undefined && recommendedSongsTabContent != null) {
    recommendedSongsTabContent.addEventListener("click", function () {
        getSongsFromRapidAPIShazamAndCreateCards("list-recommendations");
    })
}

let searchSongsTabContent = document.getElementById("SongSearchButton");
if (searchSongsTabContent != undefined && searchSongsTabContent != null) {
    searchSongsTabContent.addEventListener("click", function () {
        let searchTerm = (<HTMLInputElement>document.getElementById("SongSearchBox")).value;
        getSongsFromRapidAPIShazamAndCreateCards("search" + "," + searchTerm);
    })
}

let apiIdTop = "40008598";
let apiKeyRecommended = "484129036";
let finalURL = "";

/*
async function hitAPI(url) {
    let data = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'x-rapidapi-host': 'shazam.p.rapidapi.com',
            'x-rapidapi-key': '7e223cefcemsh60ad0ecc523e3cfp116603jsn23509456d81d',
            'useQueryString': 'true'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    let arr = await data.json();
    return arr;
}
*/

async function getSongsFromRapidAPIShazamAndCreateCards(type: string) {

    console.log("calling fucntion to get data from api");

    let contentDiv;

    if (type.includes("top")) {
        finalURL = "https://shazam.p.rapidapi.com/songs/" + type + "?id=" + apiIdTop;
        contentDiv = document.getElementById("TopSongs");
    } else if (type.includes("recommendations")) {
        finalURL = "https://shazam.p.rapidapi.com/songs/" + type + "?key=" + apiKeyRecommended;
        contentDiv = document.getElementById("RecommendedSongs");
    } else {
        let termArr = type.split(",");
        let term = termArr[1];
        let searchType = termArr[0];

        finalURL = "https://shazam.p.rapidapi.com/" + searchType + "?term=" + term;
        contentDiv = document.getElementById("SearchContent");
    }

    if (contentDiv != undefined && contentDiv != null) {
        contentDiv.innerHTML = "";
    }

    //let tracks;

    console.log(finalURL);
    //let response = await hitAPI(finalURL);

    /*
    let response = await fetch(finalURL,{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'x-rapidapi-host': 'shazam.p.rapidapi.com',
	      'x-rapidapi-key': '7e223cefcemsh60ad0ecc523e3cfp116603jsn23509456d81d',
	      'useQueryString': 'true'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      */

    fetch(finalURL, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'x-rapidapi-host': 'shazam.p.rapidapi.com',
            'x-rapidapi-key': '7e223cefcemsh60ad0ecc523e3cfp116603jsn23509456d81d',
            'useQueryString': 'true'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then((response) => response.json())
        .then(function (data) {
            //let data = OuterData.json();

            console.log(data);
            let tracks = data.tracks;
            console.log(tracks);

            if(type.includes("search")){
                let temp = tracks.hits;
                tracks = temp;
                console.log("search request");
                console.log("tracks : "+tracks);
            }

            //tracks.forEach((track) => {
            for(let i = 0 ; i < tracks.length ; i ++){
                
                let track;

                if(type.includes("search")){
                    let temp2 = tracks[i].track;
                    track = temp2;
                    console.log("final object for search");
                    console.log(track);
                }else{
                    track = tracks[i];
                }

                console.log("iterating  each track");
                let cardOuterContainer = document.createElement("div");
                cardOuterContainer.setAttribute("class","container");
                cardOuterContainer.setAttribute("style", "margin-top:30px;width:100%;");

                let cardOuterRow = document.createElement("div");
                cardOuterRow.setAttribute("class", "row");

                let cardDiv = document.createElement("div");
                cardDiv.setAttribute("class", "card");
                cardDiv.setAttribute("style","width:100%");

                let cardBodyDiv = document.createElement("div");
                cardBodyDiv.setAttribute("class", "row card-body");

                let trackImg = document.createElement("img");
                trackImg.setAttribute("class","img-thumbnail");
                trackImg.setAttribute("style","width:350px;height:250px;");
                //trackImg.setAttribute("class", "card-img-top");
                trackImg.setAttribute("src", track.images.coverart);

                let trackTitle = document.createElement("h5");
                trackTitle.setAttribute("class", "card-title");
                trackTitle.innerHTML = track.title + " By " + track.subtitle;

                let trackAudio = document.createElement("audio");
                trackAudio.setAttribute("controls", "controls");

                let trackAudioSource = document.createElement("source");
                trackAudioSource.setAttribute("src", track.hub.actions[1].uri);

                trackAudio.appendChild(trackAudioSource);

                let col8CardBodyDiv = document.createElement("div");
                col8CardBodyDiv.setAttribute("class","col-md-8");
                col8CardBodyDiv.appendChild(trackTitle);
                col8CardBodyDiv.appendChild(trackAudio);

                let col4CardBodyDiv = document.createElement("div");
                col4CardBodyDiv.setAttribute("class","col-md-4");
                col4CardBodyDiv.setAttribute("style","text-align:right");
                col4CardBodyDiv.appendChild(trackImg);

                cardBodyDiv.appendChild(col8CardBodyDiv);
                cardBodyDiv.appendChild(col4CardBodyDiv);

                //cardDiv.appendChild(trackImg);
                cardDiv.appendChild(cardBodyDiv);

                cardOuterRow.appendChild(cardDiv);

                cardOuterContainer.appendChild(cardOuterRow);

                contentDiv.appendChild(cardOuterContainer);
            }
            //});

        })
        .catch(function (err) {
            // This is where you run code if the server returns any errors
            console.log(err);
        });



}

class AudioPlaylist {

    constructor(){

    }

    getTopTracks() {
        getSongsFromRapidAPIShazamAndCreateCards("list-artist-top-tracks");
    }

    getRecommendedSongs(){
        getSongsFromRapidAPIShazamAndCreateCards("list-recommendations");
    }

    getSearchTacks(searchTerm:string){
        getSongsFromRapidAPIShazamAndCreateCards("search"+","+searchTerm);       
    }

}

/*
class AudioCard{
    title:string;
    image:string;
    audio:string;

    constructor(){

    }
}
*/

let playList = new AudioPlaylist();
playList.getSearchTacks("linkinpark");
