var ages = [10,13,18,17];
    function checkadult(age){
        return age>=18;
    }
    var b = ages.find(checkadult);
    //var b = ages.findIndex(checkadult);
    console.log(b);
    
    