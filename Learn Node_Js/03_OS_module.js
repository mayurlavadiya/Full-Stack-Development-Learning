// OS Feature
let os = require("os");
console.log("Achitecture - ", os.arch());
console.log("OS Platform - ", os.platform());

// for wifi details
console.log(os.networkInterfaces());

// for server details - load 
console.log(os.cpus());

console.log("check details related to server")