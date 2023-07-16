# socket-project
Socket Communication between Master and Child Nodes

Title: Socket Communication between Master and Child Nodes

Description:
This Node.js project demonstrates socket communication between a master node and multiple child nodes. The program allows the master node to broadcast messages to all child nodes and send instructions to increment a variable. When the incremented variable surpasses a threshold (in this case, 5), a task is scheduled to send a message back to the master node.

Features:

Master node functionality:
Broadcasting messages to all child nodes
Receiving log messages from child nodes
Child node functionality:
Receiving messages from the master node
Incrementing a variable and detecting surpassing the threshold
Scheduling a task to send a message back to the master node
Usage:

Run the program by executing node index.js in the terminal.
Open the browser and visit http://localhost:3000/master.html.
In the master node page, you can:
Broadcast messages to all child nodes.
Increment the variable in child nodes.
View log messages in the HTML page.
Additional Notes:

The log messages from the child nodes are displayed in the terminal where the server is running.
The log messages from the child nodes are also displayed in the HTML page dynamically using socket communication.
Dependencies:

Express.js
Socket.IO
