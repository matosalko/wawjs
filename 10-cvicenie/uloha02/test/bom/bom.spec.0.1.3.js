const bom = require("../../src/bom");

const assert = require("assert");
const fs = require("fs");

describe("Remove BOM - empty files", function() {


  const bomBuffer = Buffer.from([0xEF, 0xBB, 0xBF])

  it("remove BOM - empty file without BOM, should do nothing", function(done) {

    let chunks = [];
    let file = `${__dirname}/data/without-bom-empty.txt`;
    fs.createReadStream(file)
      .pipe(bom.remove())
      .on("error", done)
      .on("data", (chunk) => chunks.push(chunk))
      .on("finish", () => {
        let chunk = Buffer.concat(chunks);
        assert.equal(chunk.indexOf(bomBuffer),-1);
        assert.equal(chunk.length, 0);
        done();
      });
     
  });

  it("remove BOM - empty file with BOM, should remove BOM", function(done) {

    let chunks = [];
    let file = `${__dirname}/data/with-bom-empty.txt`;
    fs.createReadStream(file)
      .pipe(bom.remove())
      
      .on("error", done)
      .on("data", (chunk) => chunks.push(chunk))
      .on("finish", () => {
        let chunk = Buffer.concat(chunks);
        assert.equal(chunk.indexOf(bomBuffer),-1);
        assert.equal(chunk.length, 0);
        done();
      });
     
  });
});