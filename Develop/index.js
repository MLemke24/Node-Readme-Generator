// TODO: Include packages needed for this application
const { rejects } = require('assert')
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt ([
        {
        type: 'input',
        name: 'name',
        message: 'what is your project name (Required)',
    //     validate: nameInput => {
    //     if (nameInput) {
    //       return true;
    //     } else {
    //       console.log('Please enter your name!');
    //       return false;
    // })
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your Project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Tell us how to install your project',
  },
  {
    type: 'input',
    name: 'Usage Info',
    message: 'What usage info would you like to provide?',
  },
  {
    type: 'input',
    name: 'Contributions',
    message: 'Any contribution Guidelines?',
  },
  {
    type: 'input',
    name: 'Test',
    message: 'How can we test your application?',
  },
  {
    type: 'checkbox',
    name: 'Licenses',
    message: 'What license (Check all that apply)',
    choices: ['MIT', 'Apache', 'Boost', 'Bash']
  },
  {
      type: 'input',
      name: 'Email',
      message: 'Enter your GitHub Username (Required)',
  },
 {
    type: 'input',
    name: 'Questions',
    message: 'Enter your email (Required)',
 }
    ])
}
console.log(promptUser)


// Function call to initialize app
promptUser()
.then( data => generateMarkdown(data))
.then(readMe => {
 fs.writeFile('README.md', readMe, err => {
     if (err) {
         console.log(err)
         return;
     }

 })
    
} )
