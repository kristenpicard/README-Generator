// TODO: Include packages needed for this application DONE
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const mit    = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
const gnu    = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";
const isc    = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";
const apache = "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).";

// Followed example in class
inquirer
  .prompt([
    {
      type: 'input',  
      message: 'What is the project Title?',
      name: 'title',
      validate: function (input) {
        if (input == " ") {
            console.log("Please enter a valid title");
        };
        return true;
        },
    },
    {
        type: 'input',  
        message: 'Enter a description of your project: ',
        name: 'description',  
        validate: function (input) {
            if (input == " ") {
                console.log("Please enter a valid description");
            };
            return true;
            },
    },
    {
        type: 'input',  
        message: 'Enter installation instructions: ',
        name: 'install',
        validate: function (input) {
            if (input == " ") {
                console.log("Please enter valid install instructions");
            };
            return true;
            },
    },
    {
        type: 'input',  
        message: 'Enter usage information:',
        name: 'usage',
        validate: function (input) {
            if (input == " ") {
                console.log("Please enter valid usage info");
            };
            return true;
            },
    },
    {
        // Way written now, writes actual words of choices
        type: 'checkbox',  
        message: 'Choose which license type applies:',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'ISC', 'Apache', 'None'],
        validate: function (license) {
            if(license === "MIT"){
                license = mit;
            } else if(license === "GNU GPLv3"){
                license = gnu;
            } else if(license === "ISC"){
                license = isc;
            } else if(license === "Apache"){
                license = apache;
            } else {
                license = "This project is currently not licensed."
            }
            return true;
            },
    },
    {
        type: 'input',  
        message: 'Enter all contributor information:',
        name: 'contributions',
        validate: function (input) {
            if (input == " ") {
                console.log("Please enter at least your name");
            };
            return true;
            },
    },
    {
        type: 'input',  
        message: 'Enter test instructions:',
        name: 'test',
        validate: function (input) {
            if (input == " ") {
                console.log("Please enter valid test instructions");
            };
            return true;
            },
    },
    {
        type: 'input',  
        message: 'Enter your GitHub username:',
        name: 'questions1',
        validate: function (input) {
            if (input == " ") {
                console.log("Please enter a username");
            };
            return true;
            },
    },
    {
        type: 'input',  
        message: 'Enter your email address:',
        name: 'questions2',
        validate: function (input) {
            if (input == " ") {
                console.log("Please enter an email address");
            };
            return true;
            },
    }
  ])
  .then((data) => {
    // Making a variable that calls the README content
    const rmTemplate = generateMarkdown(data);
    console.log(data);

    // This creates the new README file (arg1: file name, 
    // arg2 data used to "fill" file, arg3 is if error).
    // Looked to class example rather than using given code.
    fs.writeFile('ReadMe.md', rmTemplate, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

//GIVEN BY BOOTCAMP
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
