// Problem 1 — sirf && (AND)
// Ek library system: user ko book issue tabhi ho jab:

// hasLibraryCard (boolean) true ho, aur
// booksAlreadyIssued (number) 3 se kam ho

// Agar dono true/valid hain → "Book issued", warna → "Cannot issue book"

// p1
let hasLibraryCard = true;
let booksAlreadyIssued = 2;

if (hasLibraryCard && booksAlreadyIssued<=3){
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
let feePaid = true;

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

let attendance = 80;
let feesCleared = true;

if (attendance>=75 && feesCleared){
    console.log("Eligible for exam");
}
else{
    console.log("Not eligible for exam");
}



// Problem 2 — sirf || (OR)
// Ek discount checker: customer ko discount milega agar:

// isStudent (boolean) true ho, ya
// isSeniorCitizen (boolean) true ho

// Agar koi bhi ek true ho → "Discount applied", warna → "No discount"

let isSeniorCitizen = true ;
let isStudent = true ;

if(isSeniorCitizen || isStudent){
    console.log("Discount applied");
}
else{
    console.log("No discount!");
}

// || — Problem 2
// Ek delivery checker: free delivery milegi agar:

// orderAmount 1000 se zyada ho, ya
// isPremiumMember (boolean) true ho

// Koi bhi ek true → "Free delivery", warna → "Delivery charges apply"

let orderAmount = 200;
let isPremiumMember = true ;

if(orderAmount>1000 || isPremiumMember){
    console.log("Free delivery");
}
else{
    console.log ("Delivery charges apply");
}


// || — Problem 3
// Ek weather-based activity checker: outdoor trip cancel hogi agar:

// isRaining (boolean) true ho, ya
// temperature 40 se zyada ho

// Koi bhi ek true → "Trip cancelled", warna → "Trip is on"

let isRaining = false;
let temperature = 29;

if (isRaining || temperature> 40){
    console.log("Trip cancelled");
}
else{
    console.log("Trip is on");
}


// ! — Problem 3
// Ek taskCompleted (boolean) variable hai. ! use karke:

// Agar task complete nahi hai → "Task pending"
// Agar hai → "Task done"

// Bonus: is baar ek if statement mein directly !taskCompleted condition likho (variable mein store kiye baghair), jaisa: if (!taskCompleted) { ... }

let taskCompleted = true;
if(!taskCompleted){
    console.log("Task pending");
}
else{
    console.log("Tast Done");
}


// ! — Problem 2
// Ek isOnline (boolean) variable hai jo batata hai user online hai ya nahi. ! use karke:

// Agar user online nahi hai → "User is offline"
// Agar hai → "User is online"

// Bonus check: !isOnline ko ek variable isOffline mein store karke print bhi karo, taake dekho ! value ko kaise ulta karta hai.

let isOnline = true;
if(!isOnline){
    console.log ("User is offline");
}
else{
    console.log("User is online");
}

// Problem 3 — sirf ! (NOT)
// Ek isMaintenanceMode (boolean) variable hai jo batata hai website maintenance mein hai ya nahi. ! use karke check karo:

// Agar maintenance mode nahi hai → "Website is live"
// Agar hai → "Website is under maintenance"

let isMaintenanceMode= true;
if(!isMaintenanceMode){
    console.log("Website is live");
}
else{
    console.log("Website is under maintenance");
}


// Problem 4 — Mix (Login System)
// Variables: username, password, isAccountLocked (boolean)

// Agar isAccountLocked true hai → "Account locked, contact support"
// Warna agar username aur password dono khaali (empty string) nahi hain → "Login successful"
// Warna → "Please enter username and password"

// (Hint: khaali string check ke liye !username use kar sakte ho, kyunke empty string falsy hoti hai)

let username;
let password;
let isAccountLocked=true;

if(isAccountLocked){
    console.log("Account locked, contact support");
}
else if (!username && !password){
    console.log("Login successful");
}
else{
    console.log("Please enter password and user name");
}




// Problem 5 — Mix (Restaurant Reservation)
// Variables: hasReservation (boolean), isVIP (boolean), tableAvailable (boolean)

// Agar isVIP true hai ya (hasReservation aur tableAvailable dono true hain) → "Seated immediately"
// Warna agar tableAvailable true hai (lekin reservation na ho) → "Seated with wait"
// Warna → "No seating available"

// Sab 5 try karo, code bhejo ek ek karke ya sab ikatthe — jaisa aapko sahoolat ho. 
// Movie ticket wala problem (pichla message) bhi abhi baaki hai agar wo bhi karna ho to alag se bata dena.

let hasReservation 
