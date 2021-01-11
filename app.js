const mysql = require('mysql2');

const {mainMenu, promptDepartment, promptRole, promptName, promptManager} = require('./lib/prompts');

const {departmentData, roleData, employeeData, newDepartment, newRole, newEmployee, newManager, getRoles, getManagers} = require('./lib/queries');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "dumpaload5",
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
        let roles = await getRoles(connection);
        let managers = await getManagers(connection);
        let employee = await promptName(roles, managers);
        console.log(employee);
        let {id: roleID} = roles.find(role => role.title === employee.roleTitle);
        let {id: managerID} = managers.find(manager => manager.name === employee.managerName);

        await newEmployee(connection, employee.firstName, employee.lastName, roleID, managerID);

    } else if(response.mainChoice == "Add Manager"){
        let newMan = await promptManager()
        console.log(newMan.manager);
        await newManager(connection, newMan.manager)
    } else {
        return connection.end();
    }

    init();
}




