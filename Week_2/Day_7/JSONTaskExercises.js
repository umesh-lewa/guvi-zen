/*
Problem 0 : Part A (15 mins):
Playing with JSON object's Values:
Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
Write a code to get the below details of Fluffyy so that
I can take him to vet.
*/

var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [{
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'}, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }]
}
console.log("Name : "+cat.name);
console.log("Activities : "+cat.activities);
console.log("CatFriends : "+cat.catFriends);

/*

Basic Tasks to play with JSON
Add height and weight to Fluffy
Fluffy name is spelled wrongly. Update it to Fluffyy
List all the activities of Fluffyy's catFriends.
Print the catFriends names.
Print the total weight of catFriends
Print the total activities of all cats (op:6)
Add 2 more activities to bar & foo cats
Update the fur color of bar

*/
cat.height = "2";
cat.weight = "20";

cat.name = "Fluffyy"

console.log(cat.catFriends[0].activities);
console.log(cat.catFriends[1].activities);

console.log(cat.catFriends[0].name);
console.log(cat.catFriends[1].name);

console.log(parseInt(cat.catFriends[0].weight) + parseInt(cat.catFriends[1].weight));

console.log(cat.activities);
console.log(cat.catFriends[0].activities);
console.log(cat.catFriends[1].activities);

cat.catFriends[0].activities.push("watch TV");
cat.catFriends[1].activities.push("Play online");

cat.catFriends[0].furcolor = "Orange";

/*

Problem 0 : Part B (15 mins):
Iterating with JSON object's Values
Above is some information about my car. As you can see, I am not the best driver.
I have caused a few accidents.
Please update this driving record so that I can feel better about my driving skills.

1. Loop over the accidents array. Change atFaultForAccident from true to false.
2. Print the dated of my accidents

*/

var myCar = {
 make: 'Bugatti',
 model: 'Bugatti La Voiture Noire',
 year: 2019,
 accidents: [
 {
 date: '3/15/2019',
 damage_points: '5000',
 atFaultForAccident: true
 },
 {
 date: '7/4/2022',
 damage_points: '2200',
 atFaultForAccident: true
 },
 {
 date: '6/22/2021',
 damage_points: '7900',
 atFaultForAccident: true
 }
 ]
}


	var accidents = myCar.accidents;
	for(let j = 0 ; j < accidents.length ; j++){
		myCar.accidents[j].atFaultForAccident = false;
	}


for(let j = 0 ; j < myCar.accidents.length ; j++){
	console.log(myCar.accidents[j].date);
}

/*

Problem 1 (5 mins):
Parsing an JSON object’s Values:
Write a function called "printAllValues" which returns an newArray of all the input object’s values.
Input (Object):
var object = {name: "RajiniKanth", age: 33, hasPets : false};
Output:
["RajiniKanth", 33, false]
Sample Function proto:
var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 // your code here
}

*/

var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
	let arr = [];
	for(var i in obj){
		if (obj.hasOwnProperty(i)) {
        //console.log(obj[i]);
        arr.push(obj[i]);
    	}
	}
	return arr;
}
var out = printAllValues(obj);
console.log(out);

/*

Problem 2(5 mins) :
Parsing an JSON object’s Keys:
Write a function called "printAllKeys" which returns an newArray of all the input object’s keys.
Example Input:
{name : ‘RajiniKanth’, age : 25, hasPets : true}
Example Output:
[‘name’, ‘age’, ‘hasPets’]
Sample Function proto:
function printAllKeys(obj) {
 // your code here
}
*/

var obj = {name : 'RajiniKanth', age : 25, hasPets : true};
function printAllKeys(obj) {
	let arr = [];
	for(var i in obj){

        arr.push(i);
    	
	}
	return arr;
}
var out = printAllKeys(obj);
console.log(out);
/*
Problem 3( 7–9 mins):
Parsing an JSON object and convert it to a list:
Write a function called "convertObjectToList" which converts an object literal into an array of arrays.
Input (Object):
var object = {name: "ISRO", age: 35, role: "Scientist"};
Output:
[["name", "ISRO"], ["age", 35], ["role", "Scientist"]]
Sample Function proto:
var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
 // your code here
}
*/
var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
	let arr = [];
	

	for(var i in obj){
		let innerArr = [];
		if (obj.hasOwnProperty(i)) {
			
			innerArr.push(i,obj[i]);
        //console.log(obj[i]);
        
    	}
    	arr.push(innerArr);
	}
	return arr;
}
var out = convertListToObject(obj);
console.log(out);

