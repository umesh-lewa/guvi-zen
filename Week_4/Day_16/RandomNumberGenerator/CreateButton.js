
var div1 = document.createElement("div");
div1.setAttribute("class","main-div");

var but1 = document.createElement("button");
but1.setAttribute("type","button");
but1.setAttribute("class","button");
but1.setAttribute("onclick","get8DigitUniqueRandomNumber()");
but1.appendChild(document.createTextNode("Click here to generate your 8 digit random number"));

var p1 = document.createElement("p");
p1.setAttribute("id","myParaText");
p1.setAttribute("class","");
p1.appendChild(document.createTextNode("Your Ramdom Number Will Appear Here"));

div1.appendChild(but1);
div1.appendChild(p1);

document.body.appendChild(div1);

