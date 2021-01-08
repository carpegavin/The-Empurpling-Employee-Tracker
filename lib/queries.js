async function departmentData(connection, department) {
          const SQL_STATEMENT = `SELECT * 
                                 FROM promptDepartment()
                                 INNER JOIN 
                                 WHERE answer = ?`;
    
         try {
             const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [department]);
             console.table(rows);
         } catch (error) {
             console.log(error);
         }
     }

async function roleData(connection, role) {
          const SQL_STATEMENT = `SELECT * 
                                 FROM promptRole()
                                 INNNER JOIN 
                                 WHERE answer = ?`;
    
         try {
             const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [role]);
             console.table(rows);
         } catch (error) {
             console.log(error);
         }
     }

async function firstNameData(connection, first_name) {
          const SQL_STATEMENT = `SELECT * 
                                 FROM promptFirstName() 
                                 INNER JOIN
                                 WHERE answer = ?`;
    
         try {
             const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [first_name]);
             console.table(rows);
         } catch (error) {
             console.log(error);
         }
     }

async function lastNameData(connection, last_name) {
          const SQL_STATEMENT = `SELECT * 
                                 FROM promptFirstName() 
                                 INNER JOIN
                                 WHERE answer = ?`;
    
         try {
             const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [last_name]);
             console.table(rows);
         } catch (error) {
             console.log(error);
         }
     }

async function salaryData(connection, salary) {
        const SQL_STATEMENT = `SELECT * 
                               FROM promptSalary() 
                               INNNER JOIN
                               WHERE answer = ?`;
    
         try {
             const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [salary]);
             console.table(rows);
         } catch (error) {
             console.log(error);
         }
     }

async function managerData(connection, manager) {
        const SQL_STATEMENT = `SELECT * 
                               FROM promptManager() 
                               INNNER JOIN
                               WHERE answer = ?`;
    
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
        firstNameData,
        lastNameData,
        salaryData,
        managerData;
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