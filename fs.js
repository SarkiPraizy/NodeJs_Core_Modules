const os = require('os');
const fs = require('fs');
const http = require('http');
const proccess = require('process');
const path = require('path');

const hostName = 'localhost';
const port = 5000;
const report = 'success';

// error handler
function errorHandler(err, report) {
  if (err) {
    console.log(`an error has occured: ${err}`);
    return;
  }
  console.log(report);
}

// creating new directory
const folder = path.join(__dirname, 'students');
// fs.mkdirSync(folder);

// creating a new file: user.js
let content = " const name = 'Praise Ibu'";
const filePath = path.join(__dirname, 'students', 'Praise.js');
fs.writeFile(filePath, content, (err) => {
  errorHandler(err);
});

// updating the user.js content
const ageData = '\n const age = 25';
const sexData = '\n const sex = "Male"';
const nationalData = '\n const nationality = "Nigeria"';
const phoneData = '\n const phone = "09097795770"';

fs.appendFile(
    filePath,
    `${ageData}${sexData}${nationalData}${phoneData}`,
    (err) => {
      errorHandler(err, report);
    }
  );

  // // updating student dir
const updatedFolder = path.join(__dirname, 'Names');
fs.rename(folder, updatedFolder, (err) => {
  errorHandler(err, report);
});

// // // updating user.js
const updatedFile = path.join(__dirname, 'students', 'Praise.js');
fs.rename(filePath, updatedFile, (err) => {
  errorHandler(err, report);
});

// reading files
fs.readFile(updatedFile, 'utf-8', (err, data) => {
    errorHandler(err, data);
  });

  // deleting file
fs.rm(updatedFile, (err) => {
    errorHandler(err, report);
  });
  // deleting directory
  fs.rmdir(updatedFolder, (err) => {
    errorHandler(err, report);
  });




const server = http.createServer((req, res)=>{console.log('hello World')});
  server.listen(port, hostName,()=>{console.log('server is listening')})