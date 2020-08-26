

async function myAsyncFunction(){
	let response = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    let data = await response.json();


        let summary = data;
        
        let countries = data;

        var baseDiv = document.createElement("div");
        baseDiv.setAttribute("style","margin-left: 70px;");

        document.body.append(baseDiv);

        var cardColumnsDiv = document.createElement("div");
        cardColumnsDiv.setAttribute("class","card-columns");

        countries.forEach(country => {

        	// create outer card div
        	var cardDiv = document.createElement("div");
        	cardDiv.setAttribute("class","card");
        	cardDiv.setAttribute("style","width: 18rem;");

        	// create image for the card i.e flag
        	var cardImgDiv = document.createElement("img");
        	cardImgDiv.setAttribute("class","card-img-top");
        	cardImgDiv.setAttribute("src",country.flag);
        	cardImgDiv.setAttribute("alt","Card  image cap");

        	// create card body div
        	var cardContentDiv = document.createElement("div");
        	cardContentDiv.setAttribute("class","card-body");

        	// create card title
        	var h5title = document.createElement("h5");
        	h5title.setAttribute("class","card-title");
        	h5title.innerHTML = "Name : " + country.Country;

        	// create card content tags
        	var p1 = document.createElement("p");
        	p1.setAttribute("class","card-text");
        	p1.innerHTML = "Country Code : " + country.CountryCode;

        	var p2 = document.createElement("p");
        	p2.setAttribute("class","card-text");
        	p2.innerHTML = "Slug : " + country.Slug;

        	var p3 = document.createElement("p");
        	p3.setAttribute("class","card-text");
        	p3.innerHTML = "NewConfirmed : " + country.NewConfirmed;

            //<a href="#" class="btn btn-primary">Go somewhere</a>
            // <button onclick="myFunction()">Click me</button> 
            var slugCode = country.Slug;
            var byCountryURL = "https://api.covid19api.com/country/" + slugCode + "/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z";
            var finalbyCountryURL = byCountryURL;

            var a1 = document.createElement("button");
            a1.setAttribute("onclick","getDetailsByCountry('"+ finalbyCountryURL +"')");
            a1.setAttribute("class","btn btn-primary");
            a1.innerHTML = "Get Details";
       
            var a2 = document.createElement("a");
            a2.setAttribute("href","");
            a2.setAttribute("class","btn btn-primary");
            a2.innerHTML = "Get Weather";

            // add text content to the card content div
        	cardContentDiv.appendChild(h5title);
        	cardContentDiv.appendChild(p1);
        	cardContentDiv.appendChild(p2);
        	cardContentDiv.appendChild(p3);
        	//cardContentDiv.appendChild(p4);
            cardContentDiv.appendChild(a1);
            cardContentDiv.appendChild(a2);

        	// add image ond content to each card div
        	cardDiv.appendChild(cardImgDiv);
        	cardDiv.appendChild(cardContentDiv);

        	// add each card div to the card column group
            cardColumnsDiv.appendChild(cardDiv);

        });
        // add the card group to the base div
        baseDiv.appendChild(cardColumnsDiv);

}

myAsyncFunction();