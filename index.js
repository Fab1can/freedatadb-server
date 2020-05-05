const net = require('net');
const port = 29876;
const host = '127.0.0.1';

let database = {
  data: [],
  models: []
}

const server = net.createServer();
server.listen(port, host, () => {
    console.log('FreeDataDB server running on port ' + port +'.');

});

let sockets = [];

server.on('connection', function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sockets.push(sock);

    sock.on('data', function(data) {
        console.log('RECEIVED FROM' + sock.remoteAddress + ': ' + data);
        command = data.split(" ");
        if(command.length>2){
          if(command[0].toUpperCase()=="DATUM"){
            if(command[1].toUpperCase()=="SET"){
              if(command.length>3){
                if(command[2] in database.data){
                  database.data[command[2]].set(command[3]);
                }
              }
            }else if(command[1].toUpperCase()=="ADD"){
              if(commands.length>3){
                if(!(database.data in command[2])){
                  if(command[3].toUpperCase("AS")){
                    if(command[4] in database.models){
                      database.data[command[2]] = new Datum(command[2], database.models[command[4]], )
                    }
                  }
                }
              }
            }
          }
        }

    });

    sock.on('close', function(data) {
        let index = sockets.findIndex(function(o) {
            return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
        })
        if (index !== -1) sockets.splice(index, 1);
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });
});
