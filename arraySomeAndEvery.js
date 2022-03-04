/*var ages = [10,13,18,17];
        for(var a = 0;a<4;a++){
            var age = ages[a];
            //console.log(age);
            if(age >= 18){
                console.log("you are eligible");
            }else{
                console.log("you are not eligible");
            }
    }*/
    var ages = [10,13,18,17];
    function checkadult(age){
        return age>=18;
    }
    var b = ages.some(checkadult);
    //var b = ages.every(checkadult);
    console.log(b);
    console.log(ages);
    

    
   
        
        
