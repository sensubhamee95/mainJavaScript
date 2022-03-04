let student = [
    {"fname" : "Subham","lname" : "Sen","Age" : 26},
    {"fname" :"Rajdip", "lname" : "Mondal", Age : 25},
    {fname : "Akash" , lname : "Bhowmik" , Age : 24}
];
delete student[2].lname
console.log(student);
for (var i = 0 ; i < student.length ; i++){
    console.log(student[i].lname);
};
