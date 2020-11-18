const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please give a brief description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please list the project installation instructions",
    name: "install",
  },
  {
    type: "checkbox",
    message: "What license do you need to use?",
    name: "username",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD3"],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err, data) =>
    err ? console.error(err) : console.log(data)
  );
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile("README.md", generateMarkDown(data)));
}

// function call to initialize program
init();
