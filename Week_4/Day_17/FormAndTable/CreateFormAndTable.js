

var form1 = document.createElement("form");
form1.setAttribute("id","myForm");
//form1.setAttribute("onsubmit","addDataToTable()");

var table1 = document.createElement("table");
table1.setAttribute("style","width: 60%;background-color: #B5F2FF;margin-left: 400px;margin-top: 80px;");

var colgroup1 = document.createElement("colgroup");

var colspan1 = document.createElement("col");
colspan1.setAttribute("span","1");
colspan1.setAttribute("style","width: 30%;")
var colspan2 = document.createElement("col");
colspan2.setAttribute("span","1");
colspan2.setAttribute("style","width: 30%;")

colgroup1.appendChild(colspan1);
colgroup1.appendChild(colspan2);

table1.appendChild(colgroup1);

var tr1 = document.createElement("tr");
var th1 = document.createElement("th");
var th2 = document.createElement("th");

tr1.appendChild(th1);
tr1.appendChild(th2);

table1.appendChild(tr1);

var tr2 = document.createElement("tr");
var td21 = document.createElement("td");
var label21 = document.createElement("label");
var h321 = document.createElement("H3");
h321.appendChild(document.createTextNode("First Name"));
var br21 = document.createElement("br");

label21.appendChild(h321);
td21.appendChild(label21);
td21.appendChild(br21);

var td22 = document.createElement("td");
var input22 = document.createElement("input");
input22.setAttribute("type","text");
input22.setAttribute("id","inp1");
input22.setAttribute("placeholder","First Name");
input22.setAttribute("style","min-height: 30px; min-width: 200px;");
input22.setAttribute("required","");
input22.setAttribute("autofocus","");

td22.appendChild(input22);

tr2.appendChild(td21);
tr2.appendChild(td22);

table1.appendChild(tr2);

//row  2

var tr3 = document.createElement("tr");
var td31 = document.createElement("td");
var label31 = document.createElement("label");
var h331 = document.createElement("H3");
h331.appendChild(document.createTextNode("Last Name"));
var br31 = document.createElement("br");

label31.appendChild(h331);
td31.appendChild(label31);
td31.appendChild(br31);

var td32 = document.createElement("td");
var input32 = document.createElement("input");
input32.setAttribute("type","text");
input32.setAttribute("id","inp1");
input32.setAttribute("placeholder","Last Name");
input32.setAttribute("style","min-height: 30px; min-width: 200px;");
input32.setAttribute("required","");
input32.setAttribute("autofocus","");

td32.appendChild(input32);

tr3.appendChild(td31);
tr3.appendChild(td32);

table1.appendChild(tr3);

// row 3

var tr4 = document.createElement("tr");
var td41 = document.createElement("td");
var label41 = document.createElement("label");
var h341 = document.createElement("H3");
h341.appendChild(document.createTextNode("Address"));
var br41 = document.createElement("br");

label41.appendChild(h341);
td41.appendChild(label41);
td41.appendChild(br41);

var td42 = document.createElement("td");
var input42 = document.createElement("input");
input42.setAttribute("type","text");
input42.setAttribute("id","inp1");
input42.setAttribute("placeholder","Address");
input42.setAttribute("style","min-height: 30px; min-width: 200px;");
input42.setAttribute("required","");
input42.setAttribute("autofocus","");

td42.appendChild(input42);

tr4.appendChild(td41);
tr4.appendChild(td42);

table1.appendChild(tr4);

//row 5

var trp = document.createElement("tr");
var tdp1 = document.createElement("td");
var labelp1 = document.createElement("label");
var h3p1 = document.createElement("H3");
h3p1.appendChild(document.createTextNode("Pincode"));
var brp1 = document.createElement("br");

labelp1.appendChild(h3p1);
tdp1.appendChild(labelp1);
tdp1.appendChild(brp1);

var tdp2 = document.createElement("td");
var inputp2 = document.createElement("input");
inputp2.setAttribute("type","text");
inputp2.setAttribute("id","inp1");
inputp2.setAttribute("placeholder","Pincode");
inputp2.setAttribute("style","min-height: 30px; min-width: 200px;");
inputp2.setAttribute("required","");
inputp2.setAttribute("autofocus","");

