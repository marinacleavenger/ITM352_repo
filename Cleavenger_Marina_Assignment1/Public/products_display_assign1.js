
console.log(products)

for (let i=0; i < products.length; i++){
    const product = products[i];
    document.querySelector('.main').innerHTML += `
    <div class="col-md-6 mb-6">
    <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this);">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <img src="${product.image}" />
        <label id="quantity${i}_label" for="quantity${i}">Please Insert Quantity</label>
        <input type="text" name="quantity${i}" id="quantity${i}">
    </section>
</div>`;
}

