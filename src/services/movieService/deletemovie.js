const database = require('../../config/database');
let db;

async function connectdb() {
    try {
        db = await database();
    }
    catch (err) {
        console.error(err);
    }
}

connectdb();

function deleteMovies(moviename) {
    let mname = moviename;
    return new Promise((res, rej) => {
        db.collection('movies').deleteOne({ name: mname }, (err, movies) => {
            if (err) {
                console.error(err);
            }
            else {
                res(movies);
            }
        })
    })
}

module.exports.deleteMovies = deleteMovies;