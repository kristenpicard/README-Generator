// TODO: Include packages needed for this application DONE
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
