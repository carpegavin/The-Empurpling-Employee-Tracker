function departmentData(connection) {
          const SQL_STATEMENT = `SELECT * 
                                 FROM department
                                 `;
           connection.query(SQL_STATEMENT, (err,res) => {
                if(err) throw err;
                // console.log(res)
                console.log("\n")
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
                                 INNER JOIN department
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
    let query = `INSERT INTO employee (first_name)
    VALUES (?)` 
    connnection.query(query, [newFirst],(err, res) => {
        if(errr) throw err;
    })
}
                                 
function newLastName(connection, newLast) {
    let query = `INSERT INTO employee (last_name)
    VALUES (?)` 
    connnection.query(query, [newLast],(err, res) => {
        if(errr) throw err;
    })
}

function newSalary(connection, newSal) {
    let query = `INSERT INTO role (salary)
    VALUES (?)` 
    connnection.query(query, [newSal],(err, res) => {
        if(errr) throw err;
    })
}

function newManager(connection, newMan) {
    let query = `INSERT INTO manager (name)
    VALUES (?)` 
    connnection.query(query, [newMan],(err, res) => {
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




// async function songAndAlbumSearch(connection, artistName) {
//     const SQL_STATEMENT = `SELECT * 
//                            FROM top1000 
//                            INNER JOIN top_album ON top1000.artist = top_album.artist AND top1000.year = top_album.year 
//                            WHERE top_album.artist = ?
//                            ORDER BY top_album.year, top_album.position`;

//     try {
//         const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [artistName]);
//         console.table(rows);
//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports = {
//     artistSearch, 
//     multiSearch,
//     rangeSearch,
//     songSearch,
//     songAndAlbumSearch
// };