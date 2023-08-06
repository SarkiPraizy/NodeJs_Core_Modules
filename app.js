const os = require('os');
const fs = require('fs');
const http = require('http');
const proccess = require('process');
const path = require('path');

const hostName = 'localhost';
const port = 3000;
const report = 'success';

// // print out the current working directory
const cwd = path.resolve();
console.log(cwd);

// // // print out the path seperator symbol
const seperator = path.sep;
console.log(seperator);

// // print out the file extension
const extentionPath = path.join(__dirname, 'app.js')
const ext = path.extname( extentionPath
  );
  console.log(extentionPath)
  console.log(ext);
  // // print out the process id
const Id = process.pid;
console.log(`the node process id is :${Id}`);

// print out the user info of the OS
const user = os.userInfo();
console.log(user);

// // // print out the platform of an OS
const platform = os.platform();
console.log(platform);
  
  const server = http.createServer((req, res)=>{console.log('hello')});
  server.listen(port, hostName,()=>{console.log('server is listening')})