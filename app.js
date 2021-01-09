const mysql = require('mysql2');

const {mainMenu, promptDepartment, promptRole, promptName, promptManager} = require('./lib/prompts');

const {departmentData, roleData, employeeData, newDepartment, newRole, newName, newSalary, newManager} = require('./lib/queries');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'dumpaload5',
    database: 'employee_tracker_db',
});

connection.connect(async (err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    init();
});

async function init() {
    let response = await mainMenu()
    if(response.mainChoice == "View Departments"){
        departmentData(connection)
         init();
    }else if(response.mainChoice == "View Roles") {
        roleData(connection)
         init();
    }else if(response.mainChoice == "View Employees") {
        employeeData(connection)
         init();
    }else if(response.mainChoice == "Add Departments"){
        let newDept = await promptDepartment()
        console.log(newDept.department);
        newDepartment(connection, newDept.department)
        init();
    }else if(response.mainChoice == "Add roles"){
        let newRoleName = await promptRole()
        // console.log(newRoleName);
        newRole(connection, newRoleName)
        init();
    }else if(response.mainChoice == "Add employee name"){
        let newFirst = await promptName()
        console.log(newFirst.employee);
        newName(connection, newFirst.employee)
        init();
    }else if(response.mainChoice == "Add salary"){
        let newSal = await promptSalary()
        console.log(newSal.employee);
        newSalary(connection, newSal.employee)
        init();
    }else if(response.mainChoice == "Add Manager"){
        let newMan = await promptManager()
        console.log(newMan.manager);
        newManager(connection, newMan.manager)
        init();
    }
}




