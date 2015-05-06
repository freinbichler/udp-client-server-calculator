/* Marcel Freinbichler
 * Reference: http://www.hacksparrow.com/node-js-udp-server-and-client-example.html
 */

var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');

var encodeOperand = {
  '+': 0,
  '-': 1,
  '*': 2,
  '/': 3
}

var calc = [12, 2, encodeOperand['/']];
var message = new Buffer(calc);

var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
  if(err) throw err;
  console.log('UDP message sent to ' + HOST + ':' + PORT);
  client.close();
});