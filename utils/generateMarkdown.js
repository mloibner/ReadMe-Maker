function generateMarkdown(data) {
    return `# ${data.title}
    ## ${data.description}
    ## ${data.installation_instructions}
    ### ${data.usage_information}
    ### ${data.contribution_guidelines}
    ### ${data.test_instructions}
    ### ${data.license}
    ### ${data.github}
    ### ${data.email} 
  `;
  }
  
  module.exports = generateMarkdown;
  

  // //  title: 'test',
  // description: 'test',
  // installation_instructions: 'test',
  // usage_information: 'test',
  // contribution_guidelines: 'test',
  // test_instructions: 'test',
  // license: 'MIT License',
  // github: 'test',
  // email: 'test'