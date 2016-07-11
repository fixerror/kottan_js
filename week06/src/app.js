/**
 * Created by FixError on 04.07.2016.
 */
const http = require('http');
const server = http.createServer();
class App {
    constructor() {
        this.events = [];
    }

    use(fn) {
        this.events.push(fn);
    }

    start(host = "localhost", port = 3000, callback) {
        server.on('request', (req, res) => {
            this.events.forEach((events)=> {
                events.call(this, req, res);
            });
        });
        server.listen(port, host);
        if (callback) {
            callback();
        }
    }
}

module.exports = App;
