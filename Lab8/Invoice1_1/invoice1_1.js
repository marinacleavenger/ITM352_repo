
//lab 8 part 2.1
let product_quantities=[2,1,1,1,1];

//lab 8 part 2.3
product_quantities.push(3);
// alert("The size of the products array is: " + product_quantities.length);
product_quantities.pop();

//lab 8 part 2.2
// alert("The size of the products array is: " + product_quantities.length);

// <!-- // Product 1 -->
let item1 = 'Jack-O-Lantern';
let quantity1 = product_quantities[0];
let price1 = 12.55;
// let extended_price1 = quantity1 * price1;

// <!-- // Product 2 -->
let item2 = 'Spooky Skeleton';
let quantity2 = product_quantities [1];
let price2 = 29.99;
let extended_price2 = quantity2 * price2;


// <!-- // Product 3 -->
let item3 = 'Screamin Marshmallows';
let quantity3 = product_quantities [2];
let price3 = 6.66;
let extended_price3 = quantity3 * price3;


// <!-- // Product 4 -->
let item4 = 'Black Cat Cafe';
let quantity4 = product_quantities [3];
let price4 = 1.33;
let extended_price4 = quantity4 * price4;

// <!-- // Product 5 -->
let item5 = 'Horror Movie Collection';
let quantity5 = product_quantities [4];
let price5 = 130.11;
let extended_price5 = quantity5 * price5;

//lab8 part 1.1
let product1={
itemName: "Jack-O-Lantern",
quantity: product_quantities[0],
price: 24.11
};

//lab 8 part 1.4
product1["SKU#"]=1234;
delete product1["SKU#"];

//lab 8 part 1.3
// product1.quantity = 0;
//lab 8 part 1.2
let extended_price1 = product1.quantity*product1.price;

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
row.insertCell(0).innerHTML= `${product1.itemName}`;
row.insertCell(1).innerHTML= `${product1.quantity}`;
row.insertCell(2).innerHTML= `$` + `${product1.price.toFixed(2)}`;
row.insertCell(3).innerHTML= (`$` + `${extended_price1.toFixed(2)}`);
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