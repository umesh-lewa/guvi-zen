var grades = [80, 77, 88, 95, 68];

var total = 0;
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
var avg = +total / grades.length;
console.log(avg);