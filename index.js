const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
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
    default: "npm i",
  },
  {
    type: "list",
    message: "What license do you need to use?",
    name: "username",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3"],
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know to contribute to the repo?",
    name: "contribute",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile("README.md", generateMarkDown(data)))
    .catch((error) => console.log(error));
}

// function call to initialize program
init();
