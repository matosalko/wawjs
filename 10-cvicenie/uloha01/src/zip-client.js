const http = require("http");
const fs = require("fs");
const {
    createDeflate, createInflate,
    createGzip, createGunzip,
    createUnzip
} = require("zlib");

let url = "http://localhost:9999";

let request = http.request(url, {
        method: "POST"
    })
    .on("response", (res) => {
        res.pipe(createGunzip()).pipe(process.stdout);
    });

let input = fs.createReadStream(process.argv.slice(2)[0], {
    encoding: "utf8"
});
input.pipe(request);