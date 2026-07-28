// Problem 1 — sirf && (AND)
// Ek library system: user ko book issue tabhi ho jab:

// hasLibraryCard (boolean) true ho, aur
// booksAlreadyIssued (number) 3 se kam ho

// Agar dono true/valid hain → "Book issued", warna → "Cannot issue book"

// p1
let hasLibraryCard = true;
let booksAlreadyIssued = true;

if (hasLibraryCard && booksAlreadyIssued){
    console.log("Book issued");
}
else{
    console.log("Cannot issue book");
}



// && — Problem 2
// Ek gym membership checker: entry milegi tabhi jab:
// hasMembership (boolean) true ho, aur
// feePaid (boolean) true ho
// Dono true → "Welcome to the gym", warna → "Access denied"
// p2

let hasMembership = true;
let feePaid = ture;

if (hasMembership && feePaid){
    console.log("Wellcome to the gym");
}
else{
    console.log("Access denied!");
}




// && — Problem 3
// Ek exam eligibility checker: student exam de sakta hai agar:

// attendance (number, percentage) 75 ya us se zyada ho, aur
// feesCleared (boolean) true ho

// Dono sahi → "Eligible for exam", warna → "Not eligible for exam"

let attendance = true;
let feesCleared = true;

if (attendance && feesCleared){
    console.log("Eligible for exam");
}
else{
    console.log("Not eligible for exam");
}
