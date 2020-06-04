// //Chapter 1

// //Task1
// alert("Hello, welcome to this website");

// //Task2
// alert("Error! Please enter a valid password.");

// //Task3
// alert("Welcome to JS Land...\nHappy Coding!");


// //Task4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// //Task5
// console.log("Hello.. I can run JS through my web browser's console")



// //Chapter2

// //Task1
// var username;

// //Task2
// var myName = "Muhammad Adnan Farooq";

// //Task3
// var message = "Hello World";

// alert(message);

// //Task4
// var name = "Jhone Doe";
// var age = "15 years old";
// var course = "Certified Mobile Application Development";

// alert(name);
// alert(age);
// alert(course);

// //Task5
// var pizza = "PIZZA \nPIZZ \nPIZ \nPI\nP\n";
// alert(pizza);

// //Task6
// var email = "adnanfarooq@gmail.com";
// alert("My email address is "+ email);

// //Task7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book "+ book);

// //Task8
// document.write("Yah! I can write HTML content through JavaScript");


// //Chapter3

// //Task1
// var age = 15;
// alert("I am "+age+" years old");

// //Task2
// var times = 14;
// alert("You have visited this site " +times + " times");

// //Task3
// var birthYear = 2000;
// document.write("My birth year is "+birthYear +"\n Data type of my declared variable is number");

// //Task4
// var vistorName = "John Doe";
// var productTitle  = "T-shirt(s)";
// var quantity = 5;
// document.write(vistorName +" ordered " +quantity+ " "+productTitle+" on XYZ Clothing Store");


// //Chapter4

// //Task1
// var first_var, second_var, third_var;

// //Task2
// // Legal variables
// var waQas;
// var _waqas;
// var waqas123;
// var waqas$;
// var $waqas;
// //Illegal variables
// var 1waqas;
// var waqas#;
// var *waqas;
// var (waqas);
// var waq+as;

// //Task 3
// //a)
// document.write("Rules for naming JS variables")
// //b)
// document.write("Variables names can only contain string, numbers, S and _. For example $my_1stVariable")
// //c)
// document.write("Variables must begin with an letter, $ or _.")
// //d)
// document.write("Variable names are case sensitive")
// //e)
// document.write("Variable names should not be JS keywords")


// //Chapter 5

// //Task1
// var first = parseInt(prompt("Please enter first number"))
// var second = parseInt(prompt("Please enter second number"))
// var result = first + second
// document.write("Sum of "+ first + " and "+ second + " is " + result)

// //Task2
// //subtraction
// var first = parseInt(prompt("Please enter first number"))
// var second = parseInt(prompt("Please enter second number"))
// var result = first - second
// document.write("Difference of "+ first + " and "+ second + " is " + result)

// //Task2
// //Multiplication
// var first = parseInt(prompt("Please enter first number"))
// var second = parseInt(prompt("Please enter second number"))
// var result = first * second
// document.write("Product of "+ first + " and "+ second + " is " + result)

// //Task2
// //Division
// var first = parseInt(prompt("Please enter first number"))
// var second = parseInt(prompt("Please enter second number"))
// var result = first / second
// document.write("Division of "+ first + " and "+ second + " is " + result)

// //Task2
// //Modulus
// var first = parseInt(prompt("Please enter first number"))
// var second = parseInt(prompt("Please enter second number"))
// var result = first % second
// document.write("Remainder/ Modulus of "+ first + " and "+ second + " is " + result)


// //Task 3
// var my_var;
// document.write(my_var);
// my_var = 10;
// document.write("Initial value: " + my_var + "<br>");
// my_var++;
// document.write("Value after increment is: " + my_var + "<br>");
// my_var += 7;
// document.write("Value after addition is: " + my_var + "<br>");
// my_var--;
// document.write("Value after decrement is: " + my_var + "<br>");
// my_var%=3;
// document.write("The remainder is: " + my_var + "<br>");


// // Task 4

// var ticket_price = 600;
// document.write("Cost to by 5 tickets to a movie is " + ticket_price*5 + " PKR")


// //Task 5
// table_of = 4;
// for (x=1; x<=10; x++) {
//     document.write(table_of + " x " + x + " = " + table_of*x + "<br>");
// }


// //Task 6
// var temp_in_cl = 37;
// var temp_in_fr = (temp_in_cl*9/5)+32;
// document.write(temp_in_cl + "<sup>o</sup>C is " + temp_in_fr + "<sup>o</sup>F")
// document.write("<br>");
// var temp_in_fr1 = 99;
// var temp_in_cl1 = (temp_in_fr1-32)*5/9;
// document.write(temp_in_fr1 + "<sup>o</sup>F is " + temp_in_cl1.toFixed(2) + "<sup>o</sup>C");


// //Task 7
// var price_1 = 100;
// var price_2 = 150;
// var qty1 = 40;
// var qty2 = 35;
// var shp_chg = 50;
// document.write("Price of item 1 is " + price_1 + "<br>");
// document.write("Quantity of item 1 is " + qty1 + "<br>");
// document.write("Price of item 2 is " + price_2 + "<br>");
// document.write("Quantity of item 2 is " + qty2 + "<br>");
// document.write("Shipping charges " + shp_chg + "<br>");
// document.write("<br>");
// var total_cost = (price_1*qty1) +(price_2*qty2) + shp_chg;
// document.write("Total cost of your order is " + total_cost + "<br>");


// //Task 8
// var total_marks = 980;
// var marks_obtained = 804;
// percentage = marks_obtained/total_marks*100;
// document.write("Total marks: " + total_marks + "<br>");
// document.write("Marks obtained: " + marks_obtained + "<br>");
// document.write("Percentage: " + percentage);


// //Task 9
// dollar = 10;
// riyal = 25;
// totalpkr = (dollar*104.80) + (riyal*28)
// document.write("Total Currency in PKR: " + totalpkr)


// //Task 10
// var new_var = 10;
// var calculation = (new_var+5)*10/2;


// //Task 11
// current_year = 2020;
// birth_year = 1994;
// age = current_year-birth_year;
// document.write("<h1>Age Calculator</h1>");
// document.write("<br>");
// document.write("Current Year: "+ current_year + "<br>")
// document.write("Birth Year: "+ birth_year + "<br>")
// document.write("Your Age is: "+ age + "<br>")


// //Task 12
// var radius = 50;
// var circum = 2*3.142*50;
// var area = 3.142*(radius^2);
// document.write("Radius of a circle: "+ radius + "<br>")
// document.write("The circumference of a circle: "+ circum + "<br>")
// document.write("The area is: "+ area + "<br>")


// //Task 13
// var snack = "Cheetos";
// var cur_age = 35;
// var max_age = 65;
// var per_day = 2;
// var rest_life = (max_age-cur_age)*per_day*365;
// document.write("favorite snack: " + snack);
// document.write("current age: " + cur_age);
// document.write("estimated amximum age: " + max_age);
// document.write("amount of snacks per day: " + per_day);
// document.write("You will need " + rest_life + " to last you until the ripe old age of "+ max_age);


// //Chapters 6 to 9

// //Task 1
// var a = 10;
// document.write("Result <br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("<hr>");
// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");
// document.write("<br>");
// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");
// document.write("<br>");
// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");
// document.write("<br>");
// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");


// //Task 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// //            1     0     1    1
// document.write("a is " + a);
// document.write("b is " + b);
// document.write("result is " + result);


// //Task 3
// var name = prompt("What is your name?");
// alert("Hello " + name);


// //Task 5
// var table_of = parseInt(prompt("Please enter a number",5));
// for (x=1; x<=10; x++) {
//     document.write(table_of + " x " + x + " = " + table_of*x + "<br>");
// }


// //Task 6
// var sub1 = prompt("Please enter the name of first subject");
// var sub2 = prompt("Please enter the name of second subject");
// var sub3 = prompt("Please enter the name of third subject");
// total_marks = 100;
// var marks_sub1 = prompt("Please enter marks obtianed in " + sub1)
// var marks_sub2 = prompt("Please enter marks obtianed in " + sub2)
// var marks_sub3 = prompt("Please enter marks obtianed in " + sub3)
// document.write("<table>");
// document.write("<tr> <td>Subject</td> <td>Total Marks</td> <td>Obtained Marks</td> <td>Percentage</td></tr>")
// document.write("<br>");
// document.write("<tr><td>"+sub1 + "</td> <td>" + total_marks + "</td><td>" + marks_sub1 + "</td><td>" + (marks_sub1/total_marks*100) + "% </td></tr>");
// document.write("<br>");
// document.write("<tr><td>"+sub2 + "</td> <td>" + total_marks + "</td><td>" + marks_sub2 + "</td><td>" + (marks_sub2/total_marks*100) + "% </td></tr>");
// document.write("<br>");
// document.write("<tr><td>"+sub3 + "</td> <td>" + total_marks + "</td><td>" + marks_sub3 + "</td><td>" + (marks_sub3/total_marks*100) + "% </td></tr>");
// document.write("</table>");


// //Chapter 9-11
// //Task1

// var city = prompt("Please enter the name of the City").toLowerCase;
// if (city === "karachi"){
// alert("Welcome to the City of Lights");
// }

// //Task2
// var gender = prompt("Please enter your gender").toLowerCase;
// if (gender == "male"){
// alert("Good Morning Sir");
// }

// else if (gender == "female"){
// alert ("Good Morning Ma'am");
// }

// else{alert("Invalid data entered");}


// //Task3
// var input = prompt("Please input color of road traffic signal").toLowerCase;

// if (input == "red") {
//   alert("Must Stop");
// }
// else if (input == "yellow") {
// alert("Ready to move");
// }  
// else if (input == "green") {
//   alert("Move now");
//   }  
// else {
//   alert("Please provide correct input");
// }

// //Task4

// var fuel = prompt("Please enter the remaining fuel in litres");

// if (fuel<=0.25){

// alert("Please refill the fuel in your car");
// }

// //Task5

// //5a
// var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } //Alert message is displayed

// //5b
// var b = 82; 

// if (b++ === 83){ alert("given condition for variable b is true"); } //Alert not generated

// //5c
// var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true");if(c === 14){ alert("condition 4 is true"); }}

// //5d
// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals");}

// //5e

// if (true){ alert("True"); } if (false){ alert("False"); } //By default True

// //5f
// if("car" < "cat"){ alert("car is smaller than cat"); } // Car is smaller than cat

// //Task6

// var chem = prompt("Please enter marks obtained in Chemistry");
// var chem1 = parseInt(chem);
// var phys = prompt("Please enter marks obtained in Physics");
// var phys1 = parseInt(phys);
// var maths = prompt("Please enter marks obtained in Maths");
// var maths1 = parseInt(maths);
// var totalmarks = prompt("Please enter total marks");
// var marksobtained = chem1+phys1+maths1;
// var percentage = (marksobtained)*100/totalmarks;

// if (percentage >= 80){
// var grade = "A-one";
// var remarks = "Excellent";
// }
// else if (percentage >= 70){
// var grade = "A";
// var remarks = "Good";
// }
// else if (percentage >=60){
//     var grade = "B";
//     var remarks = "You need to improve";
// }
// else {
// var grade = "Fail";
// var remarks = "Sorry";
// }

// alert("Marks Sheet \r Total marks : "+totalmarks + "\rMarks obtained : "+ marksobtained +"\rPercentage : "+percentage+"%" + "\rGrade : "+grade + "\rRemarks : "+remarks);

// //Task7
// alert("Welcome to the guessing game");

// var guess = 5;
// var num = prompt("Please guess a number between 0 and 10");

// if (num == guess){
// alert("Bingo! Correct answer");
// }
// else if (num == guess + 1){
//     alert("Close enough to the correct answer");
// }
// else {
//     alert("Wrong answer");
// }


// //Task8

// var num = parseInt(prompt("Please enter a number to check if it is divisble by three"));

// if (num%3 ==0){
// alert("The number is divisible by 3");
// }
// else{
// alert("The number is not divisble by 3");
// }

// //Task9

// alert("Let's check if the number is even or odd");
// var num = parseInt(prompt("Please enter a number"));

// if (num%2 == 0) {
// alert("The number you have entered is even number");
// }

// else {
// alert("The number you have entered is odd num")
// }

// //Task10

// var temp = parseInt(prompt("Enter the temperature"));

// if (temp>40){
// alert("It is too hot outside.");
// }
// else if (temp>30){
// alert("The Weather today is Normal.");
// }
// else if (temp>20){
//     alert("Today's Weather is cool");
// }
// else if (temp>10){
//     alert("OMG! Today's weather is so Cool.");
// }

// else {
//     alert("Invalid Input");
// }

// //Task11

// var num3 = parseInt(prompt("Please enter the first number"));
// var num4 = parseInt(prompt("Please enter the second number"));
// var oper = prompt("Please enter the operation you want to perform i.e., + - * / %");
// if (oper == "+"){
// alert(num3 +" + " +num4+ " = "+ (num3+num4))
// }
// else if (oper == "-"){
//  alert(num3 +" - " +num4+ " = "+ (num3-num4));
// }

// else if (oper == "*"){
//  alert(num3 +" * " +num4+ " = "+ (num3*num4));
// }
// else if (oper == "/"){
// alert(num3 +" / " +num4+ " = "+ (num3/num4));
// }
// else if (oper == "%"){
// alert(num3 +" % " +num4+ " = "+ (num3%num4));
// }


// //Chapters 12 to 13

