function generateMarkdown(data) {
    return `# **${data.title}**
    ![NPM version](https://img.shields.io/badge/npm-6.14.4-green)
    ![GitHub license](https://img.shields.io/badge/License-${response.license}-blue.svg)

    ## Description
    
    ${data.description}

    ## Table of Contents
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Contributors](#Contributors)
    - [Test](#Tests)
    - [Licence](#Licence)
    - [Project Repository](#Project Repository)
    - [GitHub](#GitHub)
    
    ## Installation

    To install necessary dependencies, run the following command:
    ~~~
    ${data.installation_instructions}
    ~~~
          

    ## Usage 
    
    ${data.usage_information}

    ### Contributors
    
    ${data.contribution_guidelines}
    
    ### Test

    To run tests, run the following command:
    ~~~
    ${data.test_instructions}
    ~~~
    
    ### Licence
    
    ${data.license}
    
    ### Repository
    
    - [Project Repository](${data.github})

    ### GitHub
    
    - [GitHub](${data.email})

  `;
  }
  
  module.exports = generateMarkdown;