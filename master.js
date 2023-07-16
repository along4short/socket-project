const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const taskScheduler = require('./taskScheduler');

function start() {
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/master.html');
  });

  io.on('connection', (socket) => {
    console.log('Master: New connection');
    socket.emit('message', 'Welcome to the Master Node');

    socket.on('disconnect', () => {
      console.log('Master: Connection closed');
    });

    socket.on('broadcast', (message) => {
      console.log(`Master: Broadcasting message: ${message}`);
      io.emit('message', message);
    });

    socket.on('increment', () => {
      console.log('Master: Incrementing variable');
      io.emit('increment');
    });

    socket.on('taskCompleted', (message) => {
      console.log(`Master: Task completed, ${message}`);
      io.emit('taskCompleted', message);
    });
  });

  http.listen(3000, () => {
    console.log('Master node listening on *:3000');
  });

  // Register task scheduler callback
  taskScheduler.setTaskCallback((message) => {
    io.emit('taskCompleted', message);
  });
}

module.exports = { start, io };
