const io = require('socket.io-client');
const fs = require('fs');
const socket = io('http://localhost:3000');

let variableX = 0;

function start() {
  socket.on('connect', () => {
    console.log('Child: Connected to master node');
    socket.emit('childConnected');
  });

  socket.on('message', (message) => {
    console.log(`Child: Received message: ${message}`);
    writeToLogFile(`Child: Received message: ${message}`);
  });

  socket.on('increment', () => {
    variableX++;
    console.log(`Child: Variable X incremented to ${variableX}`);
    writeToLogFile(`Child: Variable X incremented to ${variableX}`);

    if (variableX > 5) {
      console.log('Child: X has surpassed 5');
      writeToLogFile('Child: X has surpassed 5');
      scheduleTask();
    }
  });

  function scheduleTask() {
    console.log('Child: Scheduling task');
    writeToLogFile('Child: Scheduling task');
    setTimeout(() => {
      console.log('Child: Task executed');
      writeToLogFile('Child: Task executed');
      socket.emit('xSurpassed', variableX);
    }, 2000);
  }

  function writeToLogFile(log) {
    fs.appendFile('log.txt', log + '\n', (err) => {
      if (err) throw err;
    });
  }
}

module.exports = { start };
