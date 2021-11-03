const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
// connect();
let connectObj = connect();

setupInput(connectObj);
