/*let student = {
    fname : "Subham",
    lname : "Sen",
    age : 26,
    country : "India"
};
for (var key in student){
    console.log(key +" : "+student[key]);
};*/
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
};
//console.log(Object.entries(object));