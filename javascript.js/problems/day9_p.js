// //Arry  slice()
// //p1
// let cities=["Lahore","Karachi","Islamabad","Multan"];

// let Ncities = cities.slice(1,3);
// console.log(Ncities);

// //p2
// let marks = [10,20,30,40,50];

// let Nmarks = marks.slice(1,4);

// console.log(Nmarks);

// //p3
// let skills = ["HTML","CSS","Javascript","React"];
// let Nskills = skills.slice(0,2);

// console.log(Nskills);



// //Challenge

// let months = ["Jan","Feb","Mar","Apr","May","Jun"];

// let Nmonths= months.slice(2,5);
// console.log(Nmonths);

// //splice
// //delete
// // p1
// let colours =["Red","Green","Blue","Black"];
// colours.splice(1,1);
// console.log(colours);

// //p2
// let numbers =[10,20,30,40,50];

// numbers.splice(2,2);
// console.log(numbers);

// //add
// //p1
// let colors = ["Red","Blue","Green"];
// colors.splice(1,0,"Yellow");
// console.log(colors);

// //p2

// let numbers = [10,20,40,50]
// numbers.splice(2,0,30);
// console.log(numbers);

// //p3
// let skills =["HTML","JavaScript"];
// skills.splice(1,0,"CSS");
// console.log(skills);

// //Replace
// //p1

// let colors = ["Red","Green","Blue"];
// colors.splice(1,1,"Yellow");
// console.log(colors);


// // p2
// let numbers =[10,20,30,40];
// numbers.splice(2,1,35);
// console.log(numbers);


// // p3
// let skills = ["HTML","CSS","Javascript"];
// skills.splice(1,1,"Bootstrap");
// console.log(skills);



// // includes
// // p1
// let colors = ["Red","Green","Blue"];
// console.log(colors.includes("Green"));

// // p2
// let students =["Ali","Sara","Malaika","Ahmad"];
// console.log(students.includes("Ayesha"));

// // p3
// let skills= ["HTML","CSS","JavaScript"];
// console.log(skills.includes("React"));
// console.log(skills.includes("CSS"));



// //indexof
// // p1
// let fruits =["Apple", "Banana","Mango","Orange"];
// console.log(fruits.indexOf("Mango"));


// // p2
// let cities =["Lahore","Karachi","Islamabad","Multan"];
// console.log(cities.indexOf("islamabad"));

// // p3
// let skills =["HTML","CSS","JavaScript","React"];
// console.log(skills.indexOf("React"));

// let colors =["Red","Green","Blue"];
// console.log(colors.indexOf("Yellow"));





// 

// finals


// 🔥 Challenge 1
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// Banana ko Grapes se replace karo.
// Apple check karo ke array mein hai ya nahi.
// Mango ka index find karo.

let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(1,1,"Grapes");
console.log(fruits);
console.log(fruits.includes("Apple"));
console.log(fruits.indexOf("Mango"));



// 🔥 Challenge 2
// let numbers = [10, 20, 30, 40, 50];
// 30 aur 40 delete karo.
// 25 ko 10 aur 20 ke beech add karo.
// 50 ka index find karo.

let numbers = [10, 20, 30, 40, 50];
numbers.splice(2,2);
numbers.splice(1,0,25);
console.log(numbers);
console.log(numbers.indexOf(50));



