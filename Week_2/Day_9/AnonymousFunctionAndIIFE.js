// Do the below programs in anonymous function & IIFE

//Print odd numbers in an array

var anon = function(arr) {
  for(let i = 0 ; i < arr.length ; i++){
  	if(+arr[i] % 2 == 0){

  	}else{
  		console.log(arr[i]);
  	}
  }
}

var arr = [2,3,4,5,6,7,8,9,10];
anon(arr);

var arr = [2,3,4,5,6,7,8,9,10];
(function() {
	for(let i = 0 ; i < arr.length ; i++){
  	if(+arr[i] % 2 == 0){

  	}else{
  		console.log(arr[i]);
  	}
  }
 })(arr);

//Convert all the strings to title caps in a string array

var anon = function(arr) {
  for(let i = 0 ; i < arr.length ; i++){
  	let str = arr[i].split("");
  	console.log(str);
  	//s[0].toUpperCase();
  	str[0]=str[0].charAt(0).toUpperCase()+str[0].slice(1);
    //console.log(str.join(""))
    arr[i] = str.join("");
  }
  return arr;
}

var arr = ["some","thing","here"];
var out = anon(arr);
console.log(out);


var arr = ["some","thing","here"];
(function() {
  for(let i = 0 ; i < arr.length ; i++){
  	let str = arr[i].split("");
  	console.log(str);
  	//s[0].toUpperCase();
  	str[0]=str[0].charAt(0).toUpperCase()+str[0].slice(1);
    //console.log(str.join(""))
    arr[i] = str.join("");
  }
  return arr;
})(arr);

//Sum of all numbers in an array

var anon = function(arr){

	var sum = arr.reduce(function(a, b){
        return a + b;
    }, 0);

	return sum;
}
var arr = [2,3,4,5,6,7,8,9,10];
var out = anon(arr);
console.log(out);

var arr = [2,3,4,5,6,7,8,9,10];
(function() {
		var sum = arr.reduce(function(a, b){
        return a + b;
    }, 0);

	return sum;
 })(arr);

//Return all the prime numbers in an array

var anon = function primeArr(arr) {
           
      function isPrime(testNo){
      
        var result = false;
        for(var n = testNo - 1; n > 1; n--){
            result = (testNo % n === 0) + result;
        }
        
        if(result === 0 && testNo > 1){
          return true;
        }return false;
      }
      
      var newArr = []; 
      
      for(n=0; n<arr.length; n++){
        if(isPrime(arr[n])){
          newArr.push(arr[n]);
        }
      }
      
      return newArr;
}
var arr = [2,3,4,5,6,7,8,9,10];
var out = anon(arr);
console.log(out);


var arr = [2,3,4,5,6,7,8,9,10];
(function () {
           
      function isPrime(testNo){
      
        var result = false;
        for(var n = testNo - 1; n > 1; n--){
            result = (testNo % n === 0) + result;
        }
        
        if(result === 0 && testNo > 1){
          return true;
        }return false;
      }
      
      var newArr = []; 
      
      for(n=0; n<arr.length; n++){
        if(isPrime(arr[n])){
          newArr.push(arr[n]);
        }
      }
      
      return newArr;
})(arr);

//Return all the palindromes in an array

var anon = function(arr){

	var isPalindrome = function(s){
		var str = s;
		var reverseStr = s.split("").reverse().join("");
		return str === reverseStr;
	}

	var newArr = [];

	for(let i = 0 ; i < arr.length ; i++){
		if(isPalindrome(arr[i])){
			newArr.push(arr[i]);
			//console.log(arr[i]);
		}
	}
	
	return newArr;
}

var arr = ["racecar","some","thing","madam"];
var out = anon(arr);
console.log(out)


var arr = ["racecar","some","thing","madam"];
(function(arr){

	var isPalindrome = function(s){
		var str = s;
		var reverseStr = s.split("").reverse().join("");
		return str === reverseStr;
	}

	var newArr = [];

	for(let i = 0 ; i < arr.length ; i++){
		if(isPalindrome(arr[i])){
			newArr.push(arr[i]);
			//console.log(arr[i]);
		}
	}
	
	return newArr;
})(arr);

//Return median of two sorted arrays of same size 

var median = function(a1, a2) {
  let x = a1.concat(a2);
  x.sort(function (a,b) {
    return a - b;
  });
  let len = x.length;
  
  return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];

}

let a = [0,2,3,5,9];
let b = [1,4];
console.log(median(a,b));



let a = [0,2,3,5,9];
let b = [1,4];
(function(a1, a2) {
  let x = a1.concat(a2);
  x.sort(function (a,b) {
    return a - b;
  });
  let len = x.length;
  
  return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];

})(a,b);

//Remove duplicates from an array

var anon = function(arr){

	var s = new Set(arr);

	return s;
}
var arr = [2,3,2,5,6,7,7,7,10];
var out = anon(arr);
console.log(out);


var arr = [2,3,2,5,6,7,7,7,10];
(function(){

	var s = new Set(arr);

	return s;
})(arr);

// Rotate an array by k times and return the rotated array

var arr = [1,2,3,4,5,6,7];
var rotate = function(nums, k){
	let i = 0;
	while(i < k){
		nums.unshift(nums.pop());
		i++
	}
	return nums;
}

var out = rotate(arr, 2);
console.log(out);


var arr = [1,2,3,4,5,6,7];
(function(nums, k){
	let i = 0;
	while(i < k){
		nums.unshift(nums.pop());
		i++
	}
	return nums;
})(arr);