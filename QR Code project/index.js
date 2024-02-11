import inquirer from 'inquirer';
import fs from "fs";
import qr from 'qr-image';
inquirer
  .prompt([
    {message:"enter the URL", name:"URL"}
  ])
  .then((answers) => {
    fs.writeFile("name.text",answers.URL,(err)=> console.log("success?"));
   
 
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream('image.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
