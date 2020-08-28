//let baseContainerDiv = document.getElementById("baseContainerDiv");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var topSongsTabContent = document.getElementById("ulTopSongs");
if (topSongsTabContent != undefined && topSongsTabContent != null) {
    topSongsTabContent.addEventListener("click", function () {
        getSongsFromRapidAPIShazamAndCreateCards("list-artist-top-tracks");
    });
}
var recommendedSongsTabContent = document.getElementById("ulRecommendedSongs");
if (recommendedSongsTabContent != undefined && recommendedSongsTabContent != null) {
    recommendedSongsTabContent.addEventListener("click", function () {
        getSongsFromRapidAPIShazamAndCreateCards("list-recommendations");
    });
}
var searchSongsTabContent = document.getElementById("SongSearchButton");
if (searchSongsTabContent != undefined && searchSongsTabContent != null) {
    searchSongsTabContent.addEventListener("click", function () {
        var searchTerm = document.getElementById("SongSearchBox").value;
        getSongsFromRapidAPIShazamAndCreateCards("search" + "," + searchTerm);
    });
}
var apiIdTop = "40008598";
var apiKeyRecommended = "484129036";
var finalURL = "";
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
function getSongsFromRapidAPIShazamAndCreateCards(type) {
    return __awaiter(this, void 0, void 0, function () {
        var contentDiv, termArr, term, searchType;
        return __generator(this, function (_a) {
            console.log("calling fucntion to get data from api");
            if (type.includes("top")) {
                finalURL = "https://shazam.p.rapidapi.com/songs/" + type + "?id=" + apiIdTop;
                contentDiv = document.getElementById("TopSongs");
            }
            else if (type.includes("recommendations")) {
                finalURL = "https://shazam.p.rapidapi.com/songs/" + type + "?key=" + apiKeyRecommended;
                contentDiv = document.getElementById("RecommendedSongs");
            }
            else {
                termArr = type.split(",");
                term = termArr[1];
                searchType = termArr[0];
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
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'shazam.p.rapidapi.com',
                    'x-rapidapi-key': '7e223cefcemsh60ad0ecc523e3cfp116603jsn23509456d81d',
                    'useQueryString': 'true'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                //let data = OuterData.json();
                console.log(data);
                var tracks = data.tracks;
                console.log(tracks);
                if (type.includes("search")) {
                    var temp = tracks.hits;
                    tracks = temp;
                    console.log("search request");
                    console.log("tracks : " + tracks);
                }
                //tracks.forEach((track) => {
                for (var i = 0; i < tracks.length; i++) {
                    var track = void 0;
                    if (type.includes("search")) {
                        var temp2 = tracks[i].track;
                        track = temp2;
                        console.log("final object for search");
                        console.log(track);
                    }
                    else {
                        track = tracks[i];
                    }
                    console.log("iterating  each track");
                    var cardOuterContainer = document.createElement("div");
                    cardOuterContainer.setAttribute("class", "margin-top:30px;width:100%;");
                    var cardOuterRow = document.createElement("div");
                    cardOuterRow.setAttribute("class", "row");
                    var cardDiv = document.createElement("div");
                    cardDiv.setAttribute("class", "card border-dark");
                    var cardBodyDiv = document.createElement("div");
                    cardBodyDiv.setAttribute("class", "card-body");
                    var trackImg = document.createElement("img");
                    trackImg.setAttribute("class", "card-img-top");
                    trackImg.setAttribute("src", track.images.coverart);
                    var trackTitle = document.createElement("h5");
                    trackTitle.setAttribute("class", "card-title");
                    trackTitle.innerHTML = track.title + " By " + track.subtitle;
                    var trackAudio = document.createElement("audio");
                    trackAudio.setAttribute("controls", "controls");
                    var trackAudioSource = document.createElement("source");
                    trackAudioSource.setAttribute("src", track.hub.actions[1].uri);
                    trackAudio.appendChild(trackAudioSource);
                    cardBodyDiv.appendChild(trackTitle);
                    cardBodyDiv.appendChild(trackAudio);
                    cardDiv.appendChild(trackImg);
                    cardDiv.appendChild(cardBodyDiv);
                    cardOuterRow.appendChild(cardDiv);
                    cardOuterContainer.appendChild(cardOuterRow);
                    contentDiv.appendChild(cardOuterContainer);
                }
                //});
            })["catch"](function (err) {
                // This is where you run code if the server returns any errors
                console.log(err);
            });
            return [2 /*return*/];
        });
    });
}
var AudioPlaylist = /** @class */ (function () {
    function AudioPlaylist() {
    }
    AudioPlaylist.prototype.getTopTracks = function () {
        getSongsFromRapidAPIShazamAndCreateCards("list-artist-top-tracks");
    };
    AudioPlaylist.prototype.getRecommendedSongs = function () {
        getSongsFromRapidAPIShazamAndCreateCards("list-recommendations");
    };
    AudioPlaylist.prototype.getSearchTacks = function (searchTerm) {
        getSongsFromRapidAPIShazamAndCreateCards("search" + "," + searchTerm);
    };
    return AudioPlaylist;
}());
var AudioCard = /** @class */ (function () {
    function AudioCard() {
    }
    return AudioCard;
}());
var playList = new AudioPlaylist();
playList.getSearchTacks("linkinpark");
var card = new AudioCard();
