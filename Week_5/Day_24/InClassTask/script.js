// function to hit the dynamically created weather api endpoint for each specific country
        async function getWeatherDetailsByCountry(url){

                try{

                let response = await fetch(url);
                let data = await response.json();
    
                // build the output string to dsiplay to user
                let outString = ""; 
                
                // extract the required values from parsed response and add to output string
                outString += "Weather Desctiption : " + data.weather[0].description + "\n";
                outString += "Temp : " + data.main.temp + "\n";

                outString += "Min Temp : " + data.main.temp_min + "\n";

                outString += "Max Temp : " + data.main.temp_max + "\n";

                outString += "Pressure : " + data.main.pressure + "\n";

                outString += "Humidity : " + data.main.humidity + "\n";

                outString += "Visibility : " + data.visibility + "\n";

                outString += "Wind Speed : " + data.wind.speed + "\n";

                outString += "Wind Deg : " + data.wind.deg + "\n";
                
                // display the response data in alert box
                alert(outString);

                } catch(err) {
                    // show caught error in alert box for debugging purpose
                    alert(err); 
                    console.log(err);
                }
            }
            
// declare async function
async function myAsyncFunction(){

    try{
    // use await keyboard while hitting the countries endpoint
	let response = await fetch("https://random-word-api.herokuapp.com/word?number=1");
    
    // use await keyboard while parsing the response
    let data = await response.json();
        
        let word = data[0];

        let giphyURL = "https://api.giphy.com/v1/gifs/search?api_key=1aly3TNoDhGyJCQQ8vk3cDwOx6A39Wyx&q="+word+"&limit=1&offset=0&rating=g&lang=en";

        let giphyResponse;
        let giphyResponseData;
    
        giphyResponse = await fetch(giphyURL);
        giphyResponseData = await giphyResponse.json();

        let actualData = giphyResponseData.data;
        console.log("giphyResponse : "+actualData);

        var baseDiv = document.createElement("div");
        baseDiv.setAttribute("style","margin-left: 70px; margin-top: 90px;");
        baseDiv.setAttribute("class","card-group");

        document.body.append(baseDiv)

        var gifImg = document.createElement("object");
        gifImg.setAttribute("data", actualData[0].images.original.url);
        //gifImg.setAttribute("alt","this slowpoke moves");

        baseDiv.appendChild(gifImg);

    } catch(err) {

        // show caught error in alert box for debugging purpose
        alert(err); 
        console.log(err);
    }    

}

myAsyncFunction();