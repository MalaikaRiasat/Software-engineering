const { ModuleGraph } = require("vite");

// objects
let Book ={
    title:"peer-e-kamel",
    author:"Nimra Ahmad",
    pages:1750,
    price:1500
}
console.log("Title:",Book.title);
console.log("Price:",Book.price);
console.log("Page:",Book.page);
console.log("author:",Book.author);


let Laptop ={
    brand:"hp",
    model:"5th",
    ram:"4GB",
    price:70000
}
console.log("brand:",Laptop.brand);
console.log("modal:",Laptop.model);
console.log("ram:",Laptop.ram);
console.log("price:",Laptop.price);




let teacher={
    name:"Ali",
    Subject:"javaScript",
    experience: 5,
}

console.log(teacher.name);
console.log(teacher.Subject);
console.log(teacher.Subjec);

// update
//delet
//add new value
// p1
let mobile = {
    brand:"Samsung",
    model:"A54",
    price:80000
}

mobile.price = 85000;

mobile.storage = "128GB";

delete mobile.model;

console.log(mobile);

// p2
let book={
    titel:"peer-e-kamel",
    author:"Nimra Ahmad",
}
book.price=1750;
book.author="Umera Ahmad";

delete book.titel;

console.log(book);


//p3
// add ho jay ga khud ki ya add to value ka concept ha