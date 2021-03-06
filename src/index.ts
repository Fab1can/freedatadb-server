import * as net from 'net'

const PORT = 3000;
const IP = '127.0.0.1';
const BACKLOG = 100;

import { Datum } from "./Datum";
import { Model } from "./Model";

var data : Record<string,Datum> = {};
var models : Record<string,Model> = {};

var sockets : any[] = [];

net.createServer()
  .listen(PORT, IP, BACKLOG)
  .on("listening", () => {
    console.log('FreeDataDB server running on port ' + PORT +'.');
  })
  .on('connection', function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sockets.push(sock);

    sock.on('data', function(received) {
        console.log('RECEIVED FROM' + sock.remoteAddress + ': ' + received);
        var command = received.split(" ");
        if(command.length>2){
          switch(command[0].toUpperCase()){
            case "DATUM":
              switch (command[1].toUpperCase()) {
                case "SET":
                  if(command.length>3){
                    if(command[2] in data){
                      data[command[2]].set(command[3]);
                    }
                  }
                  break;
                case "ADD":
                  if(command.length>3){
                    if(!(command[2] in data)){
                      if(command[3].toUpperCase("AS")){
                        if(command[4] in models){
                          data[command[2]] = new Datum(command[2], models[command[4]]);
                        }
                      }
                    }
                  }
                  break;
                default:
                  break;
              }
              break;
            /*case "MODEL":
              switch (command[1].toUpperCase()) {
                case "SET":
                  if(command.length>3){
                    if(command[2] in models){
                      models[command[2]].set(command[3]);
                    }
                  }
                  break;
                case "ADD":
                  if(commands.length>3){
                    if(!(command[2] in models)){
                      if(command[3].toUpperCase("AS")){
                        if(command[4] in models){
                          models[command[2]] = new Datum(command[2], models[command[4]]);
                        }
                      }
                    }
                  }
                  break;
                default:
                  break;
              }*/
              break;
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
