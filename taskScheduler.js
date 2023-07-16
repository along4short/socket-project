let taskCallback = null;

function setTaskCallback(callback) {
  taskCallback = callback;
}

function scheduleTask() {
  console.log('TaskScheduler: Scheduling task');

  // Simulating asynchronous task execution
  setTimeout(() => {
    console.log('TaskScheduler: Task executed');
    if (taskCallback) {
      taskCallback('X has surpassed 5');
    }
  }, 2000);
}

module.exports = { setTaskCallback, scheduleTask };
