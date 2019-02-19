const express = require('express');
const app = express();

app.get('/', function(request, response){
    response.writeHead(200);
    response.write('<html></html><p>Please specify a player in the URL</p></body></html>');
    response.end();
});

app.get('/players', function(request, response){
    const player = request.params.player;
    response.writeHead(200);
    response.write('<html><body><p>This is a placeholder for all the list of players </p></body</html>');
    response.end();
});

app.get('/players/:playerID', function(request, response){
    const player = request.params.playerID;
    response.writeHead(200);
    response.write('<html><body><p>You have called ' + player + '</p></body</html>');
    response.end();
});

app.delete('/players/:playerID', function(request, response){
    const player = request.params.playerID;
    response.writeHead(200);
    response.write('<html><body><p>Hello, you have terminated the ' + player);
    response.write('</p></body></html>');
    response.end();
});

app.post('/players/:playerID', function(request, response){
    const player = request.params.playerID;
    response.writeHead(200);
    response.write('<html><body><p>You have added ' + player);
    response.write('</p></body></html>');
    response.end();
});

app.listen(8080, function() {
    console.log('express is now running on port 8080...');
});