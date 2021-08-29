const fs = require('fs');
const inq = require('inquirer')
// import readmePrompts from './prompts/readmePrompts'
const readmePrompts = require('./prompts/readmePrompts')

function userPrompt() {
    inq.prompt([
        {
            type: 'list',
            message: 'What type of Markdown file are we making today?',
            name: 'FileType',
            choices: ['Readme']
        }
    ]).then((responses) => {
        console.log(responses.FileType)
        switch (responses.FileType) {
            case 'Readme':

                readmePrompts();

                break;

            default:
                break;
        }
    })
}

userPrompt();