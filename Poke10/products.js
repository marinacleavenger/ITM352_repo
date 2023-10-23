
//  quantities array
let quantity = [2, 1, 1, 2, 1];

// Define the item objects (minus image data) with brand and quantity attributes
let itemData = [
  {
    brand: 'Jack-O-Lantern',
    price: 12.55,
    quantityIndex: 0, 
  },
  {
    brand: 'Spooky Skeleton',
    price: 29.99,
    quantityIndex: 1, 
  },
  {
    brand: 'Screamin Marshmallows',
    price: 6.66,
    quantityIndex: 2, 
  },
  {
    brand: 'Black Cat Cafe',
    price: 15.33,
    quantityIndex: 3, 
  },
  {
    brand: 'Horror Movie Collection',
    price: 130.11,
    quantityIndex: 4, // Use index position to reference the quantity
  },
];

export { itemData, quantity };