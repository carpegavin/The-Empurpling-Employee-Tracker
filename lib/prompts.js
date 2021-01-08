const inquirer = require('inquirer');
const [
    BANANA_REPUBLIC,
    CHICKEN_DINNER,
    BEEF_CAKES,
    SUPERMAN,
    WONDERWOMAN,
    GREEN_LANTERN
] = require('./const'); 

async function promptDepartment() {
    try {
        answer = await inquirer
            .prompt({
                name: "department",
                type: "rawlist",
                message: "What department would you like to add??",
                choices: [
                    BANANA_REPUBLIC,
                    CHICKEN_DINNER,
                    BEEF_CAKES,
                    "EXIT"
                ]
            });

        return answer;
    } catch (error) {
        console.log(error);
    }
}

async function promptArtistName() {
    try {
        artist = await inquirer
            .prompt({
                name: "name",
                type: "input",
                message: "What is the artist name?"
            });

        return artist;
    } catch (error) {
        console.log(error);
    }
}

async function promptRange() {
    try {
        range = await inquirer
        .prompt([{
                name: "start",
                type: "input",
                message: "What is the start position?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return false;
                }
            },
            {
                name: "end",
                type: "input",
                message: "What is the end position?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return false;
                }
            }
        ]);

        return range;
    } catch (error) {
        console.log(error);
    }
}

async function promptSong() {
    try {
        song = await inquirer
        .prompt({
            name: "title",
            type: "input",
            message: "What is the song name?"
        });

        return song;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    promptDepartment, 
    promptArtistName,
    promptRange,
    promptSong
};