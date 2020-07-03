// Whats the msg printed and why?

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);

output will be 'hi' ,
the first if  statemnt will be true because if(string) is  truthy value in javascript
the second if statement will be false because if(0) is a falsey value