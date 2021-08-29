import inq from 'inquirer'

function promptsToRenderReadme() {
   
    inq.prompt([
        {
            type: 'input',
            message: 'What do you want the generated file to be called? (You can leave out the File Extension)',
            name: 'FileName'
        },
        {
            type: "input",
            message: "What would you like to title this README?",
            name: "Title"
        },
        {
            type: "input",
            message: "Please describe this project.",
            name: "Description"
        },
        {
            type: "input",
            message: "How is this project installed?",
            name: "Installation"
        },
        {
            type: "input",
            message: "How is this project intended to be used?",
            name: "Usage"
        },
        {
            type: "input",
            message: "Please enter guidelines for people who wish to contribute to this project.",
            name: "Contribution"
        },
        {
            type: "checkbox",
            message: "What license do you want to release this software under?",
            name: "License",
            choices: ["MIT","Apache","GNU"]
        },
        {
            type: "input",
            message: "Enter your GitHub UserName",
            name: "GitHub"
        },
        {
            type: "input",
            message: "Please enter your Email address",
            name: "Email"
        },
    ]).then((responses) => {
        console.log(responses)
    })
}

promptsToRenderReadme();