// // Task 1
// var check = (prompt("Please enter a letter or number"));
// var ascii = check.charCodeAt(0)
// if (ascii>=65 && ascii<=90) {
//     alert("You entered an upper case letter")
// }
// else if (ascii>=97 && ascii <=122) {
//     alert("You entered a lower case letter")
// }
// else {
//     alert("You entered a number")
// }


// //Task 2
// var num1 = prompt("Please enter the first number");
// var num2 = prompt("Please enter the second number");

// if (num1>num2){
//    alert("The bigger number is: " +num1);
// }
// else if (num1<num2){
//    alert("The bigger number is: "+num2);
// }

// else {
//    alert("Both numbers are equal");
// }


// // Task 3
// var numToCheck = prompt("Please enter a number");
// if (numToCheck>0) {
//     alert("The number is positive")
// }
// else if (numToCheck <0) {
//     alert("The number is negative")
// }
// else {
//     alert("The number is 0")
// }


// //Task 4
// var character = prompt("Please enter a character");
// switch (character) {
//     case 'a': 
//         alert("It's a vowel");
//         break;
//     case 'e': 
//         alert("It's a vowel");
//         break;
//     case 'i': 
//         alert("It's a vowel");
//         break;
//     case 'o': 
//         alert("It's a vowel");
//         break;
//     case 'u': 
//         alert("It's a vowel");
//         break;
//     default:
//         alert("It's not a vowel")
    
// }


// //Task 5
// var correct = "abc123";
// var pass = prompt("Please enter your password");
// if (pass==="") {
//    pass = prompt("Please enter your password")
//    if (pass==correct) {
//     document.write("Correct! The password you entered matches the original password")
// }

// else {
//     document.write("Incorrect password");
// }
// }

// else if (pass==correct) {
//     document.write("Correct! The password you entered matches the original password")
// }

// else {
//     document.write("Incorrect password");
// }


