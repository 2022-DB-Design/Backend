const port = 8100;
const fs = require("fs");
const express = require("express");
const app = express();

// 정적 리소스 배포를 위해 현재 main.js 디렉토리를 기본 경로로 사용
app.use(express.static(__dirname));
app.use(express.static("res"));

app.get('/', (req, res) => {
  if (res.statusCode == 200) {
    res.sendFile("index.html");
  }
});

app.get('/board', (req, res) => {
  if (res.statusCode == 200) {
    res.sendFile("board.html");
  }
})

app.listen(port, () => {
  console.log(`Listening on ${port} port`);
});