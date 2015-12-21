(function (routes) {
    'use strict';

    var markedejs = require('markedejs');

    /**
     * Inserts wild-card routes into express instance for md file folders
     * @param {Object} app - express instance
     * @param {String} homeDir - parent directory
     * @param {String} mdFolder - directory containing md files
     * @param {String} routeHome - wildcard route for md files (optional)
     */
    routes.init = function(app, homeDir, mdFolder, routeHome){
        if(!routeHome) routeHome = mdFolder;
        app.get("/" + routeHome + "/*", function (req, res) {
            markedejs.renderFile(homeDir + req.path.replace(routeHome, mdFolder) + ".md", null,  function(err, html){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(html);
                res.end();
            });
        });
    }
})(module.exports);