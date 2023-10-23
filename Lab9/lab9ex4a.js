let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";

// Split the attributes string into an array of parts
let parts = attributes.split(";");

// Extract the name, age, and major from the array
let name = parts[0].slice(1, -1);  
let age = parts[1].slice(1, -1); 
let major = parts[2].slice(1, -1); 

// Print the extracted values
console.log("Marina:", name);
console.log("20:", age);
console.log("MIS:", major);

// Split the attributes string into an array of parts using ";" as the separator
let pieces = attributes.split(";");

// Define the isNonNegInt function
function isNonNegInt(q) {
  let errors = [];

  if (Number(q) != q) errors.push('Not a number!');
  if (q < 0) errors.push('Negative value!');
  if (parseInt(q) != q) errors.push('Not an integer!');

  return errors.length === 0;
}

// Loop through the pieces array and test each element
for (let i = 0; i < pieces.length; i++) {
  let isValid = isNonNegInt(pieces[i]);
  console.log(`Element "${pieces[i]}" is a non-negative integer: ${isValid}`);
}