var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
  var url = request.url;
  if(request.url == '/'){
    url = '/index.html';
  }
  if(request.url == '/favicon.ico'){
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  console.log(__dirname + url);
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);

// node 에서 실행시키면 로컬 웹서버 사용
// ctrl + a,c 누르면 종료