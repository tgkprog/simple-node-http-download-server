const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {

        const content = `hello at \n${new Date().toISOString()}`;
	res.statusCode = 200;

	res.end(content);	
        
    } else {
	const content =  `{\n\t "message" : "Sample json. At ${new Date().toISOString()}"\n}`;
	
        res.statusCode = 200;
        res.setHeader('Content-Disposition', 'attachment; filename="sample.json"');
        res.setHeader('Content-Type', 'application/json');
        res.end(content);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


