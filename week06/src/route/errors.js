/**
 * Created by FixError on 04.07.2016.
 */

const fs = require('fs');
const debug = require('debug')('http');
function send404(res) {
    debug("Error 404");
    res.writeHead(404, {"Content-type": "text/plain"});
    res.end("Error 404: resource not found");
}

function sendPage(res, filePath, fileContents) {
    debug("200 file");
    res.writeHead(200);
    res.end(fileContents);
}

function notFound(req, res) {
    let filePath = false;
    let absPath = "./" + filePath;
    fs.exists(absPath, (exists) => {
        if (exists) {
            fs.readFile(absPath, (err, data) => {
                if (err) {
                    send404(res)
                } else {
                    sendPage(res, absPath, data);
                }
            });
        } else {
            send404(res);
        }
    })
}
module.exports = {
    notFound: notFound
};
