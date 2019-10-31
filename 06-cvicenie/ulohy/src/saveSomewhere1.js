const async = require("async");
const fs = require("fs");
module.exports = saveSomewhere;

function saveSomewhere(paths, data, cb) {
 const tasks = paths.map(function(path) {
   return (cb) => fs.writeFile(path, data, (err) => {
     if(err) return cb(err);
     cb(null,path);
   })
 });

 async.tryEach(tasks, cb);
}

