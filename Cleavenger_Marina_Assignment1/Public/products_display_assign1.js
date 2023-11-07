const product1 = {
    name: "Jack-O-Lantern",
    price: 12.55,
    image: ""
};

const product2 = {
    name: "Spooky Skeleton",
    price: 29.99,
    image: ""
};

const product3 = {
    name: "Black Cat Cafe Latte",
    price: 15.33,
    image: ""
};

const product4 = {
    name: "Screamin Marshmallows",
    price: 6.66,
    image: ""
};

const product5 = {
    name: "Horror Movie Collection",
    price: 130.33,
    image: ""
};

const products = [product1, product2, product3, product4, product5];


for (let i=0; i < products.length; i++){
    const product = products[i];
    document.querySelector('.main').innerHTML += `
    <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this);">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <img src="${product.image}" />
        <label id="quantity${i}_label" for="quantity${i}">Please Insert Quantity</label>
        <input type="text" name="quantity${i}" id="quantity${i}">
    </section>`;
}

// //create variables to push to the DOM for current year and time in the footer
// const currentYear = new Date().getFullYear();
// const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


// /* Table footer that has brings my name that was declared in the html, time, and copywright */
// const footerTable = `
//     <table>
//         <tr>
//             <td></td>
//             <td class="table-header">Your One Stop For Used Phones - ${first_name.charAt(0).toUpperCase()}.${last_name.charAt(0).toUpperCase()}'s</td>
//         </tr>
//         <tr>
//             <td>1.</td>
//             <td>Copyright @ ${first_name} ${last_name}</td>
//         </tr>
//         <tr>
//             <td>2.</td>
//             <td>${currentYear}</td>
//         </tr>
//         <tr>
//             <td>3.</td>
//             <td>${currentTime}</td>
//         </tr>
//     </table>
// `;

// // Set the innerHTML of the bottom_title element to the generated table
// bottom_title.innerHTML = footerTable;

// function changeClassName(element) {
//     if(element.className=='item'){
//         element.className = 'item rotate';
//         spins=spins+1;
//     }
//     if(spins<2*hits&&hits<spins){
//        over_half=true;
//     } 

//     win_span.innerHTML=over_half;
//     spins_span.innerHTML = spins; 
//     hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

// }
// function resetClassName(element) {
//     if(element.className=='item rotate'){
//         element.className = 'item';
//         hits=hits+=2;
//     } else {
//         changeClassName(element);
//     }

//     if(spins<2*hits&&hits<spins){
//         over_half=true;
//     } 

//     win_span.innerHTML=over_half;
//     hits_span.innerHTML = hits; 
//     hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
// }