/**
 * Created by FixError on 04.07.2016.
 */

const cluster = require("cluster");
const os = require("os");
const numCPUs = os.cpus().length;
const config = require('config').get('server');
const debug = require('debug')('http');
const App = require("./src/app");
const app = new App();
const query = require("./src/route/query");
const errors = require("./src/route/errors");

if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; ++i) {
        cluster.fork();
    }
} else {
    /**
     * url ='/'
     */
    app.use((req, res)=> {
        if (req.url === "/") {
            debug("Hello World");
            res.writeHead(200, {"Content-type": "text/plain"});
            res.end("Hello World");
        }
    });
    /**
     * url ='/test1'
     */
    app.use(query.gets);
    /**
     * url ='/test2'
     */
    app.use(query.posts);
    /**
     * url ='*'
     */
    app.use(errors.notFound);
    app.start(config.host, config.port, () => debug("listening on post " + config.port))
}


cluster.on('online', function (worker) {
    let work =  "Worker " + worker.id + ' has been started.';
    debug(work);
});
