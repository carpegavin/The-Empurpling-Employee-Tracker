const inquirer = require('inquirer');
 
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
                type: "input",
                message: "What is the employee's role?"
            });

        return answer;
    } catch (error) {
        console.log(error);
    }
}

async function promptSalary() {
    try {
        range = await inquirer
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
        song = await inquirer
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
    promptDepartment, 
    promptFirstName,
    promptLastName,
    promptRole,
    promptSalary,
    promptManager
};

