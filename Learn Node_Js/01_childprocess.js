let cp = require("child_process");
console.log("trying to open calc");
cp.execSync("calc");

cp.execSync("start chrome https:\\www.google.com");
console.log("Open our *_*");

let output = cp.execSync("node 02_abc.js");
console.log(output);

