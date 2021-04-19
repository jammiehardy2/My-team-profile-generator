const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = [];
function addMember() {
  inquirer
      .prompt([
          {
              type: 'checkbox',
              name: 'employeeType',
              message: 'what is your job title?',
              choices: ["manager", "engineer", "intern"]
          },
      ])
      .then((data) => {
          const title = data.employeeType.toString();

          if (title === "manager") {
              getManager();
          } else if (title === "engineer") {
              getEngineer();
          } else if (title === "intern") {
              getIntern();
          }
      })
}
// Write code to use inquirer to gather information about the development team members,
const teamMember=[
    promptUser();
function promptUser() {
  inquirer
    .prompt([
      {
            type:"input",
            name:"employeeName",
            message:"What is your name"
      },
    {
            type:"input",
            name:"employeeId",
            message:"What is your Id"
    },
    {
        type:"input",
        name:"employeeEmail",
        message:"What is your work Email"
    },
    {
        type:"input",
        name:"officeNumber",
        message:"What is your number"
    }
    ]).then(response => {
            const employee = new Employee(response.employeeName,response.employeeId,response.memployeeEmail,response.officeNumber);
            teamMember.push(employee);
            addingNewMember(); 
        })
        promptUser();
        function promptUser() {
          inquirer
            .prompt([
  {
        type:"input",
        name:"managerName",
        message:"What is your name"
  },
{
        type:"input",
        name:"managerId",
        message:"What is your Id"
},
{
    type:"input",
    name:"managerEmail",
    message:"What is your work Email"
},
{
    type:"input",
    name:"officeNumber",
    message:"What is your number"
}
]).then(response => {
        const manager = new Manager(response.managerName,response.managerId,response.managerEmail,response.officeNumber);
        teamMember.push(manager);
        addingNewMember(); 
    })
    promptUser();
    function promptUser() {
      inquirer
        .prompt([
  {
        type:"input",
        name:"engineerName",
        message:"What is your name"
  },
{
        type:"input",
        name:"engineerId",
        message:"What is your Id"
},
{
    type:"input",
    name:"engineerEmail",
    message:"What is your work Email"
},
{
    type:"input",
    name:"github",
    message:"What is your Github name"
}
]).then(response => {
        const engineer = new Engineer(response.engineerName,response.engineerId,response.engineerEmail,response.github);
        teamMember.push(engineer);
        addingNewMember(); 
    })
    promptUser();
function promptUser() {
  inquirer
    .prompt([
  {
        type:"input",
        name:"internName",
        message:"What is your name"
  },
{
        type:"input",
        name:"internId",
        message:"What is your Id"
},
{
    type:"input",
    name:"internEmail",
    message:"What is your work Email"
},
{
    type:"input",
    name:"school",
    message:"What school did you attend"
}
]).then(response => {
        const intern = new Intern(response.internName,response.internId,response.internEmail,response.school);
        teamMember.push(intern);
        addingNewMember(); 
    });  
    .then((data) => {
      const secondreadme = `${data.title.toLowerCase().split(" ").join("")}.md`;
      createFile(secondreadme, createMD(data));
      console.log(data);
    });
}    
    function createFile(file, data) {
        fs.writeFileSync(path.join(process.cwd(), file), data);
        console.log("Success!");
      }
      function renderHtml() {
        fs.writeFileSync(outputPath, render(team), "utf-8");
    };
addMember();  
      function createMD(data) {
        // return
        //Adding licences and their function?
        //[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
        //[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
        //[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
        //[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
        return `
      ## Name
        ${data.title}
      ## Table of contents
      *[employee](#employee)
      *[manager](#manager)
      *[engineer](#engineer)
      *[intern](#intern)
      * [github](#github)
      * [email](#email)
      ## github
      ${data.github}
      
      ## email
      ${data.email}
      
      ## license
      ${data.license}`;
      }