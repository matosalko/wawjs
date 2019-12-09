require("../src/zip-server.js");
const fork = require('child_process').fork;
const client = "../src/zip-client.js";

fork(client, ["../src/test.txt"]);