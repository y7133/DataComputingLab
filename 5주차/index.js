var http = require('http'); // node 내장 모듈 불러옴 
var hostname = '18.233.28.29'; // localhost와 동일 
var port = 3000; 
http.createServer(function(req, res){
     res.writeHead(200, { 
         'Content-Type': 'text/plain' 
        }); 
res.end('Hello World\n'); }).listen(port, hostname); 
console.log('Server running at http://'+hostname+':'+port);

// const express = require('express')
// const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// let users=[{
//     id:1,
//     name:'Hyun'
// },
// {
//     id:2,
//     name:'Alice'
// },
// {
//     id:3,
//     name:'Kelly'
// }
// ]

// app.get('/users',(req,res)=>{
//     return res.json(users);
// });
// app.get('/users/:id',(req,res)=>{
//     const id=parseInt(req.params.id,5);
//     if(!id){
//         return res.status(400).json({err:'Incorrect id'});
//     }
//     let user = users.filter(user => user.id == id)[0]
//     if(!user){
//         return res.status(404).json({err:'Unknown user'});

//     }
//     return res.json(user);
// });
// app.post('/users',(req,res)=>{
//     const name = req.body.name || '';
//     if(!name.length){
//         return res.status(400).json({err:'Incorrect name'});
//     }
//     const id = users.reduce((maxId,user)=>{
//         return user.id>maxId?user.id:maxId;},0)+1;
//     const newUser = {
//         id:id,
//         name:name
//     };
//     users.push(newUser);
//     return res.status(201).json(newUser);
// });
// app.listen(3000,()=>{
//     console.log('server working:');
// });