//after above the first order.js insert below

function displayPurchase(){
    let quantity = Number(document.getElementById('qty_textbox').value);
    let validationMessage = validateQuantity(quantity);
    if (validationMessage == ""){
        let message = `Thank you for ordering ${quantity} things!`;
        document.body.innerHTML=message;
    } else {
        alert(validationMessage+ "Please enter a positive integer for quantity")
        document.getElementById('qty_textbox').value="";
    }
}