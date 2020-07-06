## Title: Employee-Summary Project

## Video
The following video shows this application running, and the HTML that it generates based on user input.
https://www.loom.com/share/7cb58e3641d7443eb0d04c076e88af94


## Description
You can build a software engineering team "roster" with the app.js file run as a command line application. 
The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment also passes all unit tests. 
When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. 

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```


* This app runs as a Node CLI to gather information about each employee.

In the `Develop` folder, there is a `package.json`, so make sure to `npm install`.
The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

🎗 Remember, you can run the tests at any time with `npm run test`

The directory structure looks like this:
```
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
```


### Classes
The project has the classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory all pass.

The first class is an `Employee` parent class with the following properties and
methods:
  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'
The other three classes will extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` also has:
  * officeNumber
  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:
  * github  // GitHub username
  * getGithub()
  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:
  * school 
  * getSchool()
  * getRole() // Overridden to return 'Intern'

### User input
The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output
This project generates a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member displays the following in no particular order:
  * Name
  * Role
  * ID
  * Role-specific property (School, link to GitHub profile, or office number)

