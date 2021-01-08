const mysql = require('mysql2');

// const {} = require('./lib/const');

const {mainMenu, promptDepartment, promptRole, promptFirstName, promptLastName, promptSalary, promptManager} = require('./lib/prompts');

const {departmentData, roleData, newDepartment, firstNameData, lastNameData, salaryData, managerData} = require('./lib/queries');

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
    // await 
    // promptDepartment(),
    // await
    // promptRole(),
    // await
    // promptFirstName(),
    // await
    // promptLastName(),
    // await
    // promptSalary();
    // await
    // promptManager();
    // console.table();
    init();
    // connection.end();
});

// module.exports = {
// departmentData,
// roleData,
// firstNameData,
// lastNameData,
// salaryData,
// managerData
// };

async function init() {
    let response = await mainMenu()
    if(response.mainChoice == "View Departments"){
        departmentData(connection)
        init();
    }else if(response.mainChoice == "View Roles") {
        roleData(connection)
        init();
    }else if (response.mainChoice == "Add Departments"){
        let newDept = await promptDepartment()
        console.log(newDept.department);
        newDepartment(connection, newDept.department)
        init();
    }
}




