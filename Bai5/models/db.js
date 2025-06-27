const mysql = require ('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'car_manager',
    port: 4306
});

module.exports = pool.promise(  );