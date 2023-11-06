
//check the URL for aNY ERROR PARAMETERS AND QUANTITY AND DISPLAY/USE THEM
let params = (new URL(document.location)).searchParams;
let q= Number(params.get('quantity'));
let error = params.get('error');
//if there is a error it will alert 
if (error){
    alert(error);
}

// this loop will go through the product Array, so we are deleting 
// <script> for (i in products) {
//     document.write(`<h4>${products[i]["total_sold"]} ${products[i]["brand"]} have been sold!</h4>`);
// }
// </script>

//select the div where the product details should be displayed 
let productDetailsDiv = document.getElementById('productDetails');

//display the first products details
productDetailsDiv.innerHTML = `<h3>${products[0]["brand"]} at \$${products[0]["price"]}</h3>`;

//select div where the product list will be deployed 
let productListDiv=document.getElementById('productList');
// iterate through the products and display their sold counts
for (let i in products){
    productListDiv.innerHTML +=`<h4>${products[i]["total_sold"]}${products[i]["brand"]} have been sold </h4>`;

}
