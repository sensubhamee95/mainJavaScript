//let arr = [3,4,5,6];
/*function double(x){
    return x*2;
}
function binary(x){
    return x.toString(2);
}
console.log(arr.map(double));*/
/*var output = arr.map(function (x){
    return x*3;
});
console.log(output);*/
/*arr.map(function (x){
    console.log(x*3);    
});*/
var arr = [3,4,5,6];
/*arr.map(function (x){
    console.log(x.toString(2));
});
var output = arr.map(function(x){
    return x.toString(2);
});
console.log(output);*/
var output = arr.map((x) => x.toString(2));
console.log(output);
