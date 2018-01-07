'use strict';

const mysql = require('mysql2/promise');

let dbConfig = {
  connectionLimit: 10,
  host: '47.93.11.41',
  user: 'root',
  password: 'mysQl12356',
  database: 'toutiao',
  port: 3306,
  charset: 'utf8',
};

const pool = mysql.createPool(dbConfig);

const query = async (sql) => {
  return pool.getConnection().then((conn) => {
    const res = conn.query(sql);
    conn.release();
    return res;
  }).then(res => res[0]).catch(err => err);
};

module.exports = query;
