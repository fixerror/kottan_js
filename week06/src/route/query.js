/**
 * Created by FixError on 04.07.2016.
 */
const debug = require('debug')('http');
const log = debug('app:log');
function gets(req, res) {
    if (req.url === "/test1") {
        debug("test1");
        res.writeHead(200, {"Content-type": "text/plain"});
        res.end("test1");
    }
}

function posts(req, res) {
    if (req.url === "/test2") {
        debug("test2");
        res.writeHead(200, {"Content-type": "text/plain"});
        res.end("test2");
    }
}

module.exports = {
    gets: gets,
    posts: posts
};
