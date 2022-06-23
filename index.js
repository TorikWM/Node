// const fs = require("fs");
// const http = require("http");

// fs.writeFile('msg.txt', "Hello world!", (err, data) => {
//     if (err) throw err
//     console.log("fille created..");
// });

// fs.readFile("msg.txt", "utf-8" , (err, data) => {
//     if (err) throw err;
//     // allways handle error first
//     console.log(data.toString());
// });

// const data = fs.readFileSync('msg.txt', 'utf-8')

// console.log(data);

// const server = http.createServer((request, response) => {
//   response.writeHead(201, {
//     "content-type": "text/html",
//   });
//   fs.readFile("index.html", "utf-8", (err, data) => {
//     if (err) throw err;
//     response.write(data);
//     response.end();
//   });
// });

// server.listen(5000);

// console.log("program ended");

const demo = require("./demo")
console.log(demo.add(5, 8));
console.log(double(5));