var ages = [10,19,18,17,12,25,11,36];
    function checkadult(age){
        return age>=18;
    }
    var b = ages.filter(checkadult);
   // var b = ages.every(checkadult);
    console.log(b);