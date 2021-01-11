const mysql = require('mysql2');

const {mainMenu, promptDepartment, promptRole, promptName, promptManager} = require('./lib/prompts');

const {departmentData, roleData, employeeData, newDepartment, newRole, newEmployee, newSalary, newManager, getRoles, getManagers} = require('./lib/queries');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "dumpaload5",
    //'dumpaload5',
    database: 'employee_tracker_db',
});

connection.connect(async (err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    init();
});

async function init() {
    let response = await mainMenu();
    if(response.mainChoice == "View Departments"){
        await departmentData(connection)
    }else if(response.mainChoice == "View Roles") {
        await roleData(connection)
    }else if(response.mainChoice == "View Employees") {
        await employeeData(connection)
    }else if(response.mainChoice == "Add Departments"){
        let newDept = await promptDepartment()
        console.log(newDept.department);
        await newDepartment(connection, newDept.department)
    }else if(response.mainChoice == "Add roles"){
        let newRoleName = await promptRole()
        // console.log(newRoleName);
        await newRole(connection, newRoleName)
    }else if(response.mainChoice == "Add employee name") {
    
        // Gavin here are my notes below
        // 1) 
        // Before we ask user for employee info we need to gather a few things beforehand.
        // We need the roles and managers. This will be presented to user as a list of options using inquirer.
        // roles and managers contains all the results from MySQL server. We will use roles and managers in step 2 and step 3 below.
        let roles = await getRoles(connection);
        let managers = await getManagers(connection);

        // 2) 
        // Prompt user
        // We will send roles and managers to promptName function. 
        // Prompt will display the human readable role_title and manager_name and NOT the ids.
        // Gavin, take a look at the promptName function and how I'm able to only show the role_title and manager_name
        let employee = await promptName(roles, managers);
        console.log(employee);

        // 3)
        // At this point user has told us the name, role, and manager of new employee.
        // Before we insert into our database we need to find roleID and managerID of what the user selected.
        // We can use find method to get roleID and managerID
        let {id: roleID} = roles.find(role => role.title === employee.roleTitle);
        let {id: managerID} = managers.find(manager => manager.name === employee.managerName);

        // ^^^^ What is {id: roleID} AND {id: managerID}? 
        // The {} syntax is object destruction. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
        // This extracts the id property from found role, but id is a common name so I'm renaming it to roleID. The same applies to manager.


        // 4)
        // At this point we should have firstname, lastname, role.id, and manager.id. Let's insert into employee table
        await newEmployee(connection, employee.firstName, employee.lastName, roleID, managerID);

    } else if(response.mainChoice == "Add Manager"){
        let newMan = await promptManager()
        console.log(newMan.manager);
        await newManager(connection, newMan.manager)
    } else {
        // End mysql connection and terminate recursive function
        return connection.end();
    }

    init();
    // ^^^^ Gavin, I refactored the init. It was DRY (Dont repeat yourself) because we called it in every single if/else above.
    // Since this will run all the time we can just add here it at the bottom.

    // Also, this function is recursive. See definition in provided link, https://techterms.com/definition/recursive_function. To terminate recursive functions we need to have
    // a base case which will end the function from calling itself. The Else condition above forces us to terminate program and not call init() again.
}




