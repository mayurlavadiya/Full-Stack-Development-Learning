
// PATH

let path = require("path");
for(let i = 0; i <=10; i++ ){ // 10 folder banvva
        let folderMake = `Lecture-${i}`; // new folder banse lecture - 0 name thi lecture - 10
        fs.mkdirSync(folderMake);
        fs.writeFileSync(path.join(folderMake , "readme.md"), `# Readme for ${folderMake}`); // eni andar readme file banse
    }

let extension = path.extname(path.join(__dirname,"abc.js")); // filenu extension aapse
console.log("extension", extension);

let folderName = path.basename(__dirname); // folder nu name aapse 
console.log(folderName);

folderName = path.extname(path.join(__dirname,"abc.js"));
console.log(folderName);


