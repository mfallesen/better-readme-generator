const fs = require('fs');
const inq = require('inquirer')

function userPrompt() {
    inq.prompt( [
        {
            type: 'list',
            message: 'What type of Markdown file are we making today?',
            name: 'FileType',
            choices: ['Readme']
}
    ]).then( (responses) => {
        console.log(responses.FileType)
    })
}

userPrompt();