

let calculateVarient = (arrs) => {

	let noOfInputArrays = arrs.length-1;

    let maxLengtOfEachArray = arrs[0].length;

    for(let i = 1 ; i < arrs.length ; i++){
    	if(arrs[i].length > maxLengtOfEachArray){
    		maxLengtOfEachArray = arrs[i].length;
    	}else{

    	}
    }

    let result = [];
    for(let i = 0 ; i < maxLengtOfEachArray.length ; i++){
    	let resultElement = [];

    	for(let j = 0 ; j < noOfInputArrays ; j++){
    		//eval('var ' + arr + i + '= ' + i + ';');
    		let tempArr = arrs[j];
    		//tempArr[i]; 
    		if(tempArr[i] != undefined){
    			resultElement.push(tempArr[i]);
    		}
    	}

    	result.push(resultElement);
    }

    return result;

}
let data = [['xl','xxl','L'],['red','blue']]
let result = calculateVarient(data);



/*

function calculateVarient(arrs) {

    let noOfInputArrays = arrs.length-1;

    let maxLengtOfEachArray = arrs.[0].length;

    for(let i = 1 ; i < arrs.length ; i++){
    	if(arrs[i].length > maxLengtOfEachArray){
    		maxLengtOfEachArray = arrs[i].length;
    	}else{

    	}
    }

    let result = [];
    for(let i = 0 ; i < maxLengtOfEachArray.length ; i++){
    	let resultElement = [];

    	for(let j = 0 ; j < noOfInputArrays ; j++){
    		//eval('var ' + arr + i + '= ' + i + ';');
    		let tempArr = arrs[j];
    		//tempArr[i]; 
    		if(tempArr[i] != undefined){
    			resultElement.push(tempArr[i]);
    		}
    	}

    	result.push(resultElement);
    }

    return result;
}

*/