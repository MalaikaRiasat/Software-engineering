//Problem — Simple Grade Checker

// Ek variable marks banao (const ya let), phir if/else use karke check karo:

// 90 ya us se zyada → "Grade: A"
// 80-89 → "Grade: B"
// 70-79 → "Grade: C"
// 70 se kam → "Grade: Fail"

// Bonus: typeof use karke check karo ke marks variable number hai ya nahi, agar number nahi hai to error message do: "Marks must be a number!"

// Try karo, code likh kar bhejo — main check kar dunga!


let marks="69";

if(typeof marks !== "number"){
    console.log("Marks must be numbers!");
    console.log("Type of marks now=",typeof marks);
}
else if(marks>=90){
    console.log("Grade:A");
}
else if(marks>=80 && marks<=89){
    console.log("Grade=B");
}
else if(marks>=70 && marks<=79){
    console.log("Grade=C");
}
else{
    console.log("Fail");
}