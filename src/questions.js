// prompt questions for the engineers
const engineerQs = [
  {
    name: "name",
    type: "input",
    message: "Please enter engineer's name:",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter engineer's ID:",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter engineer's email address:",
  },
  {
    name: "github",
    type: "input",
    message: "Please enter engineer's github username:",
  },
];
// prompt questions for the interns
const internQs = [
  {
    name: "name",
    type: "input",
    message: "Please enter intern's name:",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter intern's ID:",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter intern's email address:",
  },
  {
    name: "school",
    type: "input",
    message: "Please enter intern's school name:",
  },
];
// prompt questions for the managers
const managerQs = [
  {
    name: "name",
    type: "input",
    message: "Please enter the team manager's name:",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the team manager's ID:",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the team manager's email address:",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "Please enter the team manager's office number:",
  },
];
// questions for adding a team member to team array
const createTeam = [
    {
        name: "addTeamMember",
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    }
];

module.exports = {
    engineerQs,
    internQs,
    managerQs,
    createTeam
};