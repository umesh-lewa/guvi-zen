function myBaseFunction(a,b){
    var val1=20;
    var val2=10;

if(+a == 0){       
	oper[a]=add(val1,val2);
    return oper[a];

}

if(+a == 1){   
	oper[a]=sub(val1,val2);
    return oper[a];
}

if(+a == 2){   
	oper[a]=mul(val1,val2);
    return oper[a];
}

}
var oper = [add,sub,mul];

o1=myBaseFunction(0,oper);
console.log(o1);

o2=myBaseFunction(1,oper);
console.log(o2);


o3=myBaseFunction(2,oper);
console.log(o3);

function add(a,b){
    
    return +a + +b;
}

function sub(a,b){

    return +a - +b;
}

function mul(a,b){

    return +a * +b;
}