
function renderLicenseBadge(license) {
   
return `![Badge](https://img.shields.io/badge/license-${license}-orange)`

  
}

function generateMarkdown(data) {
  const {name, description, installation, UsageInfo, Contributions, Test, Licenses, Github, Email } = data
  return `
 # ${name} 

 ## License
${renderLicenseBadge(Licenses)} 

 ## Description
${description}

 ## Table Of Contents
1. [Installation](#Installation)
2. [Usage Info](#UsageInfo)
3. [Contributions](#Contributions)
4. [Test](#Test)
5. [License](#License)
6. [Questions](#Questions)

 ## Installation
${installation}

 ## Usage Info
${UsageInfo}

 ## Contributions
${Contributions}

 ## Test
${Test}


 ## Questions
 <a href= "https://github.com/${Github}">
${Email}

`;
}

module.exports = generateMarkdown;
