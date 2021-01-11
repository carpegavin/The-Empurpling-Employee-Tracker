const inquirer = require('inquirer');

async function mainMenu() {
    try{
        choice = await inquirer
            .prompt([
                {
                    type: "list",
                    name: "mainChoice",
                    message: "Welcome! What would you like to do?",
                    choices: ["View Departments", "Add Departments", "View Roles", "Add roles", "View Employees", "Add employee name", "Add Manager", "EXIT"]
                }
            ]);
        return choice;
    } catch (err){
        console.log(err)
    }
}

async function promptDepartment() {
    try {
        answer = await inquirer
            .prompt({
                name: "department",
                type: "list",
                message: "What department would you like to add?",
                choices: ["Sales", "Advertising", "Engineering"]
            });

        return answer;
    } catch (error) {
        console.log(error);
    }
}

async function promptName(roles, managers) {

    
    try {
        answer = await inquirer
            .prompt([
                {
                name: "firstName",
                type: "input",
                message: "What is the employee's first name?"
                },
                {
                name: "lastName",
                type: "input",
                message: "What is the employee's last name?"    
                },
                {
                name: "roleTitle",
                type: "rawlist",
                message: "What is the employee's role title?",
                choices: roles.map(role => role.title) 
                },
                {
                name: "managerName",
                type: "rawlist",
                message: "Who is the employee's manager?",
                choices: managers.map(manager => manager.name) 
                }

            ]);

        return answer;
    } catch (error) {
        console.log(error);
    }
}

async function promptRole() {
    try {
        answer = await inquirer
            .prompt([
                {
                name: "role",
                type: "list",
                message: "What is the employee's role?",
                choices: ["Manager", "Engineer", "Intern", "Salesperson", "Marketing Genius", "Advertising Agent"]
                },   
                {
                name: "salary",
                type: "input",
                message: "What is the employee's salary?",
                },
                {
                name: "dept",
                type: "input",
                message: "Enter dept id"
                }
    ]);

        return answer;
    } catch (error) {
        console.log(error);
    }
}

async function promptManager() {
    try {
        answer = await inquirer
        .prompt({
            name: "manager",
            type: "input",
            message: "Who is the employee's Manager?"
        });

        return answer;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    mainMenu,
    promptDepartment, 
    promptName,
    promptRole,
    promptManager
};

