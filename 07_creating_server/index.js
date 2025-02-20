// importing http module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Set thr response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Write the response body
    res.end('Hello, World!\n');
});

// Definr the port and host
const PORT = 3000;
const HOSTNAME = 'localhost';

// Start the server
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}/`);
});

// ey Points:
// http.createServer(): This creates an HTTP server that listens for incoming requests.
// res.writeHead(): Sets the response header (status code, content type, etc.).
// res.end(): Sends the response body and ends the request.
// server.listen(): Makes the server listen on a specific port and hostname.