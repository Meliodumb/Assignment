const http = require("http");
const fs = require("fs");
const port = 2000;
const server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    let path = "./";
    switch (req.url) {
        case "/":
            path += "assignment02.html";
            break;
        case "/about":
            path += "about.html";
            break;
        case "/page1":
            path += "page1.html";
            break;
        case "/page2":
            path += "page2.html";
            break;
        default:
            path += "404.html";
            break;
    }
    fs.readFile(path, function (error, data) {
        if (error) {
            res.writeHead(404, error);
            res.write("Error: File Not Found");
        } else {
            res.write(data);
        }
        res.end();
    });
}).listen(port, function (error) {
    if (error) {
        console.log("Something Went Wrong");
    } else {
        console.log("Server is listening on port ", port);
    }
});