let employees = [];
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
const writeToFile = require('./src/generateHTML')

function init() {
    console.log(employees)
  userChoice();
}

function getManager() {
  const managerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the name of your manager?",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your team managers Employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your team managers email address:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter your team managers Office number:",
    },
    {
      type: "list",
      name: "newTeamMember",
      message: "Would you like to add another team member?",
      choices: ["yes", "no"],
      filter(val) {
        return val.toLowerCase;
      },
    },
  ];
  inquirer.prompt(managerQuestions).then((data) => {
    const newManager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officeNumber
    );
    employees.push(newManager);
    if (data.newTeamMember == "yes") {
      userChoice();
    } else writeToFile(myTeam.html, employees);
  });
}

function getIntern() {
  const internQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the name of your intern?",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your team intern's Employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your team intern's email address:",
    },
    {
      type: "input",
      name: "school",
      message: "Please enter your team intern's school name:",
    },
    {
      type: "list",
      name: "newTeamMember",
      message: "Would you like to add another team member?",
      choices: ["yes", "no"],
      filter(val) {
        return val.toLowerCase;
      },
    },
  ];
  inquirer.prompt(internQuestions).then((data) => {
    const newIntern = new Intern(data.name, data.id, data.email, data.school);
    employees.push(newIntern);
    if (data.newTeamMember == "yes") {
      userChoice();
    } else writeToFile(myTeam.html, employees);
  });
}

function getEngineer() {
    const engineerQuestions = [
        {
          type: "input",
          name: "name",
          message: "What is the name of your engineer?",
        },
        {
          type: "input",
          name: "id",
          message: "Please enter your team engineer's Employee ID:",
        },
        {
          type: "input",
          name: "email",
          message: "Please enter your team engineer's email address:",
        },
        {
          type: "input",
          name: "gitHub",
          message: "Please enter your team engineer's github:",
        },
        {
          type: "list",
          name: "newTeamMember",
          message: "Would you like to add another team member?",
          choices: ["yes", "no"],
          filter(val) {
            return val.toLowerCase;
          },
        },
      ];
      inquirer.prompt(engineerQuestions).then((data) => {
        const newEngineer = new Engineer(data.name, data.id, data.email, data.gitHub);
        let newTeamMember = data.newTeamMember
        console.log(newTeamMember)
        employees.push(newEngineer);
        console.log(employees)
        if (newTeamMember == "yes") {
          userChoice();
        } else writeToFile('myTeam.html', employees);
      });
}

function userChoice() {
  const userChoice = [
    {
      type: "list",
      name: "newTeamMember",
      message: "Would you like to add new team member?",
      choices: ["yes", "no"],
      filter(val) {
        return val.toLowerCase();
      },
    },
  ];
  inquirer.prompt(userChoice).then((data) => {
    console.log(data.newTeamMember);
    if (data.newTeamMember == "yes") {
      typeOfEmployee();
    } else writeToFile(myTeam.html, employees);
  });
}

function typeOfEmployee() {
  const employeeType = [
    {
      type: "list",
      name: "employeeType",
      choices: ["Manager", "Engineer", "Intern"],
      filter(val) {
        return val.toLowerCase();
      },
    },
  ];
  inquirer.prompt(employeeType).then((data) => {
    if (data.employeeType == "manager") {
      getManager();
    } else if (data.employeeType == "intern") {
      getIntern();
    } else if (data.employeeType == "engineer") {
      getEngineer();
    } else writeToFile(myTeam.html, employees);
  });
}

init();
