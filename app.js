// https://www.youtube.com/watch?v=RLtyhwFtXQA&t=9358s

/// require
// const tutorial = require('./tutorial');

const { appendFile } = require("fs");

// console.log(tutorial);
// console.log(tutorial.sum(5,3))
// console.log(tutorial.PI)
// console.log(new tutorial.SomeMathObject())


/// EventEmitter
// const EventEmitter = require('events');
// const tutorial = require('./tutorial');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2)=>{
//     console.log("Tutorial event has occurred", num1 + num2);
// });

// eventEmitter.emit('tutorial', 4, 7);

// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     }

//     get name(){
//         return this._name;
//     }
// }

// let arpan = new Person('Arpan');
// arpan.on('name', ()=>{
//     console.log('My name is:', arpan.name)
// })

// arpan.emit('name');

/// Readline Module

// const readline = require('readline');
// const r1 = readline.createInterface({ input : process.stdin,
//                            output : process.stdout });

// let num1 = Math.floor( ( Math.random() * 10 ) + 1 );
// let num2 = Math.floor( ( Math.random() * 10 ) + 1 );
// let answer = num1 + num2;

// r1.question(`What is ${num1} + ${num2} ? \n`,
// (userInput) =>{
//     if( Number(userInput.trim()) === answer ){
//         r1.close();
//     }
//     else{
//          r1.setPrompt('Incorrect response, please try again:\n');
//          r1.prompt();
//          r1.on('line', (userInput) =>{
//               if(userInput.trim() == answer){
//                   r1.close();
//               }
//               else{
//                   r1.setPrompt(`Your answer of ${userInput} is incorrect, try again: \n`);
//                   r1.prompt();
//               }
//          } )
//     }
// } ) ;

// r1.on('close', ()=>{
//     console.log('Correct!!!')
// })

/// File system module part 1

// const fs = require('fs');
// create a file
// fs.writeFile('example.txt', "this is an example", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File successfully created");
//     }
// });

// fs.readFile('example.txt', 'utf8', (err, file)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(file);
//     }
// })
///////////
// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('Successfully renamed the file.');
//             }
// });
////////////
// fs.appendFile('example2.txt', 'Some data is being appended', (err)=>{
//     if(err){
//                         console.log(err);
//                     }
//     else{
//         console.log('Successfully appended data to the file.');
//     }
// })
///////////
// fs.unlink('example2.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully deleted the file.');
//     }
// });

/// File system module part 2(folders)

// const fs = require('fs');
// fs.mkdir('tutorial', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully created the folder.');
//         fs.writeFile('./tutorial/example.txt', '123', (err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('Successfully created a file within the folder.');
//             }
//         })
//     }
// });

// fs.mkdir('tutorial2', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully created the folder.');
//     }
// });

// fs.rmdir('tutorial2', (err)=>{ // this method can only be used on an empty folder
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully deleted the folder.');
//     }
// }); 
// In case a folder is not empty, first use unlink() to delete the files inside it, like so:
// fs.unlink('./tutorial/example.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         fs.rmdir('tutorial', (err)=>{ // this method can only be used on an empty folder
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('Successfully deleted the folder with a file.');
//             }
//         });
//     }
// });

// manually create a folder named 'example' with 2 files: a.txt and b.txt
// fs.readdir('example', (err, files)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         for(let file of files){
//             fs.unlink('./example/' + file, (err)=>{
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log("Successfully deleted file");
//                 }
//             })
//         }
//     }
// });

/// Readable and writeable streams(useful for large files).
// Manually create a large file for this.
// const fs = require('fs');
// const readStream =  fs.createReadStream('./largefile.txt', 'utf8');
// readStream.on('data', (chunk)=>{
//     console.log(chunk);
// });

// const writeStream = fs.createWriteStream('./example2.txt');
// readStream.on('data', (chunk) =>{
//     writeStream.write(chunk);
// });

/// Pipes and Pipe Chaining

// const fs = require('fs');
// const zlib = require('zlib'); // module used for compression
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.gz'); // compressed file
// readStream.pipe(gzip).pipe(writeStream); 

/// this runs asynchronously like the above code, so first run and then comment out the code at the top before running this.

// const gzip = zlib.createGzip(); module used for de-compression
// const gunzip = zlib.createGunzip();
// const readStream1 = fs.createReadStream('./example2.gz');
// const writeStream1 = fs.createWriteStream('uncompressed.txt');
// readStream1.pipe(gunzip).pipe(writeStream1); 

/// Creating HTTP server and using the HTTP module.
// const http = require('http');
// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         res.write('Hello world from nodejs');
//         res.end();
//     }
//     else{
//         res.write("Using some other domain");
//         res.end();
//     }
// }); 

// server.listen(3000);

/// Serving static files with HTTP and File System Modules.
// const http = require('http');
// const fs = require('fs');
// http.createServer((req, res)=>{
    // const readStream = fs.createReadStream('./static/index.html');
    // res.writeHead(200, { 'Content-type': 'text/html' });

    // const readStream = fs.createReadStream('./static/example.json');
    // res.writeHead(200, { 'Content-type': 'application/json' });

//     const readStream = fs.createReadStream('./static/example.png');
//     res.writeHead(200, { 'Content-type': 'image/png' });


//     readStream.pipe(res); // the response object is also a writeable stream.
// }).listen(3000);

/// Create package.json using npm init


/// Installing packages using npm
// const _ = require('lodash');
// let example = _.fill([1,2,3,4,5], "banana", 1, 4); // result: [ 1, 'banana', 'banana', 'banana', 5 ]
// console.log(example);

