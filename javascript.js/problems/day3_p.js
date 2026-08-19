// 1. Traffic Light
// color variable ("red", "yellow", "green") ke hisaab se print karo:
//  red → "Stop", yellow → "Get ready", green → "Go", koi aur value → "Invalid color"

let Traffic_light = "green";
switch (Traffic_light){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
        break;
}

// 2. Simple Calculator
// operator ("+", "-", "*", "/") aur do numbers a, b lo. 
// Switch se operation perform karo aur result print karo. Invalid operator pe → "Invalid operator"

let a=4;
let b=3;
let operator= "*";
switch (operator) {
    case "+":
        console.log(a+b);
        break;
    case "/":
        console.log(a/b);
        break;
    case "-":
        console.log(a-b);
        break;    
    case "*":
        console.log(a*b);
        break;
    default:
        console.log("Must be enter arithmtic operater");
        break;
}

// 3. Day Name (Number to Day)
// dayNumber (1-7) ke hisaab se din ka naam print karo (1 → "Monday" ... 7 → "Sunday").
//  Invalid number pe → "Invalid day number"
let dayNumber=1;
switch (dayNumber) {
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
        console.log("must be enter in 1-7 numbers")
        break;
}



// 4. Grade to Remarks
// grade ("A", "B", "C", "D", "F") ke hisaab se remark print karo: 
// A → "Excellent", B → "Good", C → "Average", D → "Below Average", F → "Fail", koi aur → "Invalid grade"
let grade="C";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");        
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Below Average");
        break;
    case "F":
        console.log("Fail")
        break;            
    default:
        console.log("invalid grade")
        break;
}


// 5. Vehicle Fare Calculator
// vehicleType ("bike", "car", "truck") ke hisaab se fare print karo:
//  bike → "Fare: Rs. 50", car → "Fare: Rs. 100", truck → "Fare: Rs. 200", default → "Unknown vehicle type"

let vehicleType = "truck";

switch (vehicleType) {
    case "car":
        console.log("Fare: Rs.100");
        break;
   case "bike":
        console.log("Fare: Rs.50");
        break;
   case "truck":
        console.log("Fare: Rs.200");
        break;
    default:
        console.log("unknown vehicle type");
        break;
}


// 6. Month to Season (Intentional Fall-through required)
// month (1-12) lo aur season print karo — December, January, February → "Winter"; 
// March, April, May → "Spring"; June, July, August → "Summer"; September, October, November → "Autumn".
//  (Jaisa upar wala example tha, cases ko bina break ke group karo)

let month =5;

switch (month) {
    case 12 :
    case 1:
    case 2:
        console.log("Winter");    
        break;
    case 3 :
    case 4 :
    case 5:
        console.log("spring");    
        break;
    case 6 :
    case 7 :
    case 8:
        console.log("summer");    
        break;
    case 9 :
    case 10 :
    case 11:
        console.log("Autumn");    
        break;    
    default:
        console.log("must be enter a velid month")
        break;
}


// 7. HTTP Status Code Checker
// statusCode (jaise 200, 404, 500, 301) lo aur uska matlab print karo:
//  200 → "OK", 404 → "Not Found", 500 → "Internal Server Error", 301 → "Redirect", default → "Unknown status code"

let statusCode = 500;
switch (statusCode) {
    case 200:
        console.log("ok");
        break;
    case 404:
        console.log("Not");
        break;
    case 500:
        console.log("Internal");
        break;
    case 301:
        console.log("Redirect");
        break;        
    default:
        console.log("Unknown status code")
        break;
}
