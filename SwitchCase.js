var age =55;
switch(true){
    case(age>=18 && age<=25):
    console.log("you are eligible in general quota");
    break;
    case(age>=18 && age<=30):
    console.log("you are eligible including ST quota");
    break;
    default:
        console.log("you are not eligible");
}