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

var asianCountries = data.filter(function(el) {
      return el.region == "Asia"
  });
console.log(asianCountries);


var popultionLessThan2L = data.filter(function(country){
	return country.population <= 200000; 
});
console.log(popultionLessThan2L);


var totalPopulation = data.reduce(function (accumulator, country) {
  return accumulator + country.population;
}, 0);
console.log(totalPopulation);


var add1LToPopulation = data.map(function (officer) {
  return officer.population = officer.population + 10000;
});
console.log(add1LToPopulation);
console.log(data);


var upperCaseCapitals = data.map(function (country) {
  return country.capital = country.capital.toUpperCase();
});
console.log(upperCaseCapitals);
console.log(data)


data.forEach((element) => {
	console.log(element["name"]);
	console.log(element["capital"]);
	console.log(element["flag"]);
})


var allAsianCountries = data.filter(function(el) {
      return el.region == "Asia"
  });

var totalPopulationInAsia = allAsianCountries.reduce(function (accumulator, country) {
  return accumulator + country.population;
}, 0);

console.log(totalPopulationInAsia);

//console.log(data);
}