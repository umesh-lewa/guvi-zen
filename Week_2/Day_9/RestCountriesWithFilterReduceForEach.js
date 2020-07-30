var myrequest = new XMLHttpRequest()

var url_string = 'https://restcountries.eu/rest/v2/all';
//var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=f21dc7c3c2e1aeb45da297ca74d853ce';
// Open a new connection, using the GET request on the URL endpoint
myrequest.open('GET',url_string , true)
myrequest.send();
myrequest.onload = function() {
  // Begin accessing JSON data here
//  console.log(this.response);
var data = JSON.parse(this.response);

var asianCountries = data.filter(function(data){
	return data.region == "asia"; 
});

//console.log(asianCountries);

console.log(data);
}