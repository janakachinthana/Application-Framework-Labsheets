const os = require('os');
const fs = require('fs');
const http = require('http');

console.log('Hello World');

console.log(os.arch());
console.log(os.cpus.length);
console.log(os.platform());

const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/copy-test.txt';

fs.readFile(fileName, (err, data)=>{
    if (err){
        console.log(err);
    }

    console.log(data.toString());
});

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data',data=>{
    console.log(data.toString());
});

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1> Hello World </h1>');
    response.write('<h1> I am Janaka </h1>');
    response.end();
}).listen(3000, (err)=>{
    console.log('server is listning to port 3000')
});

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');

    switch (request.method){
        case 'GET' :
            response.write('<h1>this is GET method</h1>');
            response.end();
            break;

        case 'POST':
            request.on('data', data =>{
                response.write('<h1>Thi is POST method ' + data + '</h1>');
                response.end();
            });
            break;
    }
}).listen(3001, (err) =>{
    console.log('server is listning to port 3001')
});
