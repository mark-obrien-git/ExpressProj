const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://$(hostname):$(port)/';
});


/*
//Below print two lines of statements
console.log("Hello World!");
console.log("I'm learning JavaScript");
*/

/*
//Printing numbers
console.log(1);
console.log(2);
console.log(3);
*/

/*
//Using a variable
let message = "Hello World!"
console.log(message)

/*
message = "Hello World!"
//print (message)
console.log (message)
message = "Nice weather!"
//print (message)
console.log(message)

let name = "Mark";
let job = "IT";
let age = "old";
console.log(name);
console.log(job);
console.log(age);
*/