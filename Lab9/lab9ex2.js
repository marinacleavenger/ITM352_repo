// attributes = "<name>;<age>;<major>"
// let name= "Marina"
// let age= "20"
// let major = "MIS"


// Define the attributes string
let attributes = "<name>;<age>;<major>";

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