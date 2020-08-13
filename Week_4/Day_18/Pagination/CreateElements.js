
var mainDiv = document.createElement("div");
mainDiv.setAttribute("style","margin:auto;background-color: #d5fcff;font-family: Lucida Console, Courier, monospace;width:1000px; margin:0 auto;");

var h11 = document.createElement("H1");
h11.setAttribute("style","font-family:Lucida Console, Courier, monospace;text-align:center;");
//h11.appendChild(document.createTextNode("List Of Values are Displayed Below :"));
h11.innerHTML = "List Of Values from API, <br><br> https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json <br><br> are Displayed Below :";
var h21 = document.createElement("H2");
h21.setAttribute("id","pageHeader");
var ol1 = document.createElement("ol");
ol1.setAttribute("id","pageItems");
var div1 = document.createElement("div");
div1.setAttribute("id","pageButtons");
div1.setAttribute("style","font-family: Lucida Console, Courier, monospace;");

mainDiv.appendChild(h21);
mainDiv.appendChild(ol1);
mainDiv.appendChild(div1);

//document.body.appendChild(h21);
//document.body.appendChild(ol1);
document.body.appendChild(h11);
document.body.appendChild(mainDiv);