/// Semantic versioning

/// Getting started with Express web framework

// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Hello world');
// }).listen(3000) ;

/// Working with Express GET requests

// app.get('/example', (req, res)=>{
//     res.send('Hitting example route');
// });

// app.get('/example/:name/:age', (req, res) => {
//     console.log(req.params); // use route parameters for must-have data
//     console.log(req.query); // use query string parameters for optional data
//     res.send("Example with route params " + req.params.name + ", " + req.params.age);
// });

/// Serving static files with Express

// const express = require('express');
// const path = require('path');
// const app = express();
// app.use('/public', express.static(path.join(__dirname, 'static1' )));  // .use() indicates middleware.
//                                                                        // public is the alias for static1 folder
//                                                                       // express.static() is a middleware method
//                                                                       // dirname is the path for app.js 
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static1', 'index.html' ));
// }).listen(3000) ;
 
/// HTTP POST request with Express and Body Parser Module.

// de-comment the form in index.html but not the script tag at the bottom

// const express = require('express');
// const path = require('path');
// // const bodyParser = require('body-parser'); // not needed with Express 4.16+
// const app = express();
// app.use('/public', express.static(path.join(__dirname, 'static' )));  
// app.use(express.urlencoded({ extended: false }))
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static', 'index.html' ));
// })

// app.post('/', (req, res) => {
//     console.log(req.body);
//     // database work here
//     res.send('Successfuly posted data');
// });

// app.listen(3000);

/// Working with JSON data - Express and Body Parser Module.

// const express = require('express');
// const path = require('path');
// // const bodyParser = require('body-parser'); // not needed with Express 4.16+
// const app = express();
// app.use('/public', express.static(path.join(__dirname, 'static' )));  
// app.use(express.urlencoded({ extended: false }))
// app.use(express.json());
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static', 'index.html' ));
// })

// app.post('/', (req, res) => {
//     console.log(req.body);
//     // database work here
//     res.json({success: true});
// });

// app.listen(3000);

/// Validating user input with Express and JOI
// comment out the bottom script in index.html

// const express = require('express');
// const path = require('path');
// const Joi = require('joi');
// const app = express();
// app.use('/public', express.static(path.join(__dirname, 'static' )));  
// app.use(express.urlencoded({ extended: false }))
// app.use(express.json());
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static', 'index.html' ));
// });

// app.post('/', (req, res) => {
//     const schema = Joi.object().keys({ 
//         email: Joi.string().trim().email().required(),
//         password: Joi.string().min(5).max(10).required()
//      });
//     let result = schema.validate(req.body);
//     if(result.error){
//         console.log(result.error);
//         res.send("An error has occurred");
//     }
//     else{
//         console.log(result.value);
//         res.send("Succesfully posted data");
//     }
// });

// app.listen(3000);

///  User Input Validation with JOI Validating Nested Object and Arrays
 
// const express = require('express');
// const path = require('path');
// const Joi = require('joi');
// const app = express();
// const arrayString = ['banana', 'bacon', 'cheese'];
// const arrayObjects = [{ example: 'example1' }, { example: 'example2' }, { example: 'example3' }];
// const userInput = {
//                     personalInfo:{
//                         streetAddress: '1232323',
//                         city: 'sdfsfs',
//                         state: 'fg' 
//                     },

//                     // preferences: arrayString // 
//                     preferences: arrayObjects
//                 };

// const personalInfoSchema = Joi.object().keys({
//     streetAddress: Joi.string().trim().required(),
//     city: Joi.string().trim().required(),
//     state: Joi.string().trim().length(2).required(),
// });

// // const preferencesSchema = Joi.array().items(Joi.string()); // in case userInput.preferences === arrayString
// const preferencesSchema = Joi.array().items(Joi.object().keys({
//     example: Joi.string().trim().required()
// })); // in case userInput.preferences === arrayObjects  

// const schema = Joi.object().keys({
//     personalInfo: personalInfoSchema,
//     preferences: preferencesSchema
// });

// let result = schema.validate(userInput);
// if(result.error){
//     console.log(result.error);
// }
// else{
//     console.log(result.value);
// }


/// Getting Started With EJS Templates With Express 

// const express = require('express');
// const path = require('path');
// const app = express();
// app.use('/public', express.static(path.join(__dirname, 'static1' )));  
// app.set('view engine', 'ejs');
// app.get('/:userQuery', (req, res) => {
//     res.render('index', { data: { userQuery: req.params.userQuery,
//                                   searchResults: ['book1', 'book2', 'book3'],
//                                   loggedIn: true,
//                                   username: 'arpan' } }); // no need to specify .ejs extension
// });

// app.listen(3000);
 
/// How does MiddleWare Work and Creating Custom Middleware

// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use('/example', (req, res, next) => { // next() is a callback that invokes the next middleware function in the app, else the server will timeout.
//                               // This callback can be given any name but "next" is the conventional name. It is not part of Node.js or Express API.
//                               // next() must always be invoked when a custom middleware is created.
    
//    req.banana = 'banana';    // one can also modify req and res objects using such custom middleware.
//    console.log(req.url, req.method);
//    next();  
// });

// app.get('/:word', (req, res)=>{
//     if(req.params.word === 'example'){
//         console.log(req.banana);
//     }
//     res.send('Middleware');
// });

// app.listen(3000);

/// Working with the Express Router

const express = require('express');
const path = require('path');
const app = express();
app.use('/public', express.static(path.join(__dirname, 'static1' )));  
app.set('view engine', 'ejs');
const people = require('./routes/people');

app.use('/people', people);

app.listen(3000);
 