var http = require('http');
var fs = require('fs');
fs.readFile('./client/pages/application.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.write(html);  
        response.end();  
    }).listen(3000);
});
