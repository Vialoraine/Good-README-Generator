const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the title of your project?",
  "What is a description of your project?",
  "What does your project repository contain?",
  "What are the installation instructions?",
  "How do you use the project?",
  "What License is your project protected by?",
  "What are your contribution guidelines?",
  "What are the testing instructions?",
  "What is your GitHub username?",
  "What is your email address?",
];

// function to write README file
function writeToFile(fileName, data) {
  console.log(data);
  const generateMarkdown = generateMarkdown(data)
  fs.writeFile(fileName, generateMarkdown, (err) => {
    if (err) console.log(err)
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
      },
      {
        type: "input",
        name: "contents",
        message: questions[2],
      },
      {
        type: "input",
        name: "installation",
        message: questions[3],
      },
      {
        type: "input",
        name: "usage",
        message: questions[4],
      },
      {
        type: "list",
        name: "license",
        message: questions[5],
        choices: ["None", "MIT", "Apache", "GPL"],
      },
      {
        type: "input",
        name: "contribution",
        message: questions[6],
      },
      {
        type: "input",
        name: "testing",
        message: questions[7],
      },
      {
        type: "input",
        name: "GitHub",
        message: questions[8],
      },
      {
        type: "input",
        name: "email",
        message: questions[9],
      },                                
    ])
    .then((answers) => {
      writeToFile("README.md", answers);
    });
}

// function call to initialize program
init();