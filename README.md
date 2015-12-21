# md-folder-render

md-folder-render is a very basic module to render md files from a given folder as html pages. It is in very early phase of development. We are using it in our in-house tool and haven't tried it in production yet.

## Installing

npm install md-folder-render --save

## API

### init(app, homeDir, mdFolder, [routeHome])
Inserts wild-card routes into express instance for md file folders

## Usage

```shell

    var express = require('express');
    var http = require('http');
    var app = express();
    var port = process.env.PORT || 1337;

    var mdFolderRender = require('md-folder-render');
    
    //md folder should be in directory route.
    //e.g.: if there is a file home.md inside md directory,
    // try accessing any md file as http://localhost:1337/md/home
    mdFolderRender.init(app,__dirname,'md');
   
    //By below configuration, you can access above file as http://localhost:1337/help/home
    mdFolderRender.init(app,__dirname,'md','help');

    http.createServer(app).listen(port);

```