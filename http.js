const os = require('os');
const fs = require('fs');
const http = require('http');
const proccess = require('process');
const path = require('path');

const hostName = 'localhost';
const port = 8000;
const report = 'success';

const requestHandler = (req, res) => {
    const response = 'hello world';
    res.writeHead(200);
    res.end(response);
  };
  
  const server = http.createServer(requestHandler);
  server.listen(port, hostName,()=>{console.log('server is listening')})