console.log("java script is live Know");

let inputbox= document.getElementById("attendance");
let btnbox= document.getElementById("addStudent");
let container= document.getElementById("studentContainer");
let deletbtn = document.createElement("button");
deletbtn.textContent="Delete";

btnbox.addEventListener("click",function(){
    let student = document.createElement("div");
    student.textContent = inputbox.value;
    console.log(inputbox.value);
    inputbox.value="";

});