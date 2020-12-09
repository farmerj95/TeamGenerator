const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this._officeNumber = officeNumber;
        this._role = "Manager";
    }

    getOfficeNumber() {
        return this._officeNumber;
    }

}

module.exports = Manager;
