
console.log("inside js file");


var div = document.createElement("div");
div.setAttribute("style","height: 35%;width: 100%;background-color: #221e39;text-align: center;");

var img = document.createElement('img'); 
img.src = './profile-circle-5934b20a9c5949106cab42edc2ee90fc62b7410b03b06f214aa42006f671ef11.png'

var pm1 = document.createElement("p");
pm1.setAttribute("style","background-color: #fff0af;font-size: 34px;font-family: Arial;");
var pm1text = document.createTextNode("BRIAN DUBEY"); 
pm1.appendChild(pm1text);

var pm2 = document.createElement("H3");
pm2.setAttribute("style","text-align:center;background-color: #d5e7ff;");
var pm2text = document.createTextNode("N. Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com"); 
pm2.appendChild(pm2text);

var table = document.createElement("table");
table.setAttribute("style","width:100%;display: table;border-collapse: separate;border-spacing: 2px;border-color: gray;background-color: #d5e7ff;font-family: Arial, Helvetica, sans-serif;");

var colgroup = document.createElement("colgroup");
var col1 = document.createElement("col");
col1.setAttribute("span","1");
col1.setAttribute("style","width:50%;");
//span="1" style="width: 50%;"
var col2 = document.createElement("col");
col2.setAttribute("span","1");
col2.setAttribute("style","width:50%;");
colgroup.appendChild(col1);
colgroup.appendChild(col2);


var trow1 = document.createElement("tr");
var trow1tdata1 = document.createElement("td");
var trow1tdata2 = document.createElement("td");

// row 1 data 1

var h11 = document.createElement("H1")                
var h11text = document.createTextNode("Profile");     
h11.appendChild(h11text);

var p1 = document.createElement("p");
var p1text = document.createTextNode("Innovative optimized solution seker.Excited to be at seploymentphase of my new career as a web developer. I am ambitious. adventurous,assidous, animated, and an illiteration advocate"); 
p1.appendChild(p1text);

var h21 = document.createElement("H2")                // Create a <h1> element
var h21text = document.createTextNode("Skills");     // Create a text node
h21.appendChild(h21text);

var h31 = document.createElement("H3")               
var h31text = document.createTextNode("Technical Skills");     
h31.appendChild(h31text);

var li1 = document.createElement("LI");
li1.appendChild(document.createTextNode("Javascript"));
//li1.value = "Javascript";
var li2 = document.createElement("LI");
li2.appendChild(document.createTextNode("React"));
//li2.value = "React";
var li3 = document.createElement("LI");
li3.appendChild(document.createTextNode("Mongo"));
//li3.value = "Mongo";
var li4 = document.createElement("LI");
li4.appendChild(document.createTextNode("HTML"));
//li4.value = "HTML";
var li5 = document.createElement("LI");
li5.appendChild(document.createTextNode("CSS"));
//li5.value = "CSS";
var li6 = document.createElement("LI");
li6.appendChild(document.createTextNode("Deployed"));
//li6.value = "Deployed";

var ul1 = document.createElement("UL");
ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);
ul1.appendChild(li4);
ul1.appendChild(li5);
ul1.appendChild(li6);

var h32 = document.createElement("H3")                
var h32text = document.createTextNode("Additional Skills");    
h32.appendChild(h32text);

var li21 = document.createElement("LI");
li21.appendChild(document.createTextNode("Project Management"));
//li21.value = "Project Management";
var li22 = document.createElement("LI");
li22.appendChild(document.createTextNode("Recruitment"));
//li22.value = "Recruitment";
var li23 = document.createElement("LI");
li23.appendChild(document.createTextNode("Buissness Development"));
//li23.value = "Buissness Development";
var li24 = document.createElement("LI");
li24.appendChild(document.createTextNode("Editing"));
//li24.value = "Editing";
var li25 = document.createElement("LI");
li25.appendChild(document.createTextNode("Fundraising"));
//li25.value = "Fundraising";

var ul2 = document.createElement("UL");
ul2.appendChild(li21);
ul2.appendChild(li22);
ul2.appendChild(li23);
ul2.appendChild(li24);
ul2.appendChild(li25);
ul2.appendChild(li25);

var h12 = document.createElement("H1")                
var h12text = document.createTextNode("Work Exeprience");     
h12.appendChild(h11text);

var h42 = document.createElement("H4")                
var h42text = document.createTextNode("Event Manager");    
h42.appendChild(h42text);

var li31 = document.createElement("LI");
//li31.value = "Lead andexecute all phases of event planning";
li31.appendChild(document.createTextNode("Lead andexecute all phases of event planning"));
var li32 = document.createElement("LI");
//li32.value = "Brought new buissness to the organization";
li32.appendChild(document.createTextNode("Brought new buissness to the organization"));
var li33 = document.createElement("LI");
//li33.value = "Exercise fisacl control over budget creation";
li33.appendChild(document.createTextNode("Exercise fisacl control over budget creation"));

var ul3 = document.createElement("UL");
ul3.appendChild(li21);
ul3.appendChild(li22);
ul3.appendChild(li23);

trow1tdata1.appendChild(h11);
trow1tdata1.appendChild(p1);
trow1tdata1.appendChild(h21);
trow1tdata1.appendChild(h31);
trow1tdata1.appendChild(ul1);
trow1tdata1.appendChild(h32);
trow1tdata1.appendChild(ul2);
trow1tdata1.appendChild(h12);
trow1tdata1.appendChild(h42);
trow1tdata1.appendChild(ul3);

trow1.appendChild(trow1tdata1);

// row 1 data 2

var h13 = document.createElement("H1")                
var h13text = document.createTextNode("Work Exeprience");     
h13.appendChild(h13text);

var h22 = document.createElement("H2")                
var h22text = document.createTextNode("Event Manager");    
h22.appendChild(h22text);

var h43 = document.createElement("H4")                
var h43text = document.createTextNode("C3 Presents, Washington DC");    
h43.appendChild(h43text);

var li41 = document.createElement("LI");
li41.appendChild(document.createTextNode("Lead andexecute all phases of event planning"));
//li41.value = "Lead andexecute all phases of event planning";
var li42 = document.createElement("LI");
li42.appendChild(document.createTextNode("Brought new buissness to the organization"));
//li42.value = "Brought new buissness to the organization";
var li43 = document.createElement("LI");
li43.appendChild(document.createTextNode("Exercise fisacl control over budget creation"));
//li43.value = "Exercise fisacl control over budget creation";

var ul4 = document.createElement("UL");
ul4.appendChild(li41);
ul4.appendChild(li42);
ul4.appendChild(li43);

var h23 = document.createElement("H2")                
var h23text = document.createTextNode("Community Relations Manager");    
h23.appendChild(h23text);

var h44 = document.createElement("H4")                
var h44text = document.createTextNode("Gay & Lesbian elder Housing,Los Angeles");    
h44.appendChild(h44text);

var li51 = document.createElement("LI");
li51.appendChild(document.createTextNode("Lead andexecute all phases of event planning"));
//li51.value = "Lead andexecute all phases of event planning";
var li52 = document.createElement("LI");
li52.appendChild(document.createTextNode("Brought new buissness to the organization"));
//li52.value = "Brought new buissness to the organization";
var li53 = document.createElement("LI");
li53.appendChild(document.createTextNode("Exercise fisacl control over budget creation"));
//li53.value = "Exercise fisacl control over budget creation";

var ul5 = document.createElement("UL");
ul5.appendChild(li51);
ul5.appendChild(li52);
ul5.appendChild(li53);

var h14 = document.createElement("H1")                
var h14text = document.createTextNode("Education");     
h14.appendChild(h14text);

var h23 = document.createElement("H2")                
var h23text = document.createTextNode("Engineering Immersion Program");    
h23.appendChild(h23text);

var h44 = document.createElement("H4")                
var h44text = document.createTextNode("Thiunkful, Chicago, IL");    
h44.appendChild(h44text);

var li61 = document.createElement("LI");
li61.appendChild(document.createTextNode("Developed full-stack web application "));
//li61.value = "Developed full-stack web application ";
var li62 = document.createElement("LI");
li62.appendChild(document.createTextNode("Developed language learning app"));
//li62.value = "Developed language learning app";
var li63 = document.createElement("LI");
li63.appendChild(document.createTextNode("Developed a concierge app, Pley"));
//li63.value = "Developed a concierge app, Pley";

var ul6 = document.createElement("UL");
ul6.appendChild(li61);
ul6.appendChild(li62);
ul6.appendChild(li63);

var h33 = document.createElement("H3")                
var h33text = document.createTextNode("BA, English");    
h33.appendChild(h33text);

var h34 = document.createElement("H3")                
var h34text = document.createTextNode("University of California, Los Angles");    
h34.appendChild(h34text);

