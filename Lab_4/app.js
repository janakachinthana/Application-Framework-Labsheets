const os = require('os');
const fs = require('fs');
const http = require('http');


console.log("Hello World....!");

console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length );
console.log('os ' + os.platform());

const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';



fs.readFile(fileName,  (err, data) =>{
    if (err){
        console.error(err);
    }
    console.log(data.toString());
} );

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data', data =>{
    console.log(data.toString());
});

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    switch (req.method){
        case 'GET':
            res.write('<h1>Janaka</h1>');
            res.end();
            break;

        case 'POST':
            req.on('data',data =>{
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000,(err)=>{
    console.log('Server is Listen on port 3000');
});