var http = require('http')
    ,app = require('./config/express');
    
let port = process.env.PORT || 3000;

http.createServer(app).listen(port, '0.0.0.0', function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
