// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'applicationName',
        message: 'What is the name of your application?'
    },
    {
        type: 'input',
        name: 'appDescription',
        message: 'Please provide a brief description of the application.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please include all installation instructions for the application.',
    },
    {
        type: 'input',
        name: 'installCommand',
        message: 'What command should be ran to install dedpendencies?',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'What is the usage information for the application?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Does the application have any contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Does the application have any test instructions?',
    },
    {
        type: 'input',
        name: 'testCommand',
        message: 'How will the user run tests?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the best email address to be contacted at in regards to the application?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the username in which the application will be deployed under?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Does this application have a license?',
        choices: ["Apache 2.0", "Boost Software License 1.0", "BSD 3-Clause License", "Eclipse Public License 1.0", "GNU GPL v3", 
        "The Hippocratic License 2.1", "IBM Public License Version 1.0", "ISC",  "MIT", "Mozilla Public License 2.0", "The Perl License",
        "SIL Open Font License 1.1", "The Unlicense", "The Do What the Fuck You Want to Public License", "Zlib", "None"]
    }
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    const fileData = generateMarkdown(data)
    fs.writeFile(fileName, fileData, (error) => error ? console.log(error) : console.log('README Generated!'))
};

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', answers)
    });
};

// Function call to initialize app

init();
