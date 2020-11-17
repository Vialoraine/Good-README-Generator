const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// LS 11 / 17: TO BE DELETED.
//   * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions

// array of questions for user
const questions = [
  "What is the title of your project?",
  "What is a description of your project?",
  "What does your project repository contain?"
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
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "title",
        message: questions[0],
      },                                
    ])
    .then((answers) => {
      writeToFile("README.md", answers);
    });
}

// function call to initialize program
init();
