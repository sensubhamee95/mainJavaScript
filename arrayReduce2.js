// to find maximum number insides an array using reduce() array functions......
var arr = [1,2,150,3,4,5,100];
/*function findMax(arr){
    var max = 0;
    for(var i = 0;i = arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));*/
var output = arr.reduce(function(accumulator,current){
    if(current>accumulator){
        accumulator = current;
    }
    return accumulator;
},0);
console.log(output);
