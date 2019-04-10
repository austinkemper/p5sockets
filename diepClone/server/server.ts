'use strict';

let express = require('express');
let app = express();
let server = app.listen(80, () => {
  console.log(`listening at ${server.address().address}:${server.address().port}`)
});

app.use(express.static('client'));

let io = require('socket.io')(server);
