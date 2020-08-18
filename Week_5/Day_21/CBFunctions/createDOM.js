var baseDiv=document.createElement('div');

var s=document.createElement('span');
s.id='counter';
s.innerText='Get Ready !';

div1=document.createElement('div');
div1.id="message";

baseDiv.appendChild(s);
baseDiv.append(div1);

document.body.append(baseDiv);