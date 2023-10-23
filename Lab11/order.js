function updateQuantityMessage(textbox){
    let quantityMessage=document.getElementsById('qty_textbox_message');
    let validationMessage = validateQuantity(Number(textbox.value));

    //validation errors display error message
    if (validationMessage !==""){
quantityMessage.innerHTML= validationMessage;
    } else {
quantityMessage.innerHTML = textbox.value;
    }
}
function validateQuantity(quantity){
    let errorMessage="";

    switch (true){
        case isNaN(quantity):
        errorMessage="Not a number. please enter a non-negative quantity to order";
        break;
    case quantity<=0 && !Number.isInterger(quantity):
    errorMessage = "Negative number and not an integer. Please enter a non-negative quantity to order";
    break;
case quantity<0:
    errorMessage = "Negative inventory. Please enter a non-negative quantity to order.";
    break;
case !Number.isInteger(quantity):
    errorMessage=" Not an Integer.Please enter a non-negative quantity to order.";
break;
default: 
errorMessage= '';
break;
    }
}