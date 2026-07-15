function school(){
    console.log("hello");
}
school();

//function into function
function out(){
    function inn(){
        console.log("inner");
    }
    inn();
}

out();

