// <!-- // Product 1 -->
let item1 = 'Jack-O-Lantern';
let quantity1 = 1;
let price1 = 12.55;
let extended_price1 = quantity1 * price1;

// <!-- // Product 2 -->
let item2 = 'Spooky Skeleton';
let quantity2 = 1;
let price2 = 29.99;
let extended_price2 = quantity2 * price2;


// <!-- // Product 3 -->
let item3 = 'Screamin Marshmallows';
let quantity3 = 1;
let price3 = 6.66;
let extended_price3 = quantity3 * price3;


// <!-- // Product 4 -->
let item4 = 'Black Cat Cafe';
let quantity4 = 1;
let price4 = 1.33;
let extended_price4 = quantity4 * price4;

// <!-- // Product 5 -->
let item5 = 'Horror Movie Collection';
let quantity5 = 1;
let price5 = 130.11;
let extended_price5 = quantity5 * price5;

//subtotal
let subtotal = extended_price1 + extended_price2 +extended_price3+extended_price4+extended_price5;

//sales tax
let taxRate=0.0575
let taxAmount= subtotal * taxRate;

//total in all
let total = subtotal + taxAmount;

//DOM
let table= document.getElementById('invoiceTable');
//jack o lantern
let row = table.insertRow();
row.insertCell(0).innerHTML= `${item1}`;
row.insertCell(1).innerHTML= `${quantity1}`;
row.insertCell(2).innerHTML= `$` + `${price1}`;
row.insertCell(3).innerHTML= (`$` + `${extended_price1}`);
//skeleton
row= table.insertRow();
row.insertCell(0).innerHTML= `${item2}`;
row.insertCell(1).innerHTML= `${quantity2}`;
row.insertCell(2).innerHTML= `$` + `${price2}`;
row.insertCell(3).innerHTML= (`$` + `${extended_price2}`);
//marshmallows
row= table.insertRow();
row.insertCell(0).innerHTML= `${item3}`;
row.insertCell(1).innerHTML= `${quantity3}`;
row.insertCell(2).innerHTML= `$` + `${price3}`;
row.insertCell(3).innerHTML= (`$` + `${extended_price3}`);

//black cat
row= table.insertRow();
row.insertCell(0).innerHTML= `${item4}`;
row.insertCell(1).innerHTML= `${quantity4}`;
row.insertCell(2).innerHTML= `$` + `${price4}`;
row.insertCell(3).innerHTML= (`$` + `${extended_price4}`);

//horror movie
row= table.insertRow();
row.insertCell(0).innerHTML= `${item5}`;
row.insertCell(1).innerHTML= `${quantity5}`;
row.insertCell(2).innerHTML= `$` + `${price5}`;
row.insertCell(3).innerHTML= (`$` + `${extended_price5}`);


//make sure everything is calculating
document.getElementById(`subtotal_cell`).innerHTML=`$` + subtotal.toFixed(2);
document.getElementById(`tax_cell`).innerHTML = `$` + taxAmount.toFixed(2);
document.getElementById(`total_cell`).innerHTML= `$` + total.toFixed(2);