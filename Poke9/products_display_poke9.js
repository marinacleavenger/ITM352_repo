//define store name and push it to the DOM in the top title
const first_name = "Marina";
const last_name = "Cleavenger's";
const store_name="Marina";

// display your name with formatting
const firstNameSpan = document.getElementById('first_name_span');
const lastNameSpan = document.getElementById('last_name_span');
firstNameSpan.textContent = first_name;
lastNameSpan.textContent = last_name;
top_title.innerHTML=("Used Smart Phone Store");

//initialize hits, spins, over_half and send to the DOM
let hits= 0;
let spins=0;
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

const product1 = {
    name: "HTC",
    price: 40.00,
    image: "images/HTC.jpg"
};
const product2 = {
    name: "Apple",
    price: 75.00,
    image: "images/iphone-3gs.jpg",
};
const product3 = {
    name: "Nokia",
    price: 35.00,
    image: "images/Nokia.jpg"
};
const product4 = {
    name: "Samsung",
    price: 45.00,
    image: "images/Samsung.jpg"
};
const product5 = {
    name: "Blackberry",
    price: 45.00,
    image: "images/Blackberry.jpg"
};

const products = [product1, product2, product3, product4, product5]

for (let i=0; i < products.length; i++){
    const product = products[i];
    document.querySelector('.main').innerHTML += `
    <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this);">
        <h2>${product.name}}</h2>
        <p>$${product.price}</p>
        <img src="${product.image}" />
    </section>`;
}

//create variables to push to the DOM for current year and time in the footer
const currentYear = new Date().getFullYear();
const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


/* Footer*/
const footerTable = `
    <table>
        <tr>
            <td></td>
            <td class="table-header">Your One Stop For Used Phones - ${first_name.charAt(0).toUpperCase()}.${last_name.charAt(0).toUpperCase()}'s</td>
        </tr>
        <tr>
            <td>1.</td>
            <td>Copyright @ ${first_name} ${last_name}</td>
        </tr>
        <tr>
            <td>2.</td>
            <td>${currentYear}</td>
        </tr>
        <tr>
            <td>3.</td>
            <td>${currentTime}</td>
        </tr>
    </table>
`;

// Set the innerHTML of the bottom_title element to the generated table
bottom_title.innerHTML = footerTable;

function changeClassName(element) {
    if(element.className=='item'){
        element.className = 'item rotate';
        spins=spins+1;
    }
    if(spins<2*hits&&hits<spins){
       over_half=true;
    } 

    win_span.innerHTML=over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

}
function resetClassName(element) {
    if(element.className=='item rotate'){
        element.className = 'item';
        hits=hits+=2;
    } else {
        changeClassName(element);
    }

    if(spins<2*hits&&hits<spins){
        over_half=true;
    } 

    win_span.innerHTML=over_half;
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}