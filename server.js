var liveServer = require('live-server');

var params = {
  cors: true,
  host: 'localhost',
  port: 8080,
  root: './public' // Set root directory that's being server. Defaults to cwd.
};

liveServer.start(params);