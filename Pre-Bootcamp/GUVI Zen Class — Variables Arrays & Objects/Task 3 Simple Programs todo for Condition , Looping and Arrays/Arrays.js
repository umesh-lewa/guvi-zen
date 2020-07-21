var myarray=[11,22,33,44,55]
// write a code to count the elements in the array . Don’t use length property

let arr = ['Cabbage', 'Turnip', 'Radish', 'Carrot', 'something', 'somethingelse','value'];
  let count = 1;
  let isDone= true;
  let i = 0;
  
  while(isDone){
      if(arr[i] != undefined){
          count++;
      }else{
          isDone = false;
      }
      
      i++;
  }

  console.log(--count);

//  Declare an empty array;

let arr = [];

// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

let foods=['Chicken', 'Biriyani' , 'Curd Rice' , 'Dosa' , 'Fried Rice'];

foods.push('Idly');
foods.push('Puri');
foods.push('Toast');
foods.push('Nutella');
foods.push('Fried Rice');
foods.push('Orange');
foods.push('Orange');
foods.push('Orange');
foods.push('Orange');

// Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?

let foods=[]

console.log(foods[4]);

// Find the length of your foods array

console.log(foods.length);

// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friends = [
“Mari”,
“MaryJane”,
“CaptianAmerica”,
“Munnabai”,
“Jeff”,
“AAK chandran”
];

function dataHandling(input){
for (var i = 0; i < input.length; i++) {
	if(input[i] == "Mari"){
		input[i]  = "Munnabai";
		}
	}
}
dataHandling(friends);

// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

const friends = [
“Mari”,
“MaryJane”,
“CaptianAmerica”,
“Munnabai”,
“Jeff”,
“AAK chandran”
];

function dataHandling(input){
for (var i = 0; i < input.length; i++) {
    if(input[i] == "CaptianAmerica" ){
		break;  
    	}else{
    		console.log(input[i]);
    	}
	}
}
dataHandling(friends);

// Find the person is ur friend or not.

const friends = [
“Mari”,
“MaryJane”,
“CaptianAmerica”,
“Munnabai”,
“Jeff”,
“AAK chandran”
];

function dataHandling(input, name){
let isFriend = false;
for (var i = 0; i < input.length; i++) {
	if(input[i] == name){
		isFriend = true;
		}
	}
	return isFriend;
}
let found = dataHandling(friends,”Jeff”);
console.log(found);

//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

var friends1 = [
“Mari”,
“MaryJane”,
“CaptianAmerica”,
“Munnabai”,
“Jeff”,
“AAK chandran”
];
var friends2 = [
“Gabbar”,
“Rajinikanth”,
“Mass”,
“Spiderman”,
“Jeff”,
“ET”
];
function dataHandling(input){
//Your code goes here

var mergedArray = friends1.concat(friends2);
console.log(mergedArray.sort());   

}
dataHandling(friends);