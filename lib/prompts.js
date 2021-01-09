const inquirer = require('inquirer');

async function mainMenu() {
    try{
        choice = await inquirer
            .prompt([
                {
                    type: "list",
                    name: "mainChoice",
                    message: "Welcome! What would you like to do?",
                    choices: ["View Departments", "Add Departments", "View Roles", "Add roles", "View Employees", "Add employee name", "Add salary", "Add Manager"]
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

async function promptName() {
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
                name: "role_id",
                type: "input",
                message: "What is the employee's role id?"
                },
                {
                name: "manager",
                type: "input",
                message: "Who is the employee's manager?"   
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

