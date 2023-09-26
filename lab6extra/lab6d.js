//This is an order that is being called that will be sent to the DOM. Both of these will make sure that the month input and the result will assign a value for the element. 
let monthInput=document.getElementById("monthInput");
let result=document.getElementById("result");
//Only when button is selected will the function run
document.querySelector('button').addEventListener('click', function () {
let month=monthInput.value.toLowerCase();

//default value also can be an error on the input 
    let num_days =-1;
    //switch is introduced to change the output dependent on what the input is. This can also match expressions. Case will execute the block of code. 
    switch(month){
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
        num_days =31;
            break;
        case "april":
        case "june":
        case "september":
        case "november":
        num_days=30;
        break;
        case "february":
        num_days=28;
    }
//if it is not spelled correctly it will say invalid, but if not the switch will comense and you will have the days of the month.
    if (num_days === -1){
        result.textContent ='Invalid Month. Please enter a valid month name';
    } else {
        result.textContent = `There are ${num_days} days in ${month}.`;
    }
    });