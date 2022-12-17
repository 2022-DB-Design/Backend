const { Client } = require("pg");
const dbClient = new Client({
    user: "postgres",
    host: "localhost",
    database: "campuspal",
    password: "dearmyeveryday22@",
    port: 5432,
});

// 코드 구조
// 1. DB 연결을 시도한다.
// 1-1. DB 연결에 성공하면, 서버 열기
// 1-2. DB 연결에 실패하면, (예외 발생시킨 후) 5초 후 연결 재시도?
async function dbConnection() {
    await dbClient
        .connect()
        .then(() => {
            console.log("db connection successful");
        })
        .catch((err) => {
            throw err; // 예외 처리는 throw로 해줘야 promise에서 catch로 넘어간다
        });
}

async function openServer() {
    const port = 8100;
    const express = require("express");
    const app = express();

    // static webpage
    app.route("/").get((req, res) => {
        let rows = [];

        if (res.statusCode == 200) {
            dbClient
                .query('SELECT * FROM "user"')
                .then((res) => {
                    console.log(res.rows);
                    rows = res.rows;
                })
                .catch((err) => {
                    console.error(err);
                });
            res.sendFile("/home/hyunmin/db-design-backend/res/index.html");
        } else {
        }
    });

    app.route("/board").get((req, res) => {
        if (res.statusCode == 200) {
            dbClient
                .query('SELECT * FROM "user"')
                .then((res) => {
                    console.log(res.rows);
                })
                .catch((err) => {
                    console.error(err);
                });

            res.sendFile("/home/hyunmin/db-design-backend/res/board.html");
        } else {
        }
    });

    // API Call
    // user table (CRD)
    app.route("/api/user")
        .get((req, res) => {
            try {
                dbClient
                    .query('SELECT * FROM "user"')
                    .then((res) => {
                        res.send(res);
                    })
                    .catch((err) => {
                        res.send(err);
                    });
            } catch (err) {
                res.send(err);
            }
        })
        .post((req, res) => {
            try {
                dbClient
                    .query(
                        `INSERT INTO "user" (user_id, password, region, REGISTER_DATE, NICKNAME, DEPT, UNIVERSITY) VALUES (
                    ${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}
                  )`
                    )
                    .then((res) => {
                        res.send(
                            `${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        })
        .delete((req, res) => {
            try {
                dbClient
                    .query(
                        `DELETE FROM "user" WHERE (user_id = ${res.body.user_id})`
                    )
                    .then((res) => {
                        res.send(
                            `user_id = ${res.body.user_id} in user has been deleted`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        });

    // below codes haven't been implemented yet

    // board table (?)
    app.route("/api/board")
        .get((req, res) => {
            try {
                dbClient
                    .query(`SELECT * FROM "user"`)
                    .then((res) => res.send(res))
                    .catch((err) => {
                        res.send(err);
                    });
            } catch (err) {
                res.send(err);
            }
        })
        .post((req, res) => {
            try {
                dbClient
                    .query(
                        `INSERT INTO "user" (user_id, password, region, REGISTER_DATE, NICKNAME, DEPT, UNIVERSITY) VALUES (
                    ${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}
                  )`
                    )
                    .then((res) => {
                        res.send(
                            `${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        })
        .delete((req, res) => {
            try {
                dbClient
                    .query(
                        `DELETE FROM "user" WHERE (user_id = ${res.body.user_id})`
                    )
                    .then((res) => {
                        res.send(
                            `user_id = ${res.body.user_id} in user has been deleted`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        });

    // article table (CRUD)
    app.route("/api/board/article")
        .get((req, res) => {
            try {
                dbClient
                    .query(`SELECT * FROM "user"`)
                    .then((res) => res.send(res))
                    .catch((err) => {
                        res.send(err);
                    });
            } catch (err) {
                res.send(err);
            }
        })
        .post((req, res) => {
            try {
                dbClient
                    .query(
                        `INSERT INTO "user" (user_id, password, region, REGISTER_DATE, NICKNAME, DEPT, UNIVERSITY) VALUES (
                    ${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}
                  )`
                    )
                    .then((res) => {
                        res.send(
                            `${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        })
        .delete((req, res) => {
            try {
                dbClient
                    .query(
                        `DELETE FROM "user" WHERE (user_id = ${res.body.user_id})`
                    )
                    .then((res) => {
                        res.send(
                            `user_id = ${res.body.user_id} in user has been deleted`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        });

    // comment table (CRD)
    app.route("/api/board/article/comment")
        .get((req, res) => {
            try {
                dbClient
                    .query(`SELECT * FROM "user"`)
                    .then((res) => res.send(res))
                    .catch((err) => {
                        res.send(err);
                    });
            } catch (err) {
                res.send(err);
            }
        })
        .post((req, res) => {
            try {
                dbClient
                    .query(
                        `INSERT INTO "user" (user_id, password, region, REGISTER_DATE, NICKNAME, DEPT, UNIVERSITY) VALUES (
                    ${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}
                  )`
                    )
                    .then((res) => {
                        res.send(
                            `${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        })
        .delete((req, res) => {
            try {
                dbClient
                    .query(
                        `DELETE FROM "user" WHERE (user_id = ${res.body.user_id})`
                    )
                    .then((res) => {
                        res.send(
                            `user_id = ${res.body.user_id} in user has been deleted`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        });

    // timetable table (CRUD)
    app.route("/api/timetable")
        .get((req, res) => {
            try {
                dbClient
                    .query(`SELECT * FROM "user"`)
                    .then((res) => res.send(res))
                    .catch((err) => {
                        res.send(err);
                    });
            } catch (err) {
                res.send(err);
            }
        })
        .post((req, res) => {
            try {
                dbClient
                    .query(
                        `INSERT INTO "user" (user_id, password, region, REGISTER_DATE, NICKNAME, DEPT, UNIVERSITY) VALUES (
                    ${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}
                  )`
                    )
                    .then((res) => {
                        res.send(
                            `${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        })
        .delete((req, res) => {
            try {
                dbClient
                    .query(
                        `DELETE FROM "user" WHERE (user_id = ${res.body.user_id})`
                    )
                    .then((res) => {
                        res.send(
                            `user_id = ${res.body.user_id} in user has been deleted`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        });

    // lecture table (CRUD)
    app.route("/api/lecture")
        .get((req, res) => {
            try {
                dbClient
                    .query(`SELECT * FROM "user"`)
                    .then((res) => res.send(res))
                    .catch((err) => {
                        res.send(err);
                    });
            } catch (err) {
                res.send(err);
            }
        })
        .post((req, res) => {
            try {
                dbClient
                    .query(
                        `INSERT INTO "user" (user_id, password, region, REGISTER_DATE, NICKNAME, DEPT, UNIVERSITY) VALUES (
                    ${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}
                  )`
                    )
                    .then((res) => {
                        res.send(
                            `${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        })
        .delete((req, res) => {
            try {
                dbClient
                    .query(
                        `DELETE FROM "user" WHERE (user_id = ${res.body.user_id})`
                    )
                    .then((res) => {
                        res.send(
                            `user_id = ${res.body.user_id} in user has been deleted`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        });

    // lecture table (CRUD)
    app.route("/api/lecture_review")
        .get((req, res) => {
            try {
                dbClient
                    .query(`SELECT * FROM "user"`)
                    .then((res) => res.send(res))
                    .catch((err) => {
                        res.send(err);
                    });
            } catch (err) {
                res.send(err);
            }
        })
        .post((req, res) => {
            try {
                dbClient
                    .query(
                        `INSERT INTO "user" (user_id, password, region, REGISTER_DATE, NICKNAME, DEPT, UNIVERSITY) VALUES (
                    ${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}
                  )`
                    )
                    .then((res) => {
                        res.send(
                            `${res.body.user_id}, ${res.body.password}, ${res.body.region}, ${res.body.REGISTER_DATE}, ${res.body.NICKNAME}, ${res.body.DEPT}, ${res.body.UNIVERSITY}`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        })
        .delete((req, res) => {
            try {
                dbClient
                    .query(
                        `DELETE FROM "user" WHERE (user_id = ${res.body.user_id})`
                    )
                    .then((res) => {
                        res.send(
                            `user_id = ${res.body.user_id} in user has been deleted`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                res.send(JSON.stringify(err));
            }
        });

    // 정적 리소스 배포를 위해 현재 main.js 디렉토리를 기본 경로로 사용
    app.use(express.static("res"));

    app.listen(port, () => {
        console.log(`Listening on ${port} port`);
    });
}

function main() {
    dbConnection()
        .then(openServer)
        .catch((err) => {
            console.error(err);
        });
}

main();
