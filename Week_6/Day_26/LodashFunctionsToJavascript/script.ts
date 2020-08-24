
var baseDiv = document.createElement("div");
baseDiv.setAttribute("class","container");

var h31 = document.createElement("h2");
h31.setAttribute("class","display-4");
h31.innerHTML = "Hello From Inside the dynamically generated JS file with the TS command , npx tsc script.js !";




// chunk

const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr]
  if (chunkSize <= 0) return cache
  while (tmp.length) cache.push(tmp.splice(0, chunkSize))
  return cache
}

var chunkOutput = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3);
console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g']))
// => [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]

console.log(chunkOutput)
// => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]


// reduce

let reduceOuput = [1, 2, 3].reduce((total, n) => total + n);
console.log(reduceOuput);


// filer

const numbers = [10, 40, 230, 15, 18, 51, 1221]       

let filterOutput = numbers.filter(num => num % 3 === 0);
console.log(filterOutput);


// find 

let array1 = [5, 12, 8, 130, 44];

//let findOutput = array1.find(element => element > 10);
let findOutput = array1.filter(element => element > 10);

//console.log(findOutput);
console.log(findOutput[0]);


// sum

let sumOutput = [4, 2, 8, 6].reduce((acc, num) => {
  acc += num
  return acc
}, 0)
console.log(sumOutput);

var table1 = document.createElement("table");
table1.setAttribute("class","table table-dark");

var thead = document.createElement("thead");

var th1 = document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHTML = "#";

var th2 = document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHTML = "ES6 Implementation";

var th3 = document.createElement("th");
th3.setAttribute("scope","col");
th3.innerHTML = "Output";

thead.appendChild(th1);
thead.appendChild(th2);
thead.appendChild(th3);

var tbody = document.createElement("tbody");

var tr1 = document.createElement("tr");

var tr1th = document.createElement("th");
tr1th.setAttribute("scope","row");
tr1th.innerHTML = "1 chunk()";

var td11 = document.createElement("td");
td11.innerHTML = "var chunkOutput = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3); \n const chunk = (arr, chunkSize = 1, cache = []) => { \nconst tmp = [...arr]\nif (chunkSize <= 0) return cache\nwhile (tmp.length) cache.push(tmp.splice(0, chunkSize))\nreturn cache}";
var td12 = document.createElement("td");
td12.innerHTML = chunkOutput.toString();

tr1.appendChild(tr1th);
tr1.appendChild(td11);
tr1.appendChild(td12);

tbody.appendChild(tr1);

var tr2 = document.createElement("tr");

var tr2th = document.createElement("th");
tr2th.setAttribute("scope","row");
tr2th.innerHTML = "2 reduce()";

var td21 = document.createElement("td");
td21.innerHTML = "let reduceOuput = [1, 2, 3].reduce((total, n) => total + n);"

var td22 = document.createElement("td");
td22.innerHTML = reduceOuput.toString();

tr2.appendChild(tr2th);
tr2.appendChild(td21);
tr2.appendChild(td22);

tbody.appendChild(tr2);

var tr3 = document.createElement("tr");

var tr3th = document.createElement("th");
tr3th.setAttribute("scope","row");
tr3th.innerHTML = "3 filter()";

var td31 = document.createElement("td");
td31.innerHTML = "const numbers = [10, 40, 230, 15, 18, 51, 1221] \nlet filterOutput = numbers.filter(num => num % 3 === 0);"

var td32 = document.createElement("td");
td32.innerHTML = filterOutput.toString();

tr3.appendChild(tr3th);
tr3.appendChild(td31);
tr3.appendChild(td32);

tbody.appendChild(tr3);

var tr4 = document.createElement("tr");

var tr4th = document.createElement("th");
tr4th.setAttribute("scope","row");
tr4th.innerHTML = "4 find()";

var td41 = document.createElement("td");
td41.innerHTML = "let array1 = [5, 12, 8, 130, 44]; \n 1st value of , let findOutput = array1.filter(element => element > 10); "

var td42 = document.createElement("td");
td42.innerHTML = findOutput.toString();

tr4.appendChild(tr4th);
tr4.appendChild(td41);
tr4.appendChild(td42);

tbody.appendChild(tr4);

var tr5 = document.createElement("tr");

var tr5th = document.createElement("th");
tr5th.setAttribute("scope","row");
tr5th.innerHTML = "5 sum()";

var td51 = document.createElement("td");
td51.innerHTML = "let sumOutput = [4, 2, 8, 6].reduce((acc, num) => {acc += num return acc }, 0)";

var td52 = document.createElement("td");
td52.innerHTML = sumOutput.toString();

tr5.appendChild(tr5th);
tr5.appendChild(td51);
tr5.appendChild(td52);

tbody.appendChild(tr5);



table1.appendChild(thead);
table1.appendChild(tbody);

baseDiv.appendChild(h31);
baseDiv.appendChild(document.createElement("br"));
baseDiv.appendChild(table1);

document.body.append(baseDiv);