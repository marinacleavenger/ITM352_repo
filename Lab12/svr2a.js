let express = require('express');
let app = express();

// Add a route for GET requests to the path '/test'

app.get('/test', function (request, response) {
    response.send('GET request to path /test exectued');
    console.log ('GET request to path / test executed')
});

app.all('*', function (request, response, next) {
    //response.send(reques.method + ' to path ' + request. path)
    console.log(request.method + ' to path ' + request.path);
    next();
});

app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback