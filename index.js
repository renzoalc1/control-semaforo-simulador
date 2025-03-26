// Servidor WebSocket en Node.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('Nuevo cliente conectado');

  ws.on('message', function incoming(message) {
    console.log('Mensaje recibido:', message);
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', function () {
    console.log('Cliente desconectado');
  });
});

console.log('Servidor WebSocket activo en puerto 8080');