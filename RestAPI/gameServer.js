const express = require('express');
const app = express();

app.get('/', function(request, response){
    response.writeHead(200);
    response.write('<html></html><p>Please specify a variable in the URL</p></body></html>');
    response.end();
});

//Players
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

app.put('/players/:playerID', function(request, response){
    const player = request.params.playerID;
    response.writeHead(200);
    response.write('<html><body><p>You have updated ' + player);
    response.write('</p></body></html>');
    response.end();
});

//Items
app.get('/items', function(request, response){
    const item = request.params.item;
    response.writeHead(200);
    response.write('<html><body><p>This is a placeholder for all the list of items </p></body</html>');
    response.end();
});

app.get('/items/:itemID', function(request, response){
    const item = request.params.itemID;
    response.writeHead(200);
    response.write('<html><body><p>You have called ' + item + '</p></body</html>');
    response.end();
});

app.delete('/items/:itemID', function(request, response){
    const item = request.params.itemID;
    response.writeHead(200);
    response.write('<html><body><p>You have terminated the ' + item);
    response.write('</p></body></html>');
    response.end();
});

app.post('/items/:itemID', function(request, response){
    const item = request.params.itemID;
    response.writeHead(200);
    response.write('<html><body><p>You have added ' + item);
    response.write('</p></body></html>');
    response.end();
});

app.put('/items/:itemID', function(request, response){
    const item = request.params.itemID;
    response.writeHead(200);
    response.write('<html><body><p>You have updated ' + item);
    response.write('</p></body></html>');
    response.end();
});

//Models
app.get('/models', function(request, response){
    const model = request.params.model;
    response.writeHead(200);
    response.write('<html><body><p>This is a placeholder for all the list of models </p></body</html>');
    response.end();
});

app.get('/models/:modelID', function(request, response){
    const model = request.params.modelID;
    response.writeHead(200);
    response.write('<html><body><p>You have called ' + model + '</p></body</html>');
    response.end();
});

app.delete('/models/:modelID', function(request, response){
    const model = request.params.modelID;
    response.writeHead(200);
    response.write('<html><body><p>You have terminated the ' + model);
    response.write('</p></body></html>');
    response.end();
});

app.post('/models/:modelID', function(request, response){
    const model = request.params.modelID;
    response.writeHead(200);
    response.write('<html><body><p>You have added ' + model);
    response.write('</p></body></html>');
    response.end();
});

app.put('/model/:modelID', function(request, response){
    const model = request.params.modelID;
    response.writeHead(200);
    response.write('<html><body><p>You have updated ' + model);
    response.write('</p></body></html>');
    response.end();
});

//Skills
app.get('/Skills', function(request, response){
    const skill = request.params.skill;
    response.writeHead(200);
    response.write('<html><body><p>This is a placeholder for all the list of skills </p></body</html>');
    response.end();
});

app.get('/skills/:skillID', function(request, response){
    const skill = request.params.skillID;
    response.writeHead(200);
    response.write('<html><body><p>You have called ' + skill + '</p></body</html>');
    response.end();
});

app.delete('/skills/:skillID', function(request, response){
    const skill = request.params.skillID;
    response.writeHead(200);
    response.write('<html><body><p>You have terminated the ' + skill);
    response.write('</p></body></html>');
    response.end();
});

app.post('/skills/:skillID', function(request, response){
    const skill = request.params.skillID;
    response.writeHead(200);
    response.write('<html><body><p>You have added ' + skill);
    response.write('</p></body></html>');
    response.end();
});

app.put('/skills/:skillID', function(request, response){
    const skill = request.params.skillID;
    response.writeHead(200);
    response.write('<html><body><p>You have updated ' + skill);
    response.write('</p></body></html>');
    response.end();
});

//Achievements
app.get('/achievemnts', function(request, response){
    const achievement = request.params.achievement;
    response.writeHead(200);
    response.write('<html><body><p>This is a placeholder for all the list of achievements </p></body</html>');
    response.end();
});

app.get('/achievements/:achievementID', function(request, response){
    const achievement = request.params.achievementID;
    response.writeHead(200);
    response.write('<html><body><p>You have called ' + achievement + '</p></body</html>');
    response.end();
});

app.delete('/achievements/:achievementID', function(request, response){
    const achievement = request.params.achievementID;
    response.writeHead(200);
    response.write('<html><body><p>You have terminated the ' + achievement);
    response.write('</p></body></html>');
    response.end();
});

app.post('/achievements/:achievementID', function(request, response){
    const achievement = request.params.achievementID;
    response.writeHead(200);
    response.write('<html><body><p>You have added ' + achievement);
    response.write('</p></body></html>');
    response.end();
});

app.put('/achievements/:achievementID', function(request, response){
    const achievement = request.params.achievementID;
    response.writeHead(200);
    response.write('<html><body><p>You have updated ' + achievement);
    response.write('</p></body></html>');
    response.end();
});

//Meshes
app.get('/meshes', function(request, response){
    const mesh = request.params.mesh;
    response.writeHead(200);
    response.write('<html><body><p>This is a placeholder for all the list of meshes </p></body</html>');
    response.end();
});

app.get('/meshes/:meshID', function(request, response){
    const mesh = request.params.meshID;
    response.writeHead(200);
    response.write('<html><body><p>You have called ' + mesh + '</p></body</html>');
    response.end();
});

app.delete('/meshes/:meshID', function(request, response){
    const mesh = request.params.meshID;
    response.writeHead(200);
    response.write('<html><body><p>You have terminated the ' + mesh);
    response.write('</p></body></html>');
    response.end();
});

app.post('/meshes/:meshID', function(request, response){
    const mesh = request.params.meshID;
    response.writeHead(200);
    response.write('<html><body><p>You have added ' + mesh);
    response.write('</p></body></html>');
    response.end();
});

app.put('/meshes/:meshID', function(request, response){
    const mesh = request.params.meshID;
    response.writeHead(200);
    response.write('<html><body><p>You have updated ' + mesh);
    response.write('</p></body></html>');
    response.end();
});


app.listen(8080, function() {
    console.log('express is now running on port 8080...');
});