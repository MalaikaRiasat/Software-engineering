let inputbox= document.getElementById("attendance");
let btnbox= document.getElementById("addStudent");
let container= document.getElementById("studentContainer");
//studeent ak arry ha 
//student ak html div ha
let students = JSON.parse(localStorage.getItem("students")) || [];
function showStudent(name,index){
    let student = document.createElement("div");
    // student.textContent = inputbox.value;
    
    let nameSpan=document.createElement("span");
    nameSpan.textContent= name;

    let deletbtn = document.createElement("button");
    deletbtn.textContent="Delete";
    deletbtn.classList.add("deleteBtn");


    deletbtn.addEventListener("click",function(){
        students.splice(index,1);

        localStorage.setItem("students",JSON.stringify(students));
        container.innerHTML="";
        // student.remove();
        students.forEach(function(name,index){
            showStudent(name,index);
});
        
    });

    let editbtn = document.createElement("button");
    editbtn.textContent="Edit";
    editbtn.classList.add("editBtn");

    editbtn.addEventListener("click", function(){
        let updateName=prompt("Enter new name");
        if(updateName){
            students[index]=updateName;
            localStorage.setItem("students",JSON.stringify(students));
        }
        nameSpan.textContent= updateName;
    });
    

    container.appendChild(student);  
     

    student.appendChild(nameSpan);  
    student.appendChild(deletbtn);  
    student.appendChild(editbtn);

}

btnbox.addEventListener("click",function(){
    if(inputbox.value===""){
        alert("Erroe!plz add student");
        return;
    }
    students.push(inputbox.value);
    localStorage.setItem("students", JSON.stringify(students));
    showStudent(inputbox.value,students.length-1);
    inputbox.value="";

    // let student = document.createElement("div");
    // // student.textContent = inputbox.value;
    
    // let nameSpan=document.createElement("span");
    // nameSpan.textContent= name;

    // let deletbtn = document.createElement("button");
    // deletbtn.textContent="Delete";
    // deletbtn.classList.add("deleteBtn");


    // deletbtn.addEventListener("click",function(){
    //     student.remove();
    // });

    // let editbtn = document.createElement("button");
    // editbtn.textContent="Edit";
    // editbtn.classList.add("editBtn");

    // editbtn.addEventListener("click", function(){
    //     let updateName=prompt("Enter new name");
    //     nameSpan.textContent= updateName;
    // });
    

    // container.appendChild(student);  
    // inputbox.value="";
    // console.log(inputbox.value);  

    // student.appendChild(nameSpan);  
    // student.appendChild(deletbtn);  
    // student.appendChild(editbtn);

});
students.forEach(function(name,index){
    showStudent(name,index);

});