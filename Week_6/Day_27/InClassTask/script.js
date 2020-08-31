/*
var calculateVarient = (arrs) => {
    var noOfInputArrays = arrs.length;
    var maxLengtOfEachArray = arrs[0].length;
    for (var i = 1; i < arrs.length; i++) {
        if (arrs[i].length > maxLengtOfEachArray) {
            maxLengtOfEachArray = arrs[i].length;
        }
        else {
        }
    }

    console.log("maxLengtOfEachArray : "+maxLengtOfEachArray);
    console.log("noOfInputArrays : "+noOfInputArrays);

    var result = [];

    for (var k = 0; k < maxLengtOfEachArray ; k++) {
        //console.log("iterating longest array");
        var resultElement = [];

        for (var j = 0 ; j < noOfInputArrays ; j++) {
            var tempArr = arrs[j];

            eval('var ' + "tempArr" + i + ' = ' + tempArr + ';');

            console.log(tempArr+i);

            
            //console.log("tempArr : "+tempArr);
            //tempArr[i]; 
            if (tempArr[k] != undefined) {
                console.log("tempArr[i] : "+tempArr[k]);
                resultElement.push(tempArr[k]);
            }
        }

        result.push(resultElement);
    }
    return result;
};
var data = [['xl', 'xxl', 'L'], ['red', 'blue'],['cotton','silk','woolen']];
var finalResult = calculateVarient(data);

console.log(finalResult);
*/
function cartesian(...args) {
    var r = [], max = args.length-1;
    function helper(arr, i) {
        for (var j=0, l=args[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(args[i][j]);
            if (i==max)
                r.push(a);
            else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
}

console.log(cartesian([0,1], [0,1,2,3], [0,1,2]));
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
