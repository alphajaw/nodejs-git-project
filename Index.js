const http = require("http");

http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Home Page</h1>");
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        console.log("404 Page is been Visited");
        res.write("<h1>404 Not Found</h1>");
        res.end();
    }
}).listen(8080);
