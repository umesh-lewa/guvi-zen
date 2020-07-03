// 1.Get the first item, the middle item and the last item of the array
  
  console.log(friends[0]);

  console.log(friends[Math.floor((arr.length - 1) / 2)]);
  console.log(friends[(arr.length - 1) / 2]);

  console.log(friends[(friends.length - 1)]);

// 2. Add your name to the end of the friends array, and add another name to beginning.

  friends.push("Umesh");
  friends.unshift("Surya");

// 3. Add Mr or Ms to the names in the friends array.

for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    friends[i] = "Mr/Ms " + friends[i];   
}
console.log(friends);

// 4. Concat all the names the friends array and return as comma “,” seperated string.

var output = "";
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    if(i == 0){
        output = output + friends[i];
    }else{
        output = output + "," + friends[i];
    }    
}
console.log(output);

// 5. Find the friends names who has letter ‘a’ and return the list.

var output = [];
var name = "";
for (var i = 0; i < friends.length; i++) {
    name = friends[i];
    if(name.includes("a")){
        output.push(friends[i]);
    }else{

    }    
}
console.log(output);

// 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

var sum = 0;
var name = "";
for (var i = 0; i < friends.length; i++) {
    name = friends[i];
    sum = +sum + name.length;     
}
console.log(sum/friend.length);

// 7. Find the names and return the list starting with letter M.

var output = [];
var name = "";
for (var i = 0; i < friends.length; i++) {
    name = friends[i];
    if(name.startsWith("M")){
        output.push(friends[i]);
    }else{

    }    
}
console.log(output);

// 8. Find the name with max characters and return the name.

var maxlen = 0;
for (i=0; i<friends.length; i++) {
  if (friends[i].length>maxlen) {
    maxlen = friends[i].length;
  }
}

console.log(maxlen);

// 9. Find the name with min characters and return the name.

    let shortLength = Infinity;
    let shortest = "";

        for (let i = 0; i < friends.length; i++) {
            if (friends[i].length < shortLength) {
                shortest = friends[i];
                shortLength = friends[i].length;
            }
        }
    console.log(shortest);