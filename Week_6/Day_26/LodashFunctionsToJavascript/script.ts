
var baseDiv = document.createElement("div");
baseDiv.setAttribute("class","container");

var h31 = document.createElement("div");
h31.innerHTML = "Hello From Inside the dynamically generated JS file with the TS command npx tsc !";

baseDiv.appendChild(h31);

document.body.append(baseDiv);


// chunk

const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr]
  if (chunkSize <= 0) return cache
  while (tmp.length) cache.push(tmp.splice(0, chunkSize))
  return cache
}

console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g']))
// => [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]

console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3))
// => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]


// reduce

let reduceOuput = [1, 2, 3].reduce((total, n) => total + n);
console.log(reduceOuput);


// filer

const numbers = [10, 40, 230, 15, 18, 51, 1221]       

//_.filter(numbers, num => num % 3 === 0)
let filterOutput = numbers.filter(num => num % 3 === 0);
console.log(filterOutput);


// find 

let array1 = [5, 12, 8, 130, 44];

//let findOutput = array1.find(element => element > 10);
let findOutput = array1.filter(element => element > 10);

//console.log(findOutput);
console.log(findOutput[0]);


//sum

let sumOutput = [4, 2, 8, 6].reduce((acc, num) => {
  acc += num
  return acc
}, 0)
console.log(sumOutput);