// Gets information about team members
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Adds inquirer functionality and prompts for user input
const inquirer = require("inquirer");
const {
    managerQs,
    createTeam,
    engineerQs,
    internQs
} = require("./src/questions");
// Adds path functionality
const path = require("path");
const fs = require("fs");
// Adds the generateHTML function
const generateHTML = require("./src/page-template");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamArr = [];

const createPage = {
  beginPrompts: async () => {
     await inquirer.prompt(managerQs).then((data) => {
      let manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamArr.push(manager);
    });
    createPage.promptTeamBuild();
  },

  promptTeamBuild: async () => {
    await inquirer.prompt(createTeam).then((data) => {
      switch (data.addTeamMember) {
        case "Engineer":
           createPage.addEngineer();
          break;
        case "Intern":
          createPage.addIntern();
          break;
        case "I don't want to add any more team members":
          createPage.writeHtml();
      }
    });
  },

  addEngineer: async () => {
     await inquirer.prompt(engineerQs).then((data) => {
      let engineer = new Engineer(data.name, data.id, data.email, data.github);
      teamArr.push(engineer);
    });
    createPage.promptTeamBuild();
  },

  addIntern: async () => {
     await inquirer.prompt(internQs).then((data) => {
      let intern = new Intern(data.name, data.id, data.email, data.school);
      teamArr.push(intern);
    });
    createPage.promptTeamBuild();
  },

  writeHtml: () => {
    function writeToFile(fileName, data) {
      const fileDir = path.join(process.cwd(), "output");

        if (!fs.existsSync(fileDir)) {
            fs.mkdirSync(fileDir);
        }
    
        return fs.writeFileSync(path.join(fileDir, fileName), data);
    }
    
    writeToFile("team.html", generateHTML(teamArr)); 
    console.log(`
      =====================================
      Your team profile has been generated!
      =====================================
      `);
  },
};

createPage.beginPrompts();