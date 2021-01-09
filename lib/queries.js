function departmentData(connection) {
          const SQL_STATEMENT = `SELECT * 
                                 FROM department
                                 `;
           connection.query(SQL_STATEMENT, (err,res) => {
                if(err) throw err;
                // console.log(res)
                console.log("\n\n")
                console.table(res)
                console.log("\n")
             });
             
    }

function roleData(connection) {
          const SQL_STATEMENT = `SELECT title, salary, name AS    department
                                 FROM role
                                 INNER JOIN department
                                 ON department_id = department.id`;
    
        connection.query(SQL_STATEMENT, (err, res) => {
            if (err) throw err;
            console.table(res);
        });
     }

function employeeData(connection) {
          const SQL_STATEMENT = `SELECT first_name, last_name, name AS employee
                                 FROM employee
                                 INNER JOIN role
                                 ON role_id = role.id`;
    
        connection.query(SQL_STATEMENT, (err, res) => {
            if (err) throw err;
            console.table(res);
        });
     }

function newDepartment(connection, newDept) {
    let query = `INSERT INTO department (name)
    VALUES (?)`
    connection.query(query, [newDept],(err, res) => {
        if(err) throw err;
        // console.log(res)
    })
}

function newRole(connection, newRoles) {
    let query = `INSERT INTO role (title)
    VALUES (?)`
    connection.query(query, [newRoles],(err, res) => {
        if(err) throw err;
        console.log(res)
    })
}

function newFirstName(connection, newFirst) {
    let query = `INSERT INTO employee (name)
    VALUES (?)` 
    connection.query(query, [newFirst],(err, res) => {
        if(errr) throw err;
    })
}
                                 
function newLastName(connection, newLast) {
    let query = `INSERT INTO employee (last_name)
    VALUES (?)` 
    connection.query(query, [newLast],(err, res) => {
        if(errr) throw err;
    })
}

function newSalary(connection, newSal) {
    let query = `INSERT INTO role (salary)
    VALUES (?)` 
    connection.query(query, [newSal],(err, res) => {
        if(errr) throw err;
    })
}

function newManager(connection, newMan) {
    let query = `INSERT INTO manager (name)
    VALUES (?)` 
    connection.query(query, [newMan],(err, res) => {
        if(errr) throw err;
    })
}

     module.exports = {
        departmentData, 
        roleData,
        employeeData,
        newDepartment,
        newFirstName,
        newLastName,
        newRole,
        newSalary,
        newManager
     };




