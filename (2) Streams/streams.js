const fs = require('fs');
const transformstream = require('stream')
let readablestream = fs.createReadStream(__dirname + '/input.txt');
let writablestream = process.stdout;

let middlestream = new transformstream.Transform(
    {
        transform(chunk,enc,nextCB){
            let modifiedchunk = chunk.toString().toUpperCase();
            this.push(modifiedchunk);
            setTimeout(nextCB, 2000);
        }
    }
)
let newstream = readablestream.pipe(middlestream)
newstream.pipe(writablestream);
