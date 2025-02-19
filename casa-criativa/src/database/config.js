const sqlite3 = require("sqlite3");

const database = new sqlite3.Database("./src/database/database.db");

database.serialize(() => {
    database.run(`
        CREATE TABLE IF NOT EXISTS Ideas (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            Title TEXT,
            Image TEXT,
            Category TEXT,
            Description TEXT,
            Link TEXT
        );`
    );
})

module.exports = database;