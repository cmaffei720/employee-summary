// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, github) {

    super(name, id, email)
    this.github = github

    }
        getGithub() {
            return this.github
        }

        getRole() {
            return "Engineer"
        }
}

const engineer = new Engineer ("chris", 2, "email", "cmaffei")
console.log(engineer)

module.exports = Engineer