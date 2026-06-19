const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    message: "CI/CD Demo App",
    status: "success"
  }));
});

server.listen(3002, () => {
  console.log("Server running on port 3000");
});
