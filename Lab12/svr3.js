let express = require('express');
let app = express();

//saying go to the public directory 
app.use(express.static(__dirname + '/public'));

app.get('/test', function (request, response) {
    response.send('GET request to path /test executed');
    console.log('Get request to path/ test executed')
});

 app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path);
    next();
});
//says show what was in the request and it needs to be before it got the instructions to post it as an output
app.use(express.urlencoded({ extended: true }));

//sending the request to the post to the body of the webpage even tho there is not an html
app.post("/process_form", function (request, response) {
    let q = Number(request.body['qty_textbox']);
    console.log("the input value is ..."+q);
    let validationMessage= validateQuantity(q);
//this is fixing the validation response if it is a number or not a number when you click purchase 
    if (validationMessage == ""){
        response.send(`Thank you for purchasing ${q} things!`);
    } else {
        response.send(validationMessage + '<br>' + `Error: ${q} is not a quantity. Hit the back button to fix.`);
    }
    // if (typeof q != 'undefined') {
    // response.send(`Thank you for purchasing ${q} things!`);
    // } else { response.send('Invalid quantity specified.'); }
    // // response.send(request.body); 
 });

 app.listen(8080, () => console.log(`listening on port 8080`)); 

 function validateQuantity(quantity) {
    let errorMessage = "";
  //from Poke 12
    switch (true) {
        case isNaN(quantity):
            errorMessage = "Not a number. Please enter a non-negative quantity to order.";
            break;
        case quantity < 0 && !Number.isInteger(quantity):
            errorMessage = "Negative inventory and not an Integer. Please enter a non-negative quantity to order.";
            break;
        case quantity < 0:
            errorMessage = "Negative inventory. Please enter a non-negative quantity to order.";
            break;
        case !Number.isInteger(quantity):
            errorMessage = "Not an Integer. Please enter a non-negative quantity to order.";
            break;
        default:
            errorMessage = ""; // No errors
            break;
    }
    return errorMessage;
}