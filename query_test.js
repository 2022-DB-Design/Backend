const { Client } = require("pg");
dbClient = new Client({
    user: "postgres",
    host: "localhost",
    database: "campuspal",
    password: "dearmyeveryday22@",
    port: 5432,
});

dbClient.connect();

dbClient
    .query('SELECT * FROM "user"')
    .then((res) => {
        console.log(res);
        dbClient.end();
    })
    .catch((err) => {
        console.error(err);
    });
