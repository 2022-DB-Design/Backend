const http = require("http");
const port = 8100

const httpServer = http
    .createServer((req, res) => {
        if (res.statusCode == 200) {
            console.log("Hello world!");
        } else {
            console.log(`Connection error ${res.statusCode}`);
        }
    })
    .listen(port, () => {
        console.log(`Listening in ${port} port`);
    });