trow1tdata2.appendChild(h13);
trow1tdata2.appendChild(h22);
trow1tdata2.appendChild(h43);
trow1tdata2.appendChild(ul4);
trow1tdata2.appendChild(h23);
trow1tdata2.appendChild(h44);
trow1tdata2.appendChild(ul5);
trow1tdata2.appendChild(h14);
trow1tdata2.appendChild(h23);
trow1tdata2.appendChild(h44);
trow1tdata2.appendChild(ul6);
trow1tdata2.appendChild(h33);
trow1tdata2.appendChild(h34);

trow1.appendChild(trow1tdata2);


table.appendChild(colgroup);
table.appendChild(trow1);

div.appendChild(img);
div.appendChild(pm1);
div.appendChild(pm2);
div.appendChild(table);
/*
var htmlbasediv = '<div class="container"><span class="intro">Hello</span> <span id="name"> World!</span></div>';
var htmltable = '<table style="width: 100%"> <colgroup> <col span="1" style="width: 50%;"> <col span="1" style="width: 50%;"> <tr> <th></th> <th></th> </tr> <tr> <td><h1> Profile </h1> <br> <p> Innovative optimized solution seker.Excited to be <br>at seploymentphase of my new career as a <br>web developer. I am ambitious. adventurous, <br>assidous, animated, and an illiteration advocate </p> <br> <h2> Skills <h2> <h3> Technical Skills </h3> <ul> <li>Javascript &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <progress id="file" value="32" max="100"> 32% </progress></li> <li>React &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <progress id="file" value="45" max="100"> 45% </progress></li> <li>Mongo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <progress id="file" value="68" max="100"> 68% </progress></li> <li>HTML &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<progress id="file" value="50" max="100"> 50% </progress></li> <li>CSS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <progress id="file" value="32" max="100"> 32% </progress></li> <li>Deployment &nbsp;&nbsp;<progress id="file" value="90" max="100"> 90% </progress></li> </ul> <h3>Additional Skills</h3> <ul> <li>Project Management &nbsp;&nbsp;&nbsp;<progress id="file" value="78" max="100"> 32% </progress></li> <li>Recruitment &nbsp;&nbsp;&nbsp;<progress id="file" value="67" max="100"> 32% </progress></li> <li>Buissness Development &nbsp;&nbsp;&nbsp;<progress id="file" value="56" max="100"> 32% </progress></li> <li>Editing &nbsp;&nbsp;&nbsp;<progress id="file" value="70" max="100"> 32% </progress></li> <li>Fundraising &nbsp;&nbsp;&nbsp;<progress id="file" value="80" max="100"> 32% </progress></li> </ul> <h1> Work Exeprience </h1> <h4> Event Manager </h4> <ul> <li>Lead andexecute all phases of event planning</li> <li>Brought new buissness to the organization</li> <li>Exercise fisacl control over budget creation</li> </ul> </td> <td> <h1> Work Exeprience </h1> <h2> Event Manager </h2> <h4> C3 Presents, Washington DC </h4> <ul> <li>Lead and execute all phases of event planning</li> <li>Brought new buissness to the organization</li> <li>Exercise fisacl control over budget creation</li> </ul> <h2> Community Relations Manager </h2> <h4> Gay & Lesbian elder Housing,Los Angeles </h4> <ul> <li>Lead andexecute all phases of event planning</li> <li>Brought new buissness to the organization</li> <li>Exercise fisacl control over budget creation</li> </ul> <h1> Education <h1> <h2> Engineering Immersion Program </h2> <h4> Thiunkful, Chicago, IL </h4> <ul> <li>Developed full-stack web application <br>"RenewU", using React that allows users to <br>explore various aspects of meditation, Users <br>progress is stored on backed created using <br>Node and MongoDb</li> <li>Developed language learning app</li> <li>Developed a concierge app, "Pley" for <br>individuals looking for curated suggestions <br>when visiting a new place. React was used to <br>develop the front end which includes real-time chat, drag and drop variety of advanced <br>features. The backedn , built using Node, <br>Express andMongo takes advantage of well <br>developed RESTful API, Geospatial searching and userauthentication JWT</li> </ul> <br> <h3>BA, English </h3> <h3>University of California, Los Angles </h3> </td> </tr></table>';
htmlbasediv.appendChild(htmltable);
let parser = new DOMParser();
let parsedHtml = parser.parseFromString(htmlbasediv, 'text/html');

document.body.append(parsedHtml.body.firstChild);
*/

//var currentDiv = document.getElementById("main"); 
//document.body.appendChild(div, currentDiv);
document.body.appendChild(div);