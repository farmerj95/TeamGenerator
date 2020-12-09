const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const questions = require("./lib/Questions.js");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

// inquirer function
let promptUser = () => {
    return inquirer.prompt(questions)
        .then(function (answers) {

            let anotherEmployee;
            switch (answers.role) {
                case "Engineer":
                    anotherEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    employees.push(anotherEmployee);
                    break;
                case "Manager":
                    anotherEmployee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                    employees.push(anotherEmployee);
                    break;
                case "Intern":
                    anotherEmployee = new Intern(answers.name, answers.id, answers.email, answers.school);
                    employees.push(anotherEmployee);
                    break;
            }

            //repeats or end questions
            if (answers.addOrEnd) {
                return promptUser();
            }

            createHTML();

        });
}

// generate .html with inquirer data
let createHTML = () => {
    let createHTML = render(employees);
    fs.writeFile(outputPath, createHTML, function (error) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("html saved to Output/");
        }
    })
}

promptUser();