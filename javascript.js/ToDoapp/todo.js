let inputbox= document.getElementById("attendance");
let btnbox= document.getElementById("addStudent");
let container= document.getElementById("studentContainer");

btnbox.addEventListener("click",function(){

    let student = document.createElement("div");
    student.textContent = inputbox.value;

    let deletbtn = document.createElement("button");
    deletbtn.textContent="Delete";

    deletbtn.addEventListener("click",function(){
        student.remove();
    });

    student.appendChild(deletbtn);
    container.appendChild(student)
    console.log(inputbox.value);
    inputbox.value="";

});