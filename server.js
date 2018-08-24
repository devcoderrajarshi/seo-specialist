const express = require('express');
const helmet = require('helmet')
const http = require('http')
const fs = require('fs')
const app = express()
const conf = require('./appConf')
const bodyParser = require('body-parser');

app.use(helmet())
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));


/**
 * Create HTTP server.
 */

const routesPath = './routes';

// Bootstrap route
fs.readdirSync(routesPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
      let route = require(routesPath + '/' + file);
      route.setRouter(app);
    }
  });

const server = http.createServer(app)
// start listening to http server
server.listen(conf.port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            //logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        case 'EADDRINUSE':
            //logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        default:
            //logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10)
            throw error
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind)
    console.log('server listening on port' + addr.port, 'serverOnListeningHandler', 10)

}

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
    // application specific logging, throwing an error, or other logic here
})


module.exports = app;