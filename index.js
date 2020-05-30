const fs = require("fs");
const http = require("http");
const url = require("url");



const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);


const server = http.createServer((req, res) => {

  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("this is the PRODUCT");
  } else if (pathName === "/api") {
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(data)
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "WHAT THE F!!!!!",
    });
    res.end("<h1>Page not found!!!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to port 8000 again!!!!");
});
