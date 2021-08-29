// let response = SOMETHING?!?!?
function readmeTemplateGenerator(res) {

    const markdownTemplate = `
    # ${res.Title}
    ## Description 
    ${res.Description}
    
    
    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    
    
    ## Installation
    ${res.Installation}
    
    ## Usage 
    
    *Instructions and examples for use:*
    
    ![Gif demo of README-generator](readme-demo.gif)
    
    ${res.Usage}
    
    ## License
    
    This application is provided under an ${res.License} License.
    
    ---
    
    ## Contributing
    
    ${res.Contribution}
    
    ## Tests
    
    Right now there is no testing enabled
    
    ## Questions?
    Get in touch.
    GitHub: https://github.com/${res.GitHub}
    
    Email: ${res.Email} `

}

// export default readmeTemplateGenerator();