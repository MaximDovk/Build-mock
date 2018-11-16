const http = require('http');
const port = 8888;

const requestHandler = (request, response) => {
    response.end(process.env.BUILD_NUMBER)
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});
