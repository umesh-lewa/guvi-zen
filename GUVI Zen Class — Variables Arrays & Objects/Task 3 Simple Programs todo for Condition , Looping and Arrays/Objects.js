Objects:

What the output

myobject = {1:one,"11":"1","name":"arun"};
console.log(myobject.11); 
console.log(myobject.name);

for the second console.log alone output will be , arun
for the first console.log we will get error , we have to use [] notation to access the value, like myobject[11]
Also, we need to make the "one" inside the double quotes, or else that will also throw error

Add a new key value pair to myobject

key : ten
value : ten

myobject = {1:one,"11":1,"name":"srun"};

//your code goes here
Object.assign(myobject, {10: "10"});

console.log(myobject);

{"1":"one","11":1,"name":"arun","ten":"ten"} // Quotes might not get displayed that fine.

Write out an object literal to represent the data below.
Guvi, Geek, 6, IIT-M RP,Chennai.

var myObject = {
    companyFirstName: "Guvi",
    companyLastName: "Geek",
    companyAddress: {
      doorNo :"6",
      building : "IIT-M RP",
      city : "Chennai"
    }
};
— — — — — — — — — — — — — — — -

How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
Guvi, Geek, 6, IIT-M RP,Chennai.
Amazon, Inc, 31, SP Infocity, Chennai.
Google, Alphabet, 34 Amphitheater Parkway, MountainView.
Tesla, Inc , 32, 333 Santana Row,San Jose.

We can use nested objects, where each internal oject represents one  company with theattributesinside it ,example,