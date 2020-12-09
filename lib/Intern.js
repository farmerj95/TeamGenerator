const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this._school = school;
        this._role = "Intern";
    }

    getSchool() {
        return this._school;
    }

}

module.exports = Intern;