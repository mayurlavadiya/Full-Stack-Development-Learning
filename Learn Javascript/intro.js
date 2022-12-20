console.log("Hello I'm Mayur Lavadiya");

// variable declaration -- Only
let a;
a = 10;
b = 10.1;
c = "Hello";
d ='How are you';
console.log("Variable container",a);

// For in Loop in JS
let number=10;
for (let i = 1; i <= number; i++){
    console.log("Number is ",i)   
}

//isPrime in JS
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