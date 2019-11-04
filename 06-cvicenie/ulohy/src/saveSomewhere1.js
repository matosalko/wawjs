const async = require("async");
const fs = require("fs");
module.exports = saveSomewhere;

function saveSomewhere(paths, data, cb) {
 const tasks = paths.map(function(path) {
   return (cb) => fs.writeFile(path, data, (err) => {
     cb(err,path);
   })
 });

 async.tryEach(tasks, cb);
}

