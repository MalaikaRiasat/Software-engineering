interface User {
  name: string;  // Must be text
  id: number;    // Must be a number
}

type ID = number | string;

function printID(id: ID) {
  console.log("Your ID is: " + id);
}

printID(101);   // Totally fine!
printID("A-99"); // Also totally fine!