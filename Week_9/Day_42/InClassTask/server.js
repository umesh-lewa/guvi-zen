// create express server variables
var express = require('express');
var app = express();

// create file system variables
var fs = require('fs');
const path = require('path');

var bodyParser = require('body-parser');  

app.use(express.json());  

app.get('/', function (req, res) {
   res.send('Hello From Heroku !');
})

let students = [];
let teachers = [];


app.post('/addStudent', function (req, res) {

    //let sId = req.params.studentId;
    let sName = req.body.studentName;

   students.push({
       "id":students.length+1,
       "name":sName,
       "teacher":""
   });

   res.send("Student successfully created");
})


app.post('/addTeacher', function (req, res) {
   
    //let tId = req.params.teacherId;
    let tName = req.body.teacherName;

    teachers.push({
        "id":teachers.length+1,
        "name":tName,
        "students":[]
    })

    res.send("Teacher successfully created");
})

app.post("/assignStudentToTeacher/:studentId/:teacherId",function (req,res) {

    let sId = req.params.studentId;
    let tId = req.params.teacherId;

    let tName = teachers.find(el => el.id == tId).name;
    students.find(el => el.id == sId).teacher = tName;

    teachers.find(el => el.id == tId).students.push(sId);

    res.end("Student assigned to teacher");
})

app.get("/getStudentDetails/:studentId",function (req,res) {

    let sId = req.params.studentId;

    res.send(students.find(el => el.id == sId))
})

app.get("/getTeacherDetails/:teacherId",function (req,res) {

    let tId = req.params.teacherId;
    
    res.send(teachers.find(el => el.id == tId))
})

// start the server with specified port
var server = app.listen(process.env.PORT || 8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})