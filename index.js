const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")

// array of questions for user
const questions = [{
    type: "input",
    name: "title",
    message: "What is your project title?"
},
{
    type: "input",
    name: "description",
    message: "Enter a description for your project"
},
{
    type: "input",
    name: "installation_instructions",
    message: "Enter installation instructions for your project"
},
{
    type: "input",
    name: "usage_information",
    message: "Enter usage information for your project"
},
{
    type: "input",
    name: "contribution_guidelines",
    message: "Enter contribution guidelines for your project"
},
{
    type: "input",
    name: "test_instructions",
    message: "Enter test instructions for your project"
},
{
    type: "list",
    name: "license",
    message: "Choose a licence for your project",
    choices: ['MITLicense', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'GNU Affero General Public License v3.0', 'The Unlicense', 'Apache License 2.0', 'GNU General Public License v3.0']
},
{
    type: "input",
    name: "github",
    message: "Enter your Github username"
},
{
    type: "input",
    name: "email",
    message: "Enter your email address"
}

];

// function to write README file
function writeToFile(fileName, data) {
 const markdown = generateMarkdown(data);
 fs.writeFileSync(fileName, markdown)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(res) {
        writeToFile("readme.md", res);
        console.log("README.md created successfully!")
    });
};

// function call to initialize program
init();
