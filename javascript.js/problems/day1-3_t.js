// Part C – Coding (15 Marks)

// Q11. (5 Marks)

// age lo.

// 18+ → Eligible
// warna Not Eligible

let age = 17;

if (age>18){
    console.log("Eligible");
}
else{
    console.log ("Not Eligible");
}

// Q12. (5 Marks)

// Switch use karke:

// 1 → Monday

// 2 → Tuesday

// 3 → Wednesday

// Default → Invalid

let day=2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tursday");
        break;
    case 3:
        console.log("wendesday");
        break;    
    default:
        console.log("Invalid");
        break;
}


// Q13. (5 Marks)

// Calculator banao.
// Variables:

// let a = 20;
// let b = 5;
// let operator = "/";

// Switch use karo.
let a = 20;
let b = 5;
let operater= "/";

switch (operater) {
    case "+":
        console.log("Result:", a+b);
        break;
    case "-":
        console.log("Result:", a-b);
        break;
    case "/":
        console.log("Result:", a/b);    
        break;
    default:
        console.log("invaild operator!");
        break;
}






