const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this._github = github;
        this._role = "Engineer";
    }

    getGithub() {
        return this._github;
    }

}

module.exports = Engineer;
