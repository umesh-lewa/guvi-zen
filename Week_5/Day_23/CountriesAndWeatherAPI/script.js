
// declare async function
async function myAsyncFunction(){

    try{
    // use await keyboard while hitting the endpoint
	let response = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    
    // use await keyboard while parsing the response
    let data = await response.json();
        
        let countries = data;

        var baseDiv = document.createElement("div");
        baseDiv.setAttribute("style","margin-left: 70px; margin-top: 90px;");
        baseDiv.setAttribute("class","card-group");

        document.body.append(baseDiv);

        var cardColumnsDiv = document.createElement("div");
        cardColumnsDiv.setAttribute("class","card-columns");
        cardColumnsDiv.setAttribute("style","margin-top : 100px;");

        // iterate through the list of countries
        countries.forEach(country => {

            let outerDiv = document.createElement("div")
            outerDiv.setAttribute("style","display:flex;justify-content:center;padding:5px;")
            outerDiv.setAttribute("class","col-lg-4 col-sm-12")

        	// create outer card div
            var cardDiv = document.createElement("div");
            cardDiv.setAttribute("class","card text-center text-white");
            cardDiv.setAttribute("style","width: 18rem;font-family: Arial, Helvetica, sans-serif;");

            // create image for the card i.e flag
            var cardImgDiv = document.createElement("img");
            cardImgDiv.setAttribute("class","card-img-top");
            cardImgDiv.setAttribute("src",country.flag);
            cardImgDiv.setAttribute("alt","Card  image cap");

            // create card body div
            var cardContentDiv = document.createElement("div");
            cardContentDiv.setAttribute("class","card-body");
            cardContentDiv.setAttribute("style","background: rgb(227,231,143);background: linear-gradient(90deg, rgba(227,231,143,1) 0%, rgba(37,37,40,1) 75%, rgba(31,34,34,1) 100%);")

            // create header div 
            var headerDiv = document.createElement("div");
            headerDiv.setAttribute("class","card-header");
            headerDiv.setAttribute("style","background-color:black;");
            //headerDiv.setAttribute("style","width: 18rem;");
            headerDiv.innerHTML = country.name;

            /*
            // create card title
            var h5title = document.createElement("h5");
            h5title.setAttribute("class","card-title");
            h5title.innerHTML = "Name : " + country.name;
            */

            // create card content tags
            var p1 = document.createElement("p");
            p1.setAttribute("class","card-text");
            p1.innerHTML = "Capital : " + country.capital;

            var p2 = document.createElement("p");
            p2.setAttribute("class","card-text");
            p2.innerHTML = "Region : " + country.region;

            var p3 = document.createElement("p");
            p3.setAttribute("class","card-text");
            p3.innerHTML = "Country Code : " + country.alpha2Code;

            // build the weather api url from the data got from rest countries
            var countryCode = country.alpha2Code;
            var cityCode = country.capital;
            var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityCode+","+countryCode+"&appid=f21dc7c3c2e1aeb45da297ca74d853ce";
            var finalWeatherURL = weatherURL;

            // create transparent button with light border 
            var a1 = document.createElement("button");
            a1.setAttribute("onclick","getWeatherDetailsByCountry('"+ finalWeatherURL +"')");
            a1.setAttribute("class","btn btn-outline-light bg-transparent");
            a1.innerHTML = "Click for Weather";

            // add content to the card content div

        	//cardContentDiv.appendChild(h5title);
            cardContentDiv.appendChild(cardImgDiv);
        	cardContentDiv.appendChild(p1);
        	cardContentDiv.appendChild(p2);
        	cardContentDiv.appendChild(p3);
            cardContentDiv.appendChild(a1);

        	// add image ond content to each card div

            cardDiv.appendChild(headerDiv);
        	//cardDiv.appendChild(cardImgDiv);
        	cardDiv.appendChild(cardContentDiv);

        	// add each card div to the card column group
            //cardColumnsDiv.appendChild(cardDiv);

            outerDiv.appendChild(cardDiv);

            baseDiv.appendChild(outerDiv);

        });
        // add the card group to the base div
        //baseDiv.appendChild(cardColumnsDiv);

    } catch(err) {

        // show caught error in alert box for debugging purpose
        alert(err); 
        console.log(err);
    }    

}

myAsyncFunction();