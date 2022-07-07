// var user = {
//     firstName: "Rajat",
//     lastName: "Chadha",
//     role: "Admin",
//     loginCount: 32,
//     facebookSignedIn: true,
//     courseList: [],
//     buyCourse: function (courseName) {
//         this.courseList.push(courseName);
//     },
//     getCourseCount: function () {
//         return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
//     },
//     info: function() {
//         console.table(this);
//     }
// };
// var courseList = true;
// console.log(user.firstName);
// console.log(user.getCourseCount());
// user.buyCourse("React JS Course");
// user.buyCourse("Angular Course");
// user.buyCourse("JavaScript Course");
// user.buyCourse("NodeJS Course");
// console.log(user.getCourseCount());
// user.info();

// function init () {
//     var firstName="Rajat";
//     console.log("I am Init");

//     function sayFirstName() {
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// init();

// const uno = () => {
//     return "I am one";
// };

// const dos = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("I am two");
//         },3000);
//     });
// };

// const tres = () => {
//     return "I am three";
// };

// const callMe = async () => {
//     let valOne = uno();
//     console.log(valOne);

//     let valTwo = await dos();
//     console.log(valTwo);

//     let valThree = tres();
//     console.log(valThree);
// }

// callMe();

const http = require('http');
const fs=require('fs');

const server = http.createServer((req,res) => {
    console.log('request has been made from browser to server');
    // console.log(req);
    // console.log(req.url);
    res.setHeader('Content-Type', 'text/html');

    let path='./test';
    switch(req.url){
        case '/':
            path+='/index.html'
            break;
        case '/about':
            path+='/about.html'
            break;
        default:
            path+='/404.html'
            break;
    }

    fs.readFile('./views/index.html',(err,fileData)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(fileData);
            res.end();
        }
    })
});

server.listen(3000, 'localhost', ()=>{
    console.log('server is listening on port 3000...');
});

