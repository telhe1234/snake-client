// Stores the active TCP connection object.
let connection;

const handleUserInput = function (key) {
  // your code here
  // process.stdout.write('.');
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
    // \u0077 maps to w input
  if (key === '\u0077') {
    connection.write('Move: up');
  }
  // \u0061 maps to a input
  if (key === '\u0061') {
    connection.write('Move: left');
  }
  // \u0077 maps to s input
  if (key === '\u0073') {
    connection.write('Move: down');
  }
  // \u0077 maps to d input
  if (key === '\u0064') {
    connection.write('Move: right');
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