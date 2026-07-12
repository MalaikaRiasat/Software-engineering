let name="Malaika";  // name is string
console.log(typeof(name));

console.log(name);
// name = 19;   // Error becuse name value is string and it can not change there datatype
console.log(name);



//Type inference
let age=21;  // age is number
// age="twenty" error because age value in number not a string

console.log(age);


//interface
//commanly used with objects


interface student{
    rollNO: number;
    class: string;
    contactNo: number;
}
// its mean that every student must have there rollNO in numbers, class in string and the last one contact number in numbers