const http = require('http');
const swaggerUi = require('swagger-ui-express');
const app = require('./config/express')();
const swaggerFile = require('./swagger_output.json');

http.createServer(app).listen(3000);
console.log('Executando na porta:', 3000);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
