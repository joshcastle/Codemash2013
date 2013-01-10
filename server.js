var connect = require('connect');
var backboneio = require('backbone.io');
 
var app = connect().use(connect.static(__dirname + "/public")).listen(3000);
var backend = backboneio.createBackend();
backend.use(backboneio.middleware.memoryStore());
var io = backboneio.listen(app, {questionBackend: backend});