const fs = require("fs").promises;
const path = require("path")

module.exports = lsRescursive

async function lsRescursive(dirName) {

  let files = await ls(dirName);
  let dirs = dirsOnly(files);
  dirs = dirs.map(({ name }) => name)
  dirs = dirs.map(name => path.resolve(dirName, name))
  files =  await Promise.all(dirs.map(ls)) // Promise of [] of []s
  files = files.flat() // [[],[],...]-> [.,.,.]
  dirs = filesOnly(files)
  dirs = dirs.map(({ name }) => name)
  return dirs;
}

async function ls(dirName) {
  return fs.readdir(dirName, {
    withFileTypes: true
  });
}

function dirsOnly(files) {
  return files.filter((f) => f.isDirectory());
}

function filesOnly(files) {
  return files.filter((f) => f.isFile());
}
