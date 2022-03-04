//To find the total sum of the elements of an array using reduce functions.....
var arr = [1,2,3,4,5,6];
/*function total(arr){
    var sum = 0;
    for(var i = 0 ; i < arr.length ; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(total(arr));*/
var output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);
console.log(output);