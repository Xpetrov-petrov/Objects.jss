
let http = require('http');
let fs = require('fs');


http.createServer((req,res) => {
    let pageData = fs.readFileSync('./index.html');
    res.writeHead(200);
    res.write(pageData);
    res.end();
}).listen(3000);