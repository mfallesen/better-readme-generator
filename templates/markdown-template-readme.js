// let response = SOMETHING?!?!?

const markdownTemplate = `
# ${response.Title}
## Description 
${response.Description}
    
    
    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
      
    
## Installation
${response.Installation}
    
## Usage 
    
*Instructions and examples for use:*
    
![Gif demo of README-generator](readme-demo.gif)
    
${response.Usage}
    
## License
    
This application is provided under an ${response.License} License.
    
---
    
## Contributing
    
${response.Contribution}
    
## Tests
    
Right now there is no testing enabled
    
## Questions?
Get in touch.
GitHub: https://github.com/${response.GitHub}
    
Email: ${response.Email} `