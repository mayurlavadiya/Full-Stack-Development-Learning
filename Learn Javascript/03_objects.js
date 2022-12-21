// Object is just a group of key value pair
// Key ni same value hoi ene properties kevay
// Key ni same function hoi ene method kevay


// Declaration of Object

let obj={
    name: "Mayur",
    lname: "Lavadiya",
    address:{ 
        city: "Rajkot",
        state: "Guajarat",
    },
    age: 35,
    isStudent : true, // boolean
    hobbies: ["Play","Movie","Coding"], // array
    sayHi : function(){ // function 
        console.log("Say Good Morning");
    },
};
// GET DATA
    // console.log(obj.name);
    // console.log(obj.lname);
    // console.log(obj.age);
    // console.log(obj.hobbies[1]);
    // obj.sayHi(); // function call

// SET/UPDATE DATA
    // console.log("Data Changes of",obj);
    // obj.age=25;
    // obj.name="Meet";
    // obj.friend = ["Savan","Krupali"];
    // console.log('*************');
    // console.log("Data Changes of",obj);

// DELETE DATA
    // delete obj.name

// FOR IN LOOP
    // for(let key in obj){
    //     console.log(key," : ", obj[key]);
    // }

// console.log(obj[age]);  ---- > square bracket ma variablne hse ene replace kri nepachi value search kare
// console.log(obj.age); -----> aa direct value search kre