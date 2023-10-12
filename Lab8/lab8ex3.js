// define the product quantites array 
let product_quantities= [2, 1, 1, 1, 1];

//prodct_quantities and print each element in table
document.write("<table>");
document.write("<tr><th>Product #</th><th>Quantity</th></tr>");

for (let i=0; i < product_quantities.length; i++) {
    document.write("<tr>");
    document.write("<td>" + (i+1)+ "</td>");
    document.write("<td>" + product_quantities[i] + "/td>");
    //quantity
    document.write("/<tr>");
}
document.write("</table>");
