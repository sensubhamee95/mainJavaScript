var per=64;
switch(per){
    case(per>=80 && per<100):
    console.log("You are in Merit");
    break;

    case(per>=60 && per<=79):
    console.log("You are in 1st Division");
    break;

    case(per>=45 && per<=59):
    console.log("You are in 2nd Division");
    break;

    case(per<=33 && per<=44):
    console.log("You are in 3rd Division");
    break;

    case(per<33):
    console.log("You are Fail");
    break;
    default:
        console.log("Please Enter a Valid Percentage");
}