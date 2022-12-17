const port = 8100;
const pg = require("pg");
const express = require("express");
const app = express();

// 정적 리소스 배포를 위해 현재 main.js 디렉토리를 기본 경로로 사용
app.use(express.static(__dirname));
app.use(express.static("res"));

// TO DO: pg 혹은 knex로 스키마 연동 작업해야 함

app.get('/', (req, res) => {
  if (res.statusCode == 200) {
    // 알맞는 데이터 쿼리 후 res에 넘겨주기
    res.sendFile("index.html");
  }
});

app.get('/board', (req, res) => {
  if (res.statusCode == 200) {
    // 알맞는 데이터 쿼리 후 res에 넘겨주기
    res.sendFile("board.html");
  }
})

app.listen(port, () => {
  console.log(`Listening on ${port} port`);
});