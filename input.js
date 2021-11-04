// const stdin = process.stdin;
// Stores the active TCP connection object.
let connection;
const { CTRL_C,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  messages } = require("./constants");


const handleUserInput = function (key) {
  // your code here
  // process.stdout.write('.');
  // \u0003 maps to ctrl+c input
  if (key === CTRL_C) {
    process.exit();
  }
    // \u0077 maps to w input
  if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  }
  // \u0061 maps to a input
  if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  }
  // \u0077 maps to s input
  if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  }
  // \u0077 maps to d input
  if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }
  if (key === 'm') {
    if (messages[key]) connection.write(`Say: ${messages[key]}`);
  }
  if (key === 'x') {
    if (messages[key]) connection.write(`Say: ${messages[key]}`);
  }

};

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };