// wrap the promise declaration over the XMLHttpRequest logic
let request = obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);
        if (obj.headers) {
            Object.keys(obj.headers).forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key]);
            });
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(obj.body);
    });
};

// hit the endpoint and get the response
request({url: "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"})
    .then(data => {

        // parse the response and store in variable
        let countries = JSON.parse(data);
        
        // create base div
        var baseDiv = document.createElement("div");
        baseDiv.setAttribute("style","margin-left: 70px;");

        // add abse div to body
        document.body.append(baseDiv);

        // create card column div to group all the cards 
        var cardColumnsDiv = document.createElement("div");
        cardColumnsDiv.setAttribute("class","card-columns");

        /*
        <div class="card" style="width: 18rem;">
		  <img class="card-img-top" src="..." alt="Card image cap">
		  <div class="card-body">
		    <h5 class="card-title">Card title</h5>
		    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		    <a href="#" class="btn btn-primary">Go somewhere</a>
		  </div>
		</div>
		*/

		// get each country from list of countries in the reponse object
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
        	h5title.innerHTML = "Name : " + country.name;

        	// create card content tags
        	var p1 = document.createElement("p");
        	p1.setAttribute("class","card-text");
        	p1.innerHTML = "Capital : " + country.capital;

        	var p2 = document.createElement("p");
        	p2.setAttribute("class","card-text");
        	p2.innerHTML = "Region : " + country.region;

        	var p3 = document.createElement("p");
        	p3.setAttribute("class","card-text");
        	p3.innerHTML = "Latlng : " + country.latlng;

        	var p4 = document.createElement("p");
        	p4.setAttribute("class","card-text");
        	p4.innerHTML = "Currenciy Name : " + country.currencies[0].code + "<br>" + "Currenciy Code : " + country.currencies[0].name + "<br>" + "Currenciy Symbol : "+ country.currencies[0].symbol;
            //"currencies":[{"code":"AFN","name":"Afghan afghani","symbol":"؋"}]
            // add text content to the card content div
        	cardContentDiv.appendChild(h5title);
        	cardContentDiv.appendChild(p1);
        	cardContentDiv.appendChild(p2);
        	cardContentDiv.appendChild(p3);
        	cardContentDiv.appendChild(p4);

        	// add image ond content to each card div
        	cardDiv.appendChild(cardImgDiv);
        	cardDiv.appendChild(cardContentDiv);

        	// add each card div to the card column group
            cardColumnsDiv.appendChild(cardDiv);
        	
            // print data to console for debugging
        	console.log(country.name);
            console.log(country.capital);
            console.log(country.region);
            console.log(country.flag);
            console.log(country.latlng);
            console.log(country.currencies);

        });
        // add the card group to the base div
        baseDiv.appendChild(cardColumnsDiv);
    })
    .catch(error => {
        // print error in console for debugging
        console.log("Error in executing the request :" + error);
    });

/*
function useFetch(){

fetch("https://restcountries.eu/rest/v2/all").then(function(data){
	return data.json();
})
.then(function(data1){

	var p = document.getElementById("myPara");
	var ul = document.getElementById("myLi");

	for(let i = 0 ; i < data1.length ; i++){
		//p.innerHTML =  JSON.stringify(data1[i].name);
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(data1[i].name));
		//p.innerHTML += data1[i].name;
		//p.innerHTML += data1[i].flag;
		var im = document.createElement("img");
		im.setAttribute("src",data1[i].flag);
		li.appendChild(im);
		ul.appendChild(li);
	}

	for (var property in data1) {
  		if (data1.hasOwnProperty(property)) {
    		//p.innerHTML = property+ " " + data1.property;
  		}
	}

	//p.innerHTML = data1;
	
	console.log(typeof(data1));
	
	console.log(data1);
})
.catch(function(e){
	console.log(e);
});

}

useFetch();
*/