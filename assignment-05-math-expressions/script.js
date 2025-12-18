// 1. Write a program that take two numbers & add them in anew variable. Show the result in your browser.
var num1 = 3;
var num2 = 5;
var add = num1 + num2
document.write("Sum of  " + num1 + " and " + num2 + " is " + add + "<br>");

//2. Repeat task1 for subtraction, multiplication, division & modulus.
var num1 = 3;
var num2 = 5;
var subtract = num1 - num2
document.write("Subtract of  " + num1 + " and " + num2 + " is " + subtract + "<br>");

// for Multiplication
var num1 = 3;
var num2 = 5;
var multiplication = num1 * num2
document.write("Multiplication of  " + num1 + " and " + num2 + " is " + multiplication + "<br>");

// for devision
var num1 = 3;
var num2 = 5;
var devision = num1 / num2
document.write("devision of  " + num1 + " and " + num2 + " is " + devision + "<br>");

// for modulus
var num1 = 3;
var num2 = 5;
var modulus = num1 % num2
document.write("modulus of  " + num1 + " and " + num2 + " is " + modulus + "<br>");

//3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var myName;

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”

myName = "after variable declaration is:?? <br>";
document.write(myName);

// c. Initialize the variable with some number.
var num123;

// d. Show the value of variable in your browser like “Initial value: 5”.
num123 = 5;
document.write("initial value : " + num123 + "<br>");

// e. Increment the variable.

num123 ++;
//f. Show the value of variable in your browser like “Value after increment is: 6”
document.write("value after increment is " + num123 + "<br>");

//g. Add 7 to the variable.
num123 = num123 + 7;
document.write(" value after addition is " + num123 + "<br>");

//i. Decrement the variable.
num123--;
document.write(" value after decreament is " + num123 + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
num123 = num123 % 3;
document.write(" The remainder is : " + num123 + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
 var ticketPrice = 600;
 var totalticket = 5 ;
 totalPrice = ticketPrice * totalticket;
 document.write(" Total cost to buy " + totalticket + " tickets to a movie is " + totalPrice + " PKR <br><br>");

//  5. Write a script to display multiplication table of any number in your browser.
var num = prompt("Please Enter any Number whose table you want. ");
var num1 = 1;
document.write("Multiplication Table of " + num + "<br>");
document.write(num + " x " + num1 + " = " + num*num1 + " <br>");
num1++;
document.write(num + " x " + num1 + " = " + num*num1 + " <br>");
num1++;
document.write(num + " x " + num1 + " = " + num*num1 + " <br>");
num1++;
document.write(num + " x " + num1 + " = " + num*num1 + " <br>");
num1++;
document.write(num + " x " + num1 + " = " + num*num1 + " <br>");
num1++;
document.write(num + " x " + num1 + " = " + num*num1 + " <br>");
num1++;
document.write(num + " x " + num1 + " = " + num*num1 + " <br>");
num1++;
document.write(num + " x " + num1 + " = " + num*num1 + " <br>");
num1++;
document.write(num + " x " + num1 + " = " + num*num1 + " <br>");
num1++;
document.write(num + " x " + num1 + " = " + num*num1 + " <br><br>");

// The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
var celsius = prompt("Please Enter Temperature in Degree Celcius");

// b. Convert to Fahrenheit
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + " °C is " + fahrenheit + "°F<br>");

// c. Store a Fahrenheit temperature
var fahrenTemp = 70;
// d. Convert to Celsius
var celsiusTemp = (fahrenTemp - 32) * 5 / 9;
document.write(fahrenTemp + "°F is " + celsiusTemp + "°C <br>");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
document.write("<h1> Shopping cart </h1> <br>");
var priceItem1 = 650;
var priceItem2 = 100;
var quantitiItem1 = 3;
var quantitiItem2 = 7;
var shippingCharges = 100;

// var item1 = priceItem1 * quantitiItem1;
// var item2 = priceItem2 * quantitiItem2;
document.write("Price of item1 is " + priceItem1 + "<br>" + " Quantity of item 1 is " + quantitiItem1 + "<br>" + "Price of item 2 is" + priceItem2 + "<br>"+ "Quantity of item 2 is "  + quantitiItem2  + "<br>" + "Shipping charges " + shippingCharges + "<br>");
var result = (priceItem1 * quantitiItem1) + (priceItem2 * quantitiItem2) + shippingCharges;
document.write("Total Cost of your order is " + result + "<br><br>");

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document .write("Total Marks: " + totalMarks + "<br>" + "Marks Obtained: " + obtainedMarks + "<br>" + "Percentage: " + percentage + "%"+ "<br>");


document.write("<h1> Currency in PKR </h1>");
// var us_1_Dollar = 104.80;
// var us_total_Dollars = 10;
// var totalDollars = us_1_Dollar * us_total_Dollars;
// var uae_1_riyal = 28;
// var uae_total_riyal = 25;
// var totalRiyal = uae_1_riyal * uae_total_riyal;

var expressions = (104.80 * 10) + (28 * 25);
document.write("Total Currency in PKR: " + expressions + "<br>");

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression

var num = (5 + 5) * 10 / 2;
document.write("(5 + 5) * 10 / 2" + " = " + num + "<br>");

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable. b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
document.write("<h1> Age calculator </h1>");

var currentYear = 2025;
var birthYear = 2009;
var myBirth = currentYear - birthYear;
document.write("Current year: " + currentYear + "<br>" + "Birth year: " + birthYear + "<br>" + "My Age: " + myBirth + "<br>");

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h1> The Geometrizer </h1>");
var radiusCircle = 20;
var circum = 2 * 3.142 * 20;
var area = 3.142 * 20**2;
document.write("Radius of a circle is: " + radiusCircle + "<br>" + "The Circumference is: " + circum + "<br>" + "The Area is: " + area + "<br>");

//The lifetime Supply calculator: Even wonder how much a "lifetime supply" of your favourite snack is wonder no more.
// a. Favorite snack
// b. Current age
// c. Maximum age
// d. Amount per day
// e. Calculation
document.write("<h1> The lifetime Supply calculator </h1>");
var favoriteSnack = "Chocolate";
var currentAge = 15;
var maxAge = 65;
var snacksPerDay = 3;
var yearsRemaining = maxAge - currentAge;
var totalSnacks = yearsRemaining * snacksPerDay;
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ". <br>");