// // Task 6
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else {
// greeting = "Good evening";
// }


// // Task 7 
// var userTime = prompt("Please enter time in 24 hrs format")
// if (userTime>=0000 && userTime<=1200) {
//     document.write("Good morning!")
// }
// else if (userTime>=1200 && userTime<=1700) {
//     document.write("Good afternoon!")
// }
// else if (userTime>=1700 && userTime<=2100) {
//     document.write("Good evening!")
// }
// else if (userTime>=2100 && userTime<=2400) {
//     document.write("Good morning!")
// }
// else {
//     document.write("Please enter correct time")
// }


// // Chapters 14 to 16

// //Task 1
// var studentArray = [];

// //Task 2
// var studentArray = [];

// // Task 3
// var stringsArray = ["car","bus","jeep"];

// //Task 4
// var numbersArray = [1,4,55,980];

// //Task 5
// var booleanArray = [true,false];

// // Task 6
// var mixedArray = [11,"school", true, 55.67];

// // Task 7
// var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil.","PhD"]
// for (var x=0;x<qualifications.length;x++) {
//     document.write(x + ") " + qualifications[x] + "<br>");
// }

// // Task 8
// var students = ["Ali","Ghous","Basit"];
// var scores = [487, 390, 484];
// for (var x=0; x<students.length; x++) {
//     document.write("Score of " + students[x] + " is " + scores[x] + ". Percentage: " + (scores[x]/500*100) + "% <br>")
// }


// // Task 9
// var colors = ["red", "blue", "green","yellow"];
// var clraddbegin = prompt("Please enter the name of the color to add in the beginning");
// colors.unshift(clraddbegin);
// for (var x=0;x<colors.length;x++) {
//     document.write(colors[x] + "<br>");
// }
// var clraddbegin = prompt("Please enter the name of the color to add in the end");
// colors.push(clraddbegin);
// for (var x=0;x<colors.length;x++) {
//     document.write(colors[x] + "<br>");
// }
// colors.unshift("pink","purple");
// for (var x=0;x<colors.length;x++) {
//     document.write(colors[x] + "<br>");
// }
// colors.shift();
// for (var x=0;x<colors.length;x++) {
//     document.write(colors[x] + "<br>");
// }
// colors.pop();
// for (var x=0;x<colors.length;x++) {
//     document.write(colors[x] + "<br>");
// }
// var indexToAdd = prompt("At which index color should be added")
// var colorToAdd = prompt("What should be added")
// colors.splice(indexToAdd,0,colorToAdd);
// for (var x=0;x<colors.length;x++) {
//     document.write(colors[x] + "<br>");
// }
// var indexToDel = prompt("From which index colors should be deleted");
// var colorsToDel = prompt("How many colors should be deleted?");
// colors.splice(indexToDel,colorsToDel);
// for (var x=0;x<colors.length;x++) {
//     document.write(colors[x] + "<br>");
// }


// //Task 10
// studentScores = [320,230,480,120];
// document.write("Scores of Students: " + studentScores)
// document.write("<br>");
// studentScores.sort();
// document.write("Ordered scores of Students: " + studentScores)


// //Task 11 
// citiesList = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// selectedCities=citiesList.slice(0,3);
// document.write(citiesList);
// document.write("<br>");
// document.write(selectedCities);

// // Task 12
// var arr = ["This","is","my","cat"];
// var myString = arr.join(" ");
// document.write(myString);

// //Task 13
// newArray = [];
// newArray[0]="keyboard";
// newArray[1]="mouse";
// newArray[2]="printer";
// newArray[3]="monitor";
// document.write(newArray);


// //Task 14
// newArray = [];
// newArray[0]="keyboard";
// newArray[1]="mouse";
// newArray[2]="printer";
// newArray[3]="monitor";
// newArray.reverse();
// document.write(newArray);


// //Task 15
// var manufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write("<h1>Phone Manufacturers</h1>");
// document.write("<form>");
// document.write('<select name="manufacturers">');
// for (var x=0;x<manufacturers.length;x++) {
//     document.write("<option value =" + manufacturers[x] + ">" + manufacturers[x] + "</option>");
// }
// document.write("</select>");
// document.write("</form>");


// //Chapters 17 to 20

// //Task 1
// var arrayofArrays = [[]];


// //Task 2
// var arrayofArrays = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for (var x=0;x<arrayofArrays.length;x++) {
//     document.write(arrayofArrays[x] + "<br>");
// }


// //Task 3
// for (var x=1;x<=10;x++) {
//     document.write(x + "<br>");
// }


// //Task 4
// var tableNumber = prompt("Enter a numebr to show its multiplication table");
// var tableLength = prompt("Enter length of multiplication table");
// for (var x=0; x<=tableLength;x++) {
//     document.write(tableNumber + " x " + x + " = " + tableNumber*x + "<br>");
// }


// //Task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var x=0; x<=fruits.length-1;x++) {
//     document.write("Element at index " + x + " is " + fruits[x] + "<br>");
// }


// //Task 6
// //a)
// var counting = [];
// for (var x=0;x<=15;x++) {
//     counting[x] = x;
// }
// document.write("<p>Counting:</p>")
// document.write(counting);
// //b)
// var reverseCounting=[];
// for (var x=10, y=0;x>=1;x--) {
//     reverseCounting[y] = x;
//     y++
// }
// document.write("<p>Reverse counting:</p>")
// document.write(reverseCounting);
// //c)
// evenNumbers = [];
// for (var x=0;x<=20;x++) {
//     if (x%2==0) {
//         evenNumbers.push(x);
//     }
// }
// document.write("<p>Even:</p>")
// document.write(evenNumbers);
// //d)
// oddNumbers = [];
// for (var x=0;x<=20;x++) {
//     if (x%2!=0) {
//         oddNumbers.push(x);
//     }
// }
// document.write("<p>Odd:</p>")
// document.write(oddNumbers);
// //e)
// series = [];
// for (var x=0;x<=20;x++) {
//     if (x%2==0 && x!=0) {
//         series.push(x + "k");
//     }
// }
// document.write("<p>Series:</p>")
// document.write(series);


// //Task 7
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/ Ma'am");
// if (items.indexOf(userInput)!=-1){
//     document.write(userInput + " is available at index " + items.indexOf(userInput) + " in our bakery.");
// }
// else {
//     document.write("We are sorry. " + userInput + " is not available in our bakery.")
// }


// // Task 8
// arrayForMax = [24, 53, 78, 91, 12];
// document.write("Array items: " + arrayForMax + "<br>")
// var max=arrayForMax[0];
// for (var x=0;x<arrayForMax.length;x++){
//     if (arrayForMax[x]>max) {
//         max=arrayForMax[x];
//     }
// }
// document.write("The largest number is " + max)


// // Task 9
// arrayForMin = [24, 53, 78, 91, 12];
// document.write("Array items: " + arrayForMin + "<br>")
// var min=arrayForMin[0];
// for (var x=0;x<arrayForMin.length;x++){
//     if (arrayForMin[x]<min) {
//         min=arrayForMin[x];
//     }
// }
// document.write("The smallest number is " + min)


//Task 10
for (var x=5;x<=100;x++) {
    if(x%5==0){
        document.write(x + ", ");
    }
}