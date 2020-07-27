// https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com

// Create a request variable and assign a new XMLHttpRequest object to it.
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var xhr = new XMLHttpRequest();
var myrequest = new XMLHttpRequest()

var url_string = 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';
//var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=f21dc7c3c2e1aeb45da297ca74d853ce';
// Open a new connection, using the GET request on the URL endpoint
myrequest.open('GET',url_string , true)
myrequest.send();
myrequest.onload = function() {
  // Begin accessing JSON data here
  console.log(this.response);
var data = JSON.parse(this.response)
console.log(data);
}

/*
fetch(url_string) // Call the fetch function passing the url of the API as a parameter
.then(res=>res.json())
.then(data=>console.log(data))
*/
