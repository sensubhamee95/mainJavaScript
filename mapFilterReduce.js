let list = [
    { fName : "Subham", lName : "sen",age : 26, city : "Goaltore"},
    { fName : "Rajdip", lName : "Mondal",age : 26, city : "Garhbeta"},
    { fName : "Falguni", lName : "Mukhopaddhay",age : 60, city : "saltlake"},
    { fName : "Souvik", lName : "Mallick",age : 26, city : "Goaltore"},
    { fName : "Akash", lName : "Bhowmik",age : 40, city : "Panskura"}
];
// find the full name of all characters....

/*var output = list.map( x => x.fName+" "+ x.lName)
console.log(output);*/
// findout the name of those age less than 30....
/*var eligibleList = list.filter( x => x.age < 30);
var output = eligibleList.map( x => x.fName+" "+ x.lName);
console.log(output);*/
/*var eligibleList = list.filter( x => x.age < 30).map( x => x.fName+" "+ x.lName);
console.log(eligibleList);*/
var output = list.reduce(function(x,y){
    if(x[y.age] < 30){
        x = y.fName+y.lName;
    }
    return x;
    
});
console.log(output);
