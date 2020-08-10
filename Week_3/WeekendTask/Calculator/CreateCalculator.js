
var h11 = document.createElement("H1");
h11.setAttribute("style"," ");
h11.appendChild(document.createTextNode("Javascript Calculator"));

var div1 = document.createElement("div");
div1.setAttribute("class","main-div");

var div2 = document.createElement("div");
div2.setAttribute("class","screen");
div2.setAttribute("id","screen");

var p1 = document.createElement("p");

div2.appendChild(p1);

var div3 = document.createElement("div");
div3.setAttribute("class","clear");
div3.setAttribute("id","clear");
div3.appendChild(document.createTextNode("C"));

var li1 = document.createElement("LI");
li1.appendChild(document.createTextNode("1"));

var li2 = document.createElement("LI");
li2.appendChild(document.createTextNode("2"));

var li3 = document.createElement("LI");
li3.appendChild(document.createTextNode("3"));

var liplus = document.createElement("LI");
liplus.appendChild(document.createTextNode("+"));

var li4 = document.createElement("LI");
li4.appendChild(document.createTextNode("4"));

var li5 = document.createElement("LI");
li5.appendChild(document.createTextNode("5"));

var li6 = document.createElement("LI");
li6.appendChild(document.createTextNode("6"));

var li7 = document.createElement("LI");
li7.appendChild(document.createTextNode("7"));

var lix = document.createElement("LI");
lix.appendChild(document.createTextNode("x"));

var li8 = document.createElement("LI");
li8.appendChild(document.createTextNode("8"));

var li9 = document.createElement("LI");
li9.appendChild(document.createTextNode("9"));

var liminus = document.createElement("LI");
liminus.appendChild(document.createTextNode("-"));

var li0 = document.createElement("LI");
li0.appendChild(document.createTextNode("0"));

var lidot = document.createElement("LI");
lidot.appendChild(document.createTextNode("."));

var liequals = document.createElement("LI");
//liequals.setAttribute("id","equals");
liequals.appendChild(document.createTextNode("="));

var lipercentage = document.createElement("LI");
lipercentage.appendChild(document.createTextNode("÷"));


var ul1 = document.createElement("UL");
ul1.setAttribute("class","number-div");
ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);
ul1.appendChild(liplus);
ul1.appendChild(li4);
ul1.appendChild(li5);
ul1.appendChild(li6);
ul1.appendChild(lix);
ul1.appendChild(li7);
ul1.appendChild(li8);
ul1.appendChild(li9);
ul1.appendChild(liminus);
ul1.appendChild(li0);
ul1.appendChild(lidot);
ul1.appendChild(liequals);
ul1.appendChild(lipercentage);

//div1.appendChild(h11);
div1.appendChild(div2);
div1.appendChild(div3);
div1.appendChild(ul1);

//document.body.appendChild(h11);
document.body.appendChild(div1);

window.onload = function (){
	var elements = document.getElementsByTagName("li");
	var screen = document.querySelectorAll(' p')[0];
	var clear =   document.getElementsByClassName('clear')[0];
	
	for(var i=0;i<elements.length;i+=1){
		  if(elements[i].innerHTML === '='){
			    elements[i].addEventListener("click", calculate(i));
		  }else{
			   elements[i].addEventListener("click", addtocurrentvalue(i));
		  }
	}
	

	
	
	function addtocurrentvalue (i){
		return function(){
			if (elements[i].innerHTML === "÷") {
               screen.innerHTML  +=  "/ " ;
      }else if(elements[i].innerHTML === "x"){
			      screen.innerHTML += "*";
		   } else{
			   screen.innerHTML  += elements[i].innerHTML;
		   }
	  };
   }
 


   clear.onclick = function () {
    screen.innerHTML = '';
  }; 

 function calculate(i) {
    return function () {
        screen.innerHTML = eval(screen.innerHTML);
    };
  }
};