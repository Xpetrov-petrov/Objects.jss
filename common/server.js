let http = require('http');
let fs = require('fs');


http.createServer((req,res) => {
    let pageData = fs.readFileSync('./local.html');
    res.writeHead(200);
    res.write(pageData);
    res.end();
}).listen(3000);