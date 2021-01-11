async function departmentData(connection) {
        const SQL_STATEMENT = `SELECT * 
                               FROM department`;
    
    try {
        const [res, fields] = await connection.promise().query(SQL_STATEMENT);
        console.log("\n\n")
        console.table(res)
        console.log("\n")
    } catch (error) {
        console.log(error);
    }
}

async function getRoles(connection) {
    const SQL_STATEMENT = `SELECT * 
                           FROM role`;

    try {
        const [res, fields] = await connection.promise().query(SQL_STATEMENT);
        return res;
    } catch (error) {
        console.log(error);
    }
}

async function getManagers(connection) {
    const SQL_STATEMENT = `SELECT * 
                           FROM manager`;

    try {
        const [res, fields] = await connection.promise().query(SQL_STATEMENT);
        return res;
    } catch (error) {
        console.log(error);
    }
}

async function roleData(connection) {
        const SQL_STATEMENT = `SELECT *
                               FROM role
                               INNER JOIN department
                               ON department_id = department.id`;
    
    try {
        const [res, fields] = await connection.promise().query(SQL_STATEMENT);
        console.table(res);
    } catch (error) {
        console.log(error);
    }
}

async function employeeData(connection) {
    const SQL_STATEMENT = `SELECT * 
                           FROM employee
                           INNER JOIN role ON role_id = role.id
                           INNER JOIN department ON department_id = department.id`; // Gavin, I'm adding a 3rd join, department, table so we can employees department in the terminal
    
    try {
        const [res, fields] = await connection.promise().query(SQL_STATEMENT);
        console.table(res);
    } catch (error) {
        console.log(error);
    }
}

async function newDepartment(connection, newDept) {
    let query = `INSERT INTO department (name)
                 VALUES (?)`;

    try {
        await connection.promise().query(query, [newDept]);
    } catch (error) {
        console.log(error);
    }
}

async function newRole(connection, answers) {
    let query = `INSERT INTO role (title, salary, department_id)
    VALUES (?)`;

    console.log(answers);

    try {
        await connection.promise().query(query, [answers.role, answers.salary, answers.dept]);
    } catch (error) {
        console.log(error);
    }
}

async function newEmployee(connection, firstName, lastName, roleID, managerID) {
    let query = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                 VALUES (?, ?, ?, ?)`;

    try {
        await connection.promise().query(query, [firstName, lastName, roleID, managerID]);
    } catch (error) {
        console.log(error);
    }   
}

async function newSalary(connection, newSal) {
    let query = `INSERT INTO role (salary)
                 VALUES (?)`;

    try {
        await connection.promise().query(query, [newSal]);
    } catch (error) {
        console.log(error);
    }
}

async function newManager(connection, newMan) {
    let query = `INSERT INTO manager (name)
                 VALUES (?)`;
    
    try {
        await connection.promise().query(query, [newMan]);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    departmentData, 
    roleData,
    employeeData,
    newDepartment,
    newEmployee,
    newRole,
    getRoles,
    newManager,
    getManagers
};




