var add = function(number1, number2) {
	return number1 + number2;
 };
 var subtract = function(number1, number2) {
 	return number1 - number2;
 };
 var multiplication = function(number1, number2) {
 return number1 * number2;
};
var division = function(number1, number2) {
	return number1 / number2;
};
 var number1 = parseInt(prompt("enter a number"));
 var number2 = parseInt(prompt("enter a number"));
 var result = add(number1, number2);
 alert(result);

 // var weight = parseInt(prompt("What's your weight?"));
 // var height = parseInt(prompt("What's your height?"));
 //
 // var calculate = function(weight, height){
 // return (weight * 703) / (height * height);
 // }
 // var bmi = calculate(weight, height);
 // alert("Your BMI is " + bmi);

 // var fahrenheit = function(x) {
 // 	return x * 9 / 5 + 32;
 //   };
 //
 // var celcius = parseInt(prompt("Temperature in celcius:"));
 //
 // alert ("The answer is " + fahrenheit(celcius));

//  var celcius = function(y) {
// 	return y - 32 * 5 / 9;
// };
//
// var fahrenheit = parseInt(prompt("Temperature in fahrenheit:"));
//
// alert ("The answer in celcius is " + celcius(fahrenheit));
