// let age = prompt("Enter your age: ")
let age = 17
if(age>=13 && age<=19){
    console.log("You are a teenager.");
}
else{
    console.log("You are not a teenager.");
}

let day = 4
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter a valid day.");
}

let num = 17
if(num%2==0){
    if(num%3==0){
        console.log("Divisible by both 2 and 3");
    }
    else{
        console.log("Divisible by only 2");
    }
}
else{
    if(num%3==0){
        console.log("Divisible by only 3");
    }
    else{
        console.log("Divisible by none");
    }
}

let drivingAge = 21
drivingAge>=18 ? console.log("You can drive") : console.log("You can not drive"); 