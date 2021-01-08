function departmentData(connection) {
          const SQL_STATEMENT = `SELECT * 
                                 FROM department
                                 `;
           connection.query(SQL_STATEMENT, (err,res) => {
                if(err) throw err;
                // console.log(res)
                console.log("\n\n")
                console.table(res)
                console.log("\n\n\n")
             });
             
    }

function roleData(connection) {
          const SQL_STATEMENT = `SELECT title, salary, name AS department
                                 FROM role
                                 INNER JOIN department
                                 ON department_id = department.id`;
    
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
async function firstNameData(connection, first_name) {
          const SQL_STATEMENT = `SELECT * 
                                 FROM employee 
                                 INNER JOIN
                                 WHERE first_name = ?`;
    
         try {
             const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [first_name]);
             console.table(rows);
         } catch (error) {
             console.log(error);
         }
     }

async function lastNameData(connection, last_name) {
          const SQL_STATEMENT = `SELECT * 
                                 FROM employee 
                                 INNER JOIN
                                 WHERE last_name = ?`;
    
         try {
             const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [last_name]);
             console.table(rows);
         } catch (error) {
             console.log(error);
         }
     }

async function salaryData(connection, salary) {
        const SQL_STATEMENT = `SELECT * 
                               FROM role
                               INNNER JOIN
                               WHERE salary = ?`;
    
         try {
             const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [salary]);
             console.table(rows);
         } catch (error) {
             console.log(error);
         }
     }

async function managerData(connection, manager) {
        const SQL_STATEMENT = `SELECT * 
                               FROM manager 
                               INNNER JOIN
                               WHERE name = ?`;
    
         try {
             const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [manager]);
             console.table(rows);
         } catch (error) {
             console.log(error);
         }
     }

     module.exports = {
        departmentData, 
        roleData,
        newDepartment,
        firstNameData,
        lastNameData,
        salaryData,
        managerData
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