// ** Deal with File & Folder **

// FILES --          Create                  update                 delete              writeFileSync
//                  open -w               readfileSync             unlinkSync

    let fs = require("fs");

    // read the file 
        let dataBuffer = fs.readFileSync("02_abc.js");
        console.log("binary data -" + dataBuffer); 

    // file open krva write mode ma
        fs.openSync("about_js.txt","w"); // w - writem mate

    // file create and jo file nhi hoi to create krse, jo hse to andar no data replace karse
        fs.writeFileSync("about_js.txt", "jo aa replace kri dese-----");

    // Add krva update krva append - pachad new data insert kri dese
     fs.appendFileSync("about_js.txt", " + jo kidhune ke aa apend krse");

// _________________________________________________________ //



// For Folder :             Create                   Read                    Delete
//                          mkdirSync              readdirSync               rmdirSync

    // create a new folder
        // fs.mkdirSync("My Directory");
        // fs.writeFileSync("My Directory/myFile.txt", "New file create in folder");

    // jetli file chhe folder mae show krse eno content n all

        // let content = fs.readdirSync("My Directory"); // fetch all file from folder My directory.....
        // console.log(content);

        // for(let i = 0; i < content.length; i++) {
        //     console.log("file :", content[i], "was removed");

            // unlink for file remove mate
        //     fs.unlinkSync("My Directory/" + content[i]); 
        // }

    // For remove folder
        // fs.rmdirSync("My Directory");



// fs.existsSync("My Directory") -- file already chhe path pr : true / false return
//     let doesPathExist = fs.existsSync("abc.txt");
//     console.log(doesPathExist);

// fs.lstatSync  -- path apyo chhe e file no chhe k folder no e check krva mate 
//     let detailsObj = fs.lstatSync(__dirname + "\\04_fileSystemModule.js");
//     let ans = detailsObj.isFile();
//     console.log("file chhe ? - ",ans);
//     ans = detailsObj.isDirectory();
//     console.log(ans);


// To make 10 or more folder at a single time using this --->

    // for(let i = 0; i <=10; i++ ){ // 10 folder banvva
    //     let folderMake = `Lecture-${i}`; // new folder banse lecture - 0 name thi lecture - 10
    //     fs.mkdirSync(folderMake);
    //     fs.writeFileSync(folderMake + "\\" + "readme.md", `# Readme for ${folderMake}`); // eni andar readme file banse
    // }


// PATH 







