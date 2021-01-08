const mysql = require('mysql2');

// const {} = require('./lib/const');

const {promptDepartment, promptRole, promptFirstName, promptLastName, promptSalary, promptManager} = require('./lib/prompts');

const {departmentData, roleData, firstNameData, lastNameData, salaryData, managerData} = require('./lib/queries');

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
    await 
    promptDepartment(),
    await
    promptRole(),
    await
    promptFirstName(),
    await
    promptLastName(),
    await
    promptSalary();
    await
    promptManager();
    console.table();
    // connection.end();
});

module.exports = {
departmentData,
roleData,
firstNameData,
lastNameData,
salaryData,
managerData
};

// async function runSearch() {

//     let answer, artist, range;

//     answer = await promptDepartment();

//     switch (answer.name) {
//         case ALL_SONGS_BY_ARTIST:
//             artist = await promptArtistName();
//             artistSearch(connection, artist.name);
//             break;

//         case ARTISTS_WITH_TWO_OR_MORE_SONGS:
//             multiSearch(connection);
//             break;

//         case SONGS_BY_RANGE:
//             range = await promptRange();
//             rangeSearch(connection, range.start, range.end);
//             break;

//         case SPECIFIC_SONG:
//             song = await promptSong();
//             songSearch(connection,song.title);
//             break;

//         case TOP_SONG_AND_ALBUM_BY_ARTIST:
//             artist = await promptArtistName();
//             songAndAlbumSearch(connection, artist.name);
//             break;
//     };
// }