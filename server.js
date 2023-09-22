const http = require('http');
const HOST = 'localhost';
const PORT = 3000;

const TaskArray = [{
    id:1,
    desc: 'Comer',
    status: 'pending',
},{
    id:2,
    desc: 'Correr',
    status: 'complete',
},{
    id:3,
    desc: 'Bailar',
    status: 'In Progress',
}];


const requestListener = (req, res) =>{
    console.log('Listening on port: ' + PORT);
    res.writeHead(200);
    res.write(JSON.stringify(TaskArray));
    res.end();
};

const server = http.createServer(requestListener);
server.listen(PORT);