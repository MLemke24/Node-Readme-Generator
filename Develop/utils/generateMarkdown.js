

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {name, description, installation, UsageInfo, Contributions, Test, Licenses, Email, Questions } = data
  return `# ${name} 

  ## Description
    ${description}

  ##Table Of Contents
    
  ##Installation
    ${installation}

  ##Usage Info
    {UsageInfo}

  ##Contributions
    ${Contributions}

  ##Test
    ${Test}

  ##License
    ${Licenses}

  ##Questions
    ${Email}
    ${Questions}

`;
}

module.exports = generateMarkdown;
