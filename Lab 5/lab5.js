//declare variables per lab 5.1 
let age=20;
let fav_num=3; 
let day_of_birth=9;
let month_of_birth=11;

//define calculations
let calc1 = age + fav_num / day_of_birth * month_of_birth;
let calc2 = (age + fav_num) / day_of_birth * month_of_birth;

/*Pemdas:Parenthesis, exponents, multiplication, division, addition, subtraction */
//ouput calc1 and calc2 to the DOM
document.getElementById("result1").innerHTML = calc1;
document.getElementById("result2").innerHTML = calc2;
