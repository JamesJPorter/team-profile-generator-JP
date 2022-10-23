let employees = [];
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");

function init() {
  employees = [];
  userChoice();
  if (userChoice == "yes") {
    typeOfEmployee();
  }
  if (typeOfEmployee == "manager") {
    getManager();
  } else if (typeOfEmployee == "intern") {
    getIntern();
  } else if (typeOfEmployee == "engineer") {
    getEngineer();
  } else generateHTML(employees);
  // Ask if the user wants to add employee
  // if yes, ask what kind of employee
  // if no, then generate HTML
  // After HTML is generated then
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
      name: "new team member",
      message: "Would you like to add another team member?",
      choices: ["yes", "no"],
      filter(val){return val.toLowerCase}
    },
  ];
  inquirer.prompt(managerQuestions).then((data) => {
    const newManager = new Manager(data);
    console.log(newManager);
    employees.push(newManager);
    console.log(employees);
  });
  //At end of function return to init
  init();
}

function getIntern() {
  //At end of function return to init
}

function getEngineer() {
  //At end of function return to init
}

function userChoice() {
  const userChoice = [
    {
      type: "list",
      name: "addMember",
      message: "Would you like to add new team member?",
      choices: ["yes", "no"],
      filter(val) {
        return val.toLowerCase();
      },
    },
  ];
  inquirer.prompt(userChoice).then((data) => {
    console.log(data.addMember)
    return data.addMember;
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
    return data;
  });
}

init();
