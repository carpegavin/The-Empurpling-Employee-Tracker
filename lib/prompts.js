const inquirer = require('inquirer');

async function mainMenu() {
    try{
        choice = await inquirer
            .prompt([
                {
                    type: "list",
                    name: "mainChoice",
                    message: "Welcome! What would you like to do?",
                    choices: ["View Departments", "Add Departments", "View Roles", "Add roles", "View Employees", "Add Employee", "Add salary", "Add Manager"]
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
                type: "input",
                message: "What department would you like to add?",
            });

        return answer;
    } catch (error) {
        console.log(error);
    }
}

async function promptFirstName() {
    try {
        answer = await inquirer
            .prompt({
                name: "name",
                type: "input",
                message: "What is the employee's first name?"
            });

        return answer;
    } catch (error) {
        console.log(error);
    }
}

async function promptLastName() {
    try {
        answer = await inquirer
            .prompt({
                name: "name",
                type: "input",
                message: "What is the employee's last name?"
            });

        return answer;
    } catch (error) {
        console.log(error);
    }
}

async function promptRole() {
    try {
        answer = await inquirer
            .prompt({
                name: "role",
                type: "list",
                message: "What is the employee's role?",
                choices: ["Manager", "Engineer", "Intern", "Salesperson", "Marketing Genius", "Advertising Agent"]
        });

        return answer;
    } catch (error) {
        console.log(error);
    }
}

async function promptSalary() {
    try {
        answer = await inquirer
            .prompt({
                name: "salary",
                type: "input",
                message: "What is the employees salary?",
            });
            
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
    promptFirstName,
    promptLastName,
    promptRole,
    promptSalary,
    promptManager
};

