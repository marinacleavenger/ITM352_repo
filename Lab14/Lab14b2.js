const fs=require('fs');

let filename= __dirname+"/user_data.json";

if (fs.existsSync(filename)){
let data = fs.readFileSync(filename, 'utf-8');

//make it something other than a string 
let user_reg_data= JSON.parse(data);

//stat sync will create a stats object that has different elements such as stat size, file name, etc.  Declairing this
let user_stats = fs.statSync(filename);

let stat_size= user_stats.size;
//print it out in characters
console.log(`The file name of ${filename} has ${stat_size} characters`);

} else{
    console.log(`The file name ${filename} does not exist.`);
    
}