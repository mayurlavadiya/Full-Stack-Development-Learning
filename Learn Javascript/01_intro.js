console.log("Hello I'm Mayur Lavadiya");

// 1. variable declaration -- Only : varibale kai type no chhe e na btave let ma
let a; // a variable chhe
a = 10; //
b = 10.1;
c = "Hello";
d ='How are you';
console.log("Variable container",a);

// Types of Variables : Primitive -> number, string, boolean, null;

// 2. For in Loop in JS
let number=10;
for (let i = 1; i <= number; i++){
    console.log("Number is ",i)   
}

// 3. isPrime in JS
let primenumber=44;
let flag = true;
for(let div = 2; div < primenumber; div++){
    if(number % div == 0){
        flag = false;
        break;
    }
}
if(flag == true){
    console.log(primenumber, " is prime");
}else{
    console.log(primenumber, " is not prime");
}

// 4.