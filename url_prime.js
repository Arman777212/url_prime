function prime(num){
    if(num == 1) return true;
    var t = num / 2;
    var k = 2;
    while(k <= t) {
      if(num % k == 0) {
         return "0"
      } else {
      k++;  
     }
    }
     return "1" ;
   }
   
   
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(prime(Number(req.url.split("/")[1])));

});

server.listen(8800);

