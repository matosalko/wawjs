const http = require("http");
const {
    createDeflate, createInflate,
    createGzip, createGunzip,
    createUnzip
} = require("zlib");
const fs = require("fs");

let path = "C:\\Users\\matej\\Desktop\\test\\test.txt";

let server = http.createServer();
server.listen(9999, "localhost")
    .on("request", (req, res) => {
        let out = fs.createWriteStream(path);
        req.pipe(out);
        req.pipe(createGzip()).pipe(res);
    });