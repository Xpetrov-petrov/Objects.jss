http.createServer((req, res) => {
    fs.readFile('./index.html', (err, pageData) => {
        if (err) {
            console.error('Грешка при четене на файл:', err);
            res.writeHead(500);
            res.end('Вътрешна грешка на сървъра');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pageData);
            res.end();
        }
    });
}).listen(3000);

/*
let http = require('http');
let fs = require('fs');


http.createServer((req,res) => {
    let pageData = fs.readFileSync('./index.html');
    res.writeHead(200);
    res.write(pageData);
    res.end();
}).listen(3000);*/