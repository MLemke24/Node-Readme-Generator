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
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("please enter a valid project name")
            return false;
          }
        }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your Project',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("please enter a valid description")
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Tell us how to install your project',
  },
  {
    type: 'input',
    name: 'UsageInfo',
    message: 'What usage info would you like to provide?',
  },
  {
    type: 'input',
    name: 'Contributions',
    message: 'Any contribution guidelines?',
  },
  {
    type: 'input',
    name: 'Test',
    message: 'How can we test your application?',
  },
  {
    type: 'list',
    name: 'Licenses',
    message: 'What license would you like to apply? (Check all that apply)',
    choices: ['MIT', 'Apache', 'Boost', 'Bash']
  },
  {
      type: 'input',
      name: 'Github',
      message: 'Enter your GitHub Username (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter a valid Github Username")
          return false;
        }
      }
  },
 {
    type: 'input',
    name: 'Email',
    message: 'Enter your email (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("please enter a valid email address")
        return false;
      }
    }
 }
    ])
}

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
