const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {type: 'input' ,
    name: 'gitHubName' ,
    message: "What is the username of your github?"},

    {type: 'input',
    name: 'userEmail',
    message: 'Please include your email.'},

    {type: 'input',
    name: 'nameProject',
    message: 'What is the name of your github project?'},

    {type: 'input',
    name: 'desc',
    message: 'Please include a description for your project.'},

    {type: "list",
    name: "projectLicense",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]},

    {type: "input",
    name: "projectInstall",
    message: "What command should the user to install dependencies?",
    default: "npm i"},

    {type: "input",
    name: "commandForTest",
    message: "What command should the user run to run tests?",
    default: "npm test"},

    {type: "input",
    name: "useApp",
    message: "When using the repo, what should the user know for the best experience?"},

    {type: "input",
    name: "contributors",
    message: "What does the user need to know about contributing to the repo?"}

    ];
    
    
    
    
    


//Description, Table of Contents, Installation, Usage, 
//License, Contributing, Tests, and Questions

// function to write README file
function writeToFile(fileName, data) {
    path.join(process.cwd(), fileName)
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers)
    
    
      
    
    writeToFile('README.md', generateMarkdown(answers))
    })
    
};


// function call to initialize program
init();
