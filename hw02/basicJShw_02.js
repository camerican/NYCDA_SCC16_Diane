//1. from js assignment. The following sheet is a cheatsheet which describes functions, variables, arrays, consoles, datatypes. 
function addThisUp (){//This names a function to be called later in the script. A function holds info that create an action when called.
	firstNum = document.getElementById("firstNum").value;
	secondNum = document.getElementById("secondNum").value;
	document.getElementById("result")
	//"firstNum", "secondNum" and "result" are id's which are defined in a css doc. They are styles that define the look of this function in a browser window. They are also referenced in the html document.
	.innerHTML = (parseInt(firstNum)+
		parseInt(secondNum));
	//.innerHTML or innerText will cause whatever was typed in the html sheet to change accordingly when the function is activated. In this case, "parseInt" will change the number of the total when two numbers are entered to give the correct number.
console.log("your number adds up to " + (parseInt(firstNum) +
parseInt(secondNum)) );
//This console.log message will show up after the user plugs in two numbers and clicks the add button.
}

//The console shows up in the bottom part of my browser window. It alerts me to any mistakes in my code. If there are no mistakes it will return results that let me know the code is working.
function changeText(){
	document.getElementById("em").innerHTML = "It changed!";
}
//This function will change the text from what it is in html (This text will change if you click it.) to "It changed!". The element id "em" is created in css, referenced in html, and changed by the function above. The "onclick" function is written into the html.

function newChange(){
	document.getElementById("changeMe").innerHTML = "Changed Again!";
}

//////////////////////////////////////
var warmColors = ["red", "yellow", "orange"];
//variables hold information to be called into use later. In this case, my variable is holding an array. Arrays are in square brackets and each element within the array is in quotes separated by a comma and counted from 0. First element is 0, second is 1, etc. 
var coolColors = ["blue", "purple", "dark green"];
//warmColors is the first array of "red", "yellow" and "orange". coolColors is the second array of "blue", "purple" and "dark green".

var allColors = [warmColors, coolColors]
//This variable holds the variable names for both arrays

var allColors = [["red", "yellow", "orange"],
["blue", "purple", "dark green"]];
//This variable hold both arrays, "warmColors" and "coolColors" within an array. So there are two arrays within one array. 

console.log(allColors[1][2]);
//This log will output the colors according to the numbers in the square brackets, which refer back to the arrays "warmColors" and "coolColors". They are all included in the "allColors" array. These numbers, [1] and [2] will return a value of "dark green" because [1] refers to "coolColors". (warmColors would be [0]). The second number refers to the third element in the "coolColors" array, which is "dark green". Since we count from 0, dark green is two, not three.

//2. 3 different functions that take input and return something via the console or an alert. The complex calculation below and the above functions "addThisUp" and "changeText"
///////
function complexCalc(x,y){
	x= x*3;
	console.log("x: " +x);
	y= x + 1 + y;
	console.log("y: " +y);
}

complexCalc(4, 6);
complexCalc(12, 18);
////////
////////
var interests = {

	firstName: "diane",
	lastName: "dangelo",
	favoriteNumber: 6,
	likes: ["books", " walks", " skiing", " spying on neighbors"]
}
 alert("diane" + " dangelo, genius")

console.log("You are: " + interests.firstName + " " 
	+ interests.lastName);

console.log( "Your favorite number is: " + interests.favoriteNumber);
console.log("Your interests are " + interests.likes);



//last part of the homework: #4 Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console: The array above about colors. The rest I'm not done yet. Can you just look at what I have so far?
// function print(message){
// 	document.write(message);
// }

// print("hello world");

// console.log("hello world");


// function logMyString(string){
// 	console.log(string);
// }

// logMyString("my name is ");

// alert(firstName + lastName);

// var first = diane;

// function names(first, last) {

//     return first + last;
// }

// // function logMyString( someString ) {
// //   console.log( someString );
// // }
// // // var logMyString = function( someString ){
// // //   console.log( someString );
// // // }

// logMyString("Hello there");



function pickADoor( doorNumber ) {
  doorNumber = parseInt(doorNumber) - 1;
  var prizes = ["A new car","A fishing pole","Addn old shoe"];
  if( prizes[doorNumber] ) {
    return prizes[doorNumber];
  } else { // error
    return "Oops, you picked an invalid number";
  }
}