tdp2.appendChild(inputp2);

trp.appendChild(tdp1);
trp.appendChild(tdp2);

table1.appendChild(trp);

// row 6

var tr5 = document.createElement("tr");
var td51 = document.createElement("td");
var label51 = document.createElement("label");
var h351 = document.createElement("H3");
h351.appendChild(document.createTextNode("Gender"));
var br51 = document.createElement("br");

label51.appendChild(h351);
td51.appendChild(label51);
td51.appendChild(br51);

var td52 = document.createElement("td");
/*
var input52 = document.createElement("input");
input52.setAttribute("type","text");
input52.setAttribute("id","inp1");
input52.setAttribute("placeholder","Gender");
input52.setAttribute("style","min-height: 30px; min-width: 200px;");
input52.setAttribute("required","");
input52.setAttribute("autofocus","");
*/
var select521 = document.createElement("select");
select521.setAttribute("style","min-height: 30px; min-width: 150px;");
select521.setAttribute("required","");

var option5211 = document.createElement("option");
option5211.setAttribute("value","");
option5211.appendChild(document.createTextNode("Choose"));
var option5212 = document.createElement("option");
option5212.setAttribute("value","Male");
option5212.appendChild(document.createTextNode("Male"));
var option5213 = document.createElement("option");
option5213.setAttribute("value","Female");
option5213.appendChild(document.createTextNode("Female"));

select521.appendChild(option5211);
select521.appendChild(option5212);
select521.appendChild(option5213);

td52.appendChild(select521);

tr5.appendChild(td51);
tr5.appendChild(td52);

table1.appendChild(tr5);

// row 7

var tr6 = document.createElement("tr");
var td61 = document.createElement("td");
var label61 = document.createElement("label");
var h361 = document.createElement("H3");
h361.appendChild(document.createTextNode("Choice of Food"));
var br61 = document.createElement("br");

label61.appendChild(h361);
td61.appendChild(label61);
td61.appendChild(br61);

var td62 = document.createElement("td");

var select621 = document.createElement("select");
select621.setAttribute("style","min-height: 30px; min-width: 150px;");
select621.setAttribute("required","");

var option6211 = document.createElement("option");
option6211.setAttribute("value","");
option6211.appendChild(document.createTextNode("Choose"));
var option6212 = document.createElement("option");
option6212.setAttribute("value","Cereal");
option6212.appendChild(document.createTextNode("Cereal"));
var option6213 = document.createElement("option");
option6213.setAttribute("value","Pancakes");
option6213.appendChild(document.createTextNode("Pancakes"));
var option6214 = document.createElement("option");
option6214.setAttribute("value","Waffles");
option6214.appendChild(document.createTextNode("Waffles"));
var option6215 = document.createElement("option");
option6215.setAttribute("value","Sausage");
option6215.appendChild(document.createTextNode("Sausage"));
var option6216 = document.createElement("option");
option6216.setAttribute("value","Sausage");
option6216.appendChild(document.createTextNode("Ommlete"));

select621.appendChild(option6211);
select621.appendChild(option6212);
select621.appendChild(option6213);
select621.appendChild(option6214);
select621.appendChild(option6215);
select621.appendChild(option6216);

var select622 = document.createElement("select");
select622.setAttribute("style","min-height: 30px; min-width: 150px;");
select622.setAttribute("required","");

var option6221 = document.createElement("option");
option6221.setAttribute("value","");
option6221.appendChild(document.createTextNode("Choose"));
var option6222 = document.createElement("option");
option6222.setAttribute("value","Cereal");
option6222.appendChild(document.createTextNode("Cereal"));
var option6223 = document.createElement("option");
option6223.setAttribute("value","Pancakes");
option6223.appendChild(document.createTextNode("Pancakes"));
var option6224 = document.createElement("option");
option6224.setAttribute("value","Waffles");
option6224.appendChild(document.createTextNode("Waffles"));
var option6225 = document.createElement("option");
option6225.setAttribute("value","Sausage");
option6225.appendChild(document.createTextNode("Sausage"));
var option6226 = document.createElement("option");
option6226.setAttribute("value","Sausage");
option6226.appendChild(document.createTextNode("Ommlete"));

select622.appendChild(option6221);
select622.appendChild(option6222);
select622.appendChild(option6223);
select622.appendChild(option6224);
select622.appendChild(option6225);
select622.appendChild(option6226);

td62.appendChild(select621);
td62.appendChild(select622);

/*
var input62 = document.createElement("input");
input62.setAttribute("type","text");
input62.setAttribute("id","inp1");
input62.setAttribute("placeholder","Choice of Food");
input62.setAttribute("style","min-height: 30px; min-width: 200px;");
input62.setAttribute("required","");
input62.setAttribute("autofocus","");

td62.appendChild(input62);
*/

tr6.appendChild(td61);
tr6.appendChild(td62);


table1.appendChild(tr6);

// row 8

var tr7 = document.createElement("tr");
var td71 = document.createElement("td");
var label71 = document.createElement("label");
var h371 = document.createElement("H3");
h371.appendChild(document.createTextNode("State"));
var br71 = document.createElement("br");

label71.appendChild(h371);
td71.appendChild(label71);
td71.appendChild(br71);

var td72 = document.createElement("td");
var input72 = document.createElement("input");
input72.setAttribute("type","text");
input72.setAttribute("id","inp1");
input72.setAttribute("placeholder","State");
input72.setAttribute("style","min-height: 30px; min-width: 200px;");
input72.setAttribute("required","");
input72.setAttribute("autofocus","");

var td72 = document.createElement("td");
var select721 = document.createElement("select");
select721.setAttribute("required","");
select721.setAttribute("style","min-height: 30px; min-width: 200px;");
var option72choose = document.createElement("option");
option72choose.setAttribute("value","");
option72choose.appendChild(document.createTextNode("Choose"));
var option721 = document.createElement("option");
option721.setAttribute("value","Andhra Pradesh");
option721.appendChild(document.createTextNode("Andhra Pradesh"));
var option722 = document.createElement("option");
option722.setAttribute("value","Karnataka");
option722.appendChild(document.createTextNode("Karnataka"));
var option723 = document.createElement("option");
option723.setAttribute("value","Gujarat");
option723.appendChild(document.createTextNode("Gujarat"));
var option724 = document.createElement("option");
option724.setAttribute("value","Tamil Nadu");
option724.appendChild(document.createTextNode("Tamil Nadu"));
var option725 = document.createElement("option");
option725.setAttribute("value","Uttar Pradesh");
option725.appendChild(document.createTextNode("Uttar Pradesh"));

select721.appendChild(option72choose);
select721.appendChild(option721);
select721.appendChild(option722);
select721.appendChild(option723);
select721.appendChild(option724);
select721.appendChild(option725);


td72.appendChild(select721);

tr7.appendChild(td71);
tr7.appendChild(td72);

table1.appendChild(tr7);

// row 9

var tr8 = document.createElement("tr");
var td81 = document.createElement("td");
var label81 = document.createElement("label");
var h381 = document.createElement("H3");
h381.appendChild(document.createTextNode("Country"));
var br81 = document.createElement("br");

label81.appendChild(h381);
td81.appendChild(label81);
td81.appendChild(br81);

var td82 = document.createElement("td");
/*
var input82 = document.createElement("input");
input82.setAttribute("type","text");
input82.setAttribute("id","inp1");
input82.setAttribute("placeholder","Country");
input82.setAttribute("style","min-height: 30px; min-width: 200px;");
input82.setAttribute("required","");
input82.setAttribute("autofocus","");
*/
var select821 = document.createElement("select");
select821.setAttribute("required","");
select821.setAttribute("style","min-height: 30px; min-width: 200px;");
var option82choose = document.createElement("option");
option82choose.setAttribute("value","");
option82choose.appendChild(document.createTextNode("Choose"));
var option821 = document.createElement("option");
option821.setAttribute("value","Australia");
option821.appendChild(document.createTextNode("Australia"));
var option822 = document.createElement("option");
option822.setAttribute("value","France");
option822.appendChild(document.createTextNode("France"));
var option823 = document.createElement("option");
option823.setAttribute("value","India");
option823.appendChild(document.createTextNode("India"));
var option824 = document.createElement("option");
option824.setAttribute("value","USA");
option824.appendChild(document.createTextNode("USA"));
var option825 = document.createElement("option");
option825.setAttribute("value","Australia");
option825.appendChild(document.createTextNode("Zimbabwae"));

select821.appendChild(option82choose);
select821.appendChild(option821);
select821.appendChild(option822);
select821.appendChild(option823);
select821.appendChild(option824);
select821.appendChild(option825);

td82.appendChild(select821);

tr8.appendChild(td81);
tr8.appendChild(td82);

table1.appendChild(tr8);

// add submit  button

tdb = document.createElement("td");
/*
submitButton = document.createElement("button");
submitButton.setAttribute("class","button3");
submitButton.setAttribute("style","margin-left: 550px;font-size:18px;");
submitButton.setAttribute("onclick","addDataToTable()");
submitButton.appendChild(document.createTextNode("Submit"));
*/
var submitButton = document.createElement("input");
submitButton.setAttribute("type","button");
submitButton.setAttribute("class","button3");
submitButton.setAttribute("style","margin-left: 550px;font-size:18px;");
submitButton.setAttribute("onclick","addDataToTable()");
submitButton.setAttribute("value","Submit");


tdb.appendChild(submitButton);

table1.appendChild(tdb);

var h3InBetween = document.createElement("h3");
h3InBetween.setAttribute("style","text-align: center;");
h3InBetween.appendChild(document.createTextNode("The Submitted Data will be Displayed Below"));



// create second table to disply the data

var table2 = document.createElement("table");
table2.setAttribute("id","myTable2");
table2.setAttribute("style","width: 80%;background-color: #B5F2FF;margin-left: 250px");

/*
var colgroup1 = document.createElement("colgroup");

var colspan1 = document.createElement("col");
colspan1.setAttribute("span","1");
colspan1.setAttribute("style","width: 30%;")
var colspan2 = document.createElement("col");
colspan2.setAttribute("span","1");
colspan2.setAttribute("style","width: 30%;")

colgroup1.appendChild(colspan1);
colgroup1.appendChild(colspan2);

table1.appendChild(colgroup1);
*/

var tr1table2 = document.createElement("tr");
var th1table2 = document.createElement("th");
th1table2.appendChild(document.createTextNode("First Name"));
var th2table2 = document.createElement("th");
th2table2.appendChild(document.createTextNode("Last Name"));
var th3table2 = document.createElement("th");
th3table2.appendChild(document.createTextNode("Address"));
var th4table2 = document.createElement("th");
th4table2.appendChild(document.createTextNode("Pincode"));
var th5table2 = document.createElement("th");
th5table2.appendChild(document.createTextNode("Gender"));
var th6table2 = document.createElement("th");
th6table2.appendChild(document.createTextNode("Food"));
var th7table2 = document.createElement("th");
th7table2.appendChild(document.createTextNode("State"));
var th8table2 = document.createElement("th");
th8table2.appendChild(document.createTextNode("Country"));

tr1table2.appendChild(th1table2);
tr1table2.appendChild(th2table2);
tr1table2.appendChild(th3table2);
tr1table2.appendChild(th4table2);
tr1table2.appendChild(th5table2);
tr1table2.appendChild(th6table2);
tr1table2.appendChild(th7table2);
tr1table2.appendChild(th8table2);

table2.appendChild(tr1table2);

// add things to main div

form1.appendChild(table1);

var div1 = document.createElement("div");
div1.setAttribute("class","main-div");

div1.appendChild(form1);

var brLast =  document.createElement("br");

div1.appendChild(brLast);
div1.appendChild(h3InBetween);
div1.appendChild(table2);

document.body.appendChild(div1);