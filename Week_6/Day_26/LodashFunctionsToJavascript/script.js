var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var baseDiv = document.createElement("div");
baseDiv.setAttribute("class", "container");
var h31 = document.createElement("div");
h31.innerHTML = "Hello From Inside the dynamically generated JS file with the TS command npx tsc !";
baseDiv.appendChild(h31);
document.body.append(baseDiv);
// chunk
var chunk = function (arr, chunkSize, cache) {
    if (chunkSize === void 0) { chunkSize = 1; }
    if (cache === void 0) { cache = []; }
    var tmp = __spreadArrays(arr);
    if (chunkSize <= 0)
        return cache;
    while (tmp.length)
        cache.push(tmp.splice(0, chunkSize));
    return cache;
};
console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g']));
// => [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]
console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3));
// => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]
// reduce
var reduceOuput = [1, 2, 3].reduce(function (total, n) { return total + n; });
console.log(reduceOuput);
// filer
var numbers = [10, 40, 230, 15, 18, 51, 1221];
//_.filter(numbers, num => num % 3 === 0)
var filterOutput = numbers.filter(function (num) { return num % 3 === 0; });
console.log(filterOutput);
// find 
var array1 = [5, 12, 8, 130, 44];
//let findOutput = array1.find(element => element > 10);
var findOutput = array1.filter(function (element) { return element > 10; });
//console.log(findOutput);
console.log(findOutput[0]);
//sum
var sumOutput = [4, 2, 8, 6].reduce(function (acc, num) {
    acc += num;
    return acc;
}, 0);
console.log(sumOutput);