/*

Problem 4( 5 mins):
Parsing a list and transform the first and last elements of it:
Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.
Input (Array):
var array = ["GUVI", "I", "am", "Geek"];
Output:
var object = {
GUVI : "Geek"
}
Sample Function proto:
var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
 
 return newObject;
}

*/

var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
 
 var obj = {};
 let first= arr[0];
 let last = arr[(arr.length -1)];
 
 obj[first] = last;

 return obj;
}
var out = transformFirstAndLast(arr);
console.log(out);

/*

Problem 5 ( 7 -9 mins):
Parsing a list of lists and convert into a JSON object:
Write a function "fromListToObject" which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
Output:
var object = {
make : "Ford"
model : "Mustang",
year : 1964
}
Sample Function proto:
var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 
 return newObject;
}

*/

var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(let i = 0 ; i < arr.length; i++){
 	let k = arr[i][0];
 	let v = arr[i][1];
 	//console.log(k);
 	//console.log(v);
 	newObject[k] = v;
 }
 
 //console.log(newObject);
 return newObject;
}

var out = fromListToObject(arr);
console.log(out);

/*

Problem 6 (10 mins):
Parsing a list of lists and convert into a JSON object:
Write a function called "transformGeekData" that transforms some set of data from one format to another.
Input (Array):
var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
Output:
[
{firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
{firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
]
Sample Function proto:
var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 
 //Your code
 
 return tranformEmployeeList;
}

*/

var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];

 for(let i = 0 ; i < arr.length ; i++){
 	let innerArr = [];
 	innerArr = arr[i];
 	let obj = {};
 	for(let j = 0 ; j < innerArr.length ; j++){
 		let k = innerArr[j][0];
 		let v = innerArr[j][1];
 		obj[k] = v;
 	}
 	tranformEmployeeList.push(obj);
 }
 return tranformEmployeeList;
}

console.log(transformEmployeeData(arr));

/*

Problem 7 (10 — 20 mins):
Parsing two JSON objects and Compare:
Read this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Write an "assertObjectsEqual" function from scratch.
Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
It is OK to use JSON.stringify().
Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.
Success Case:
Input:
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
Passed
Failure Case:
Input:var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
FAILED [my test] Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
 // your code here
}

*/

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
	let isEqual = true;
	let keys = Object.keys(actual);
	console.log(keys) 
	for(let i = 0 ; i < keys.length ; i++){
			if(actual[keys[i]] != expected[keys[i]]){
				isEqual = false;
			}
	}
	return isEqual;
}

console.log(assertObjectsEqual(actual,expected));	
/*

Problem 8(10 mins):
Parsing JSON objects and Compare:
I have a mock data of security Questions and Answers. You function should take the object and a pair of strings and should return if the quest is present and if its valid answer

*/

var securityQuestions = [
 {
 question: "What was your first pet's name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
]
function chksecurityQuestions(securityQuestions,question,ans) {

	let isCorrect = false;
	for(let i = 0 ; i < securityQuestions.length ; i++){
		if(securityQuestions[i].question == question){
			if(securityQuestions[i].expectedAnswer == ans){
				isCorrect = true;
			}
		}

	}
 return isCorrect; 
}

//Test case1:
var ques = "What was your first pet's name?";
var ans  =  "FlufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true
//Test case2:
var ques = "What was your first pet's name?";
var ans  =  "DufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // flase

/*

Problem 9(20 mins):
Parsing JSON objects and Compare:
Write a function to return the list of characters below 20 age

*/

var students = [
 {name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
 {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
 {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
 {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
 {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
 {name: "Devdas",age: 56} 
 ];
function returnMinors(arr)
{
	let output = [];

	for(let i = 0 ; i < students.length ; i++){
		if(parseInt(students[i].age) < 20){
			output.push(students[i].name);
		}
	}
	return output;
}
console.log(returnMinors(students));