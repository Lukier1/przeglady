var express = require('express');
const app = express();
const port = process.env.PORT != null ? process.env.PORT : 8081;

app.get('/api', function (req, res) {
   res.send('Hello world');
});

app.use(express.static('public'));

var server = app.listen(port, () =>  console.log(`Przeglad app start on port: ${port}`));