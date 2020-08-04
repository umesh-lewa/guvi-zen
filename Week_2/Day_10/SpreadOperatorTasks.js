const person = {
    firstName: "Suresh",
    lastName: "Raina",
    age: 27,
    gender: "M"
  }
  
let first = person.firstName;
let age = person.age;
let gender = person.gender;

console.log(first); 
console.log(age); 
console.log(gender); 

const person = {
    firstName: "Suresh",
    lastName: "Raina",
    age: 27,
    gender: "M"
  }
  
const { firstName, lastName, age, gender } = person;
  
console.log(firstName);
console.log(age);
console.log(gender);
  
var person1 = {
    firstName:"Sachin",
    lastName:"Tendulkar",
    age: 35,
    gender:"M"
}

function joinFirstLastName({firstName,lastName}) {
    return firstName + '-' + lastName;
}
  
console.log(joinFirstLastName(person1));

var list = [ 1, 2, 3 ];
var [ a, b ] = list;
[ b, a ] = [ a, b ]
console.log(a, b)