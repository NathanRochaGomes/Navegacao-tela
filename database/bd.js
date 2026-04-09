import * as SQLite from 'expo-sqlite';

const DATABASE_NAME = "exemploApp.sqlite";

const SQL_CREATE = `
CREATE TABLE IF NOT EXISTS produtos (
id INTEGER PRIMARY KEY autoincrement, 
name varchar(255) NOT NULL,
valor real NOT NULL
)
`;

let db = null;

export default function openDB(){
    if (!db){
        db = SQLite.openDatabaseSync(DATABASE_NAME);
        db.withTransactionSync(() => {
            db.execSync(SQL_CREATE);
        })
    }
    return db;
}
