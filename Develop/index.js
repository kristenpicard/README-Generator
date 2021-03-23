// TODO: Include packages needed for this application DONE
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// Followed example in class
inquirer
  .prompt([
    {
      type: 'input',  
      message: 'What is the project Title?',
      name: 'title'
    },
    {
        type: 'input',  
        message: 'Enter a description of your project: ',
        name: 'description'  
    },
    {
        type: 'input',  
        message: 'Enter installation instructions: ',
        name: 'install'  
    },
    {
        type: 'input',  
        message: 'Enter usage information:',
        name: 'usage'  
    },
    {
        type: 'checkbox',  
        message: 'Choose which license type applies:',
        name: 'license'  
    },
    {
        type: 'input',  
        message: 'Enter all contributor information:',
        name: 'contributions'  
    },
    {
        type: 'input',  
        message: 'Enter test instructions:',
        name: 'test'  
    },
    {
        type: 'input',  
        message: 'Enter your GitHub username:',
        name: 'questions1'  
    },
    {
        type: 'input',  
        message: 'Enter your email address:',
        name: 'questions2'  
    },
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


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
