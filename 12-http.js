const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page!')
    }
    if (req.url === '/about') {
        res.end('Here is pur shour story')
    } else {
        res.end('<h1>Visit us again!</h1><a href="/">back home</a>')
    }
})

server.listen(8282)
