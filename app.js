const mysql = require('mysql2');

const [ALL_SONGS_BY_ARTIST, ARTISTS_WITH_TWO_OR_MORE_SONGS, 
       SONGS_BY_RANGE, SPECIFIC_SONG, TOP_SONG_AND_ALBUM_BY_ARTIST] = require('./lib/const');

const {promptDepartment, promptArtistName,promptRange,promptSong} = require('./lib/prompts');

const  {artistSearch, multiSearch, rangeSearch, songSearch, songAndAlbumSearch} = require('./lib/queries');

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
    await runSearch();
    connection.end();
});

async function runSearch() {

    let answer, artist, range;

    answer = await promptDepartment();

    switch (answer.name) {
        case ALL_SONGS_BY_ARTIST:
            artist = await promptArtistName();
            artistSearch(connection, artist.name);
            break;

        case ARTISTS_WITH_TWO_OR_MORE_SONGS:
            multiSearch(connection);
            break;

        case SONGS_BY_RANGE:
            range = await promptRange();
            rangeSearch(connection, range.start, range.end);
            break;

        case SPECIFIC_SONG:
            song = await promptSong();
            songSearch(connection,song.title);
            break;

        case TOP_SONG_AND_ALBUM_BY_ARTIST:
            artist = await promptArtistName();
            songAndAlbumSearch(connection, artist.name);
            break;
    };
}