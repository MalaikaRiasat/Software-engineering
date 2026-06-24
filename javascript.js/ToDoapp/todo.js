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

    let editbtn = document.createElement("button");
    editbtn.textContent="Edit";

    editbtn.addEventListener("click", function(){
        let updateName=prompt("Enter new name");
        nameSpan.textContent= updateName;
    });

    container.appendChild(student);  
    inputbox.value="";
    console.log(inputbox.value);  
    student.appendChild(deletbtn);
    student.appendChild(editbtn);
    student.appendChild(nameSpan);
});