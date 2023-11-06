let express = require('express');
let app = express();


app.get('/test', function (request, response) {
    response.send('GET request to path /test executed');
    console.log('Get request to path/ test executed')
});

app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path);
    next();
});

//saying go to the public directory 
app.use(express.static(__dirname + '/public'));

app.listen(8080, () => console.log(`listening on port 8080`)); 