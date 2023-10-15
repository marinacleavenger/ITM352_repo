// define the product quantites array 
let product_quantities= [2, 1, 1, 1, 1];

// array of all products
// corresponds to product_quantities array
// product_quantities[i] is the quantity for products[i]
let products = [
    { 'name': 'small gumball', 'price': 0.02 },
    { 'name': 'medium gumball', 'price': 0.05 },
    { 'name': 'large gumball', 'price': 0.07 },
    { 'name': 'small jawbreaker', 'price': 0.06 },
    { 'name': 'large jawbreaker', 'price': 0.10 }
   ];

//prodct_quantities and print each element in table
document.write("<table>");
//lab 8 part 3.2
document.write("<tr><th>Product #</th><th>Name</th><th>Price</th><th>Quantity</th><th>Extended Price</th></tr>");

// document.write("<tr><th> Product #</th><th>Quantity</th></tr>");

for (let i=0; i < product_quantities.length; i++) {
    let quantity=product_quantities[i];
    let product=products[i];
    let extended_cost = quantity * product.price;

    document.write("<tr>");
    document.write("<td>" + (i+1)+ "</td>"); //product#
    document.write("<td>" + product.name + "</td>"); //name 
    document.write("<td>" + product.price.toFixed(2) + "</td>"); //price 
    document.write("<td>" + quantity + "</td>"); //quantity
    document.write("<td>" + extended_cost.toFixed(2) + "</td>"); //Extend cost   
    document.write("/<tr>");
}
document.write("</table>");

//create a button to delete last row lab 8 4.2
//creating HTML button element
let deleteButton= document.createElement('button');
//let text content button "Delete last row"
deleteButton.textContent = 'Delete Last Row';
// ad a click event listener to the button
deleteButton.addEventListener('click', deleteLastRow);
//add button to document body 
document.body.appendChild(deleteButton);

//lab 4.1 
function addNewRow() {
    let table = document.querySelector('table');

    let newRow = table.insertRow();
    newRow.innerHTML = `
    <td> blank </td> 
    <td> blank </td> 
    <td> blank </td> 
    <td> blank </td> 
    <td> blank </td> 
    `;
 };

 // add a click event listener to the table to trigger the addNewRow function. Need an event listener on the click to add a new row. 
 document.addEventListener('DOMContentLoaded', function (){
    let table = document.querySelector('table');
    table.addEventListener('click', addNewRow);
 });

 //function to delete the last row of table
 function deleteLastRow(){
let table = document.querySelector('table');
let rowCount = table.rows.length; //gives row count for table

if (rowCount>1) {
    table.deleteRow(rowCount-1); //delete last row
    };
 };
