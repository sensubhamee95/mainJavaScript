var obj = {fname : "Subham",
lname : "Sen",
age : 26,
emailId : "sensubhamee95@gmail.com",
friend : ["Rajdip","Mondal",26,"mondalrajdip95@gmail.com"],
friend1 : ["Akash","Bhowmick",26,"bhowmickakash@gmail.com"],
surName : function(){
return obj.lname+" "+obj.friend[1]+" "+this.friend1[1];
},
place : {
    selfCity : "Goaltore",
    friendCity : "Garhbeta",
    friend1City : "Panskura"
}

};
console.log(obj.surName());
 
  
   