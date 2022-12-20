// Types of Variables : Non Primitive ->  Function Array Objects

// ** 1. Function

// Definition of Function()
function hello(parameter){
    // console.log("Hello Im Mayur Lavadiya");
    // console.log("parame ter recieved", parameter );
    let rVal = Math.random() > 0.5 ? true : "Value is less then 0.5";
    // return "returned from the function";
    return rVal; 

}
// Hello(); // call the function()
// Hello("10"); // pass value 
// Hello([1,2,3,4,5]); // pass array in parameter

let rVal = hello([1,2,3,4,5]);
console.log("rval",rVal);