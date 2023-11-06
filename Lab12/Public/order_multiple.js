//order_multiple.js

window.onload = function () {

//check the URL for aNY ERROR PARAMETERS AND QUANTITY AND DISPLAY/USE THEM
let params = (new URL(document.location)).searchParams;
let q= Number(params.get('quantity'));
let error = params.get('error');
//if there is a error it will alert 
if (error){
    alert(error);
}
//define a variable that points to the form on the DOM in order to dynamically populate the form 
const form = document.getElementById('productForm');
let formHTML = ''; //blank content of form to add
//then right a loop to print product information and then add a quantity text input box for every element of the product array (all products have quantity box to select how much)
for (let i in products) {
    formHTML += `<h3>${products[i]["brand"]} at \$${products[i]["price"]} (${products[i]["total_sold"]} sold)</h3>`;
    formHTML += `
    <label for="quantity_textbox_${i}">Quantity desired:</label>
    <input type="text" id="quantity_textbox_${i}" name="quantity_textbox[${i}]" onkeyup="checkQuantityTextbox(this);">
    <span id="quantity_textbox[${i}]_message">Enter a quantity</span><br>
`; 
}
//submit button is part of form
formHTML+= `<br> <input type="submit" value="Purchase">`;
//push the form content to the DOM
form.innerHTML=formHTML;
}
//add the checkQuantity Textbox()
function checkQuantityTextbox(theTextbox) {
    let errs = validateQuantity(theTextbox.value, true);
    document.getElementById(theTextbox.name + '_message').innerHTML = errs;
}
//add validateQuantity
function validateQuantity(quantity) {
    let errorMessage = "";

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


// this loop will go through the product Array, so we are deleting 
// <script> for (i in products) {
//     document.write(`<h4>${products[i]["total_sold"]} ${products[i]["brand"]} have been sold!</h4>`);
// }
// </script>

// //select the div where the product details should be displayed 
// let productDetailsDiv = document.getElementById('productDetails');

// //display the first products details
// productDetailsDiv.innerHTML = `<h3>${products[0]["brand"]} at \$${products[0]["price"]}</h3>`;

// //select div where the product list will be deployed 
// let productListDiv=document.getElementById('productList');
// // iterate through the products and display their sold counts
// for (let i in products){
//     productListDiv.innerHTML +=`<h4>${products[i]["total_sold"]}${products[i]["brand"]} have been sold </h4>`;

// }
