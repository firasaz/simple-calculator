function getHistory() {
	return document.getElementById("history-value").innerHTML;
}

function PrintHistory(num) {
	document.getElementById("history-value").innerHTML += num;
}

function getOutput() {
	return document.getElementById("output_value").innerHTML;
}

var operator = document.getElementsByClassName("operator");
function printOutput(num) {
	if(num.className == "operator") {
		//don't print the operator if there is nothing in the output since you can't start with an operator
		if(getOutput() != ""){
			var history = document.getElementById("history-value").innerHTML;
			//history = history.replace(/,/g,"");
			var currentOutput = getOutput();
			currentOutput = currentOutput.replace(/,/g,"");
			clear();
			PrintHistory(history + currentOutput + num.id);
		}
	}
	else {
		var x = document.getElementById("output_value").innerHTML;
		x = x.replace(/,/g,"");
		document.getElementById("output_value").innerHTML = getFormattedNum(x + num.innerHTML);
	}
}

//fnum should be a string
function getFormattedNum(fnum) {
	var n = Number(fnum.replace(/,/g,""));//this is getting NaN after 5 digits. issue was giving "1,234" to Number function
	return n.toLocaleString("en");
}

function clear() {
	document.getElementById("output_value").innerHTML = "";
	document.getElementById("history-value").innerHTML = "";
}
document.getElementById("clear").onclick = function() {clear()};

//equal button index in operator array
function getResult() {
	var op1 = document.getElementById("history-value").innerHTML;
	var op2 = document.getElementById("output_value").innerHTML;
	var result = eval(op1+op2); //i just concatenated all the operators and operands together and gave them to the eval function :)
	//console.log(op1,op2,result);
	result = getFormattedNum(String(result));
	clear();
	document.getElementById("output_value").innerHTML = result;
	return result;//not really used here. omitted in del function if you notice
}
operator[7].onclick = getResult;

//delete button index in operator array
function del() {
	var newString = document.getElementById("output_value").innerHTML;
	newString = newString.substring(0,newString.length-1);
	newString = getFormattedNum(newString);
	document.getElementById("output_value").innerHTML = newString;
}
operator[1].onclick = del;

//printing numbers
var nums = document.getElementsByClassName("number");
for(var i = 0; i < nums.length; i++) {
	nums[i].addEventListener("click",function() {
		printOutput(this);
		});
}

//printing operators

for(var i = 2; i < 7; i++) {
	operator[i].addEventListener("click",function() {
		printOutput(this);
		});
}

/*

function getResult() {
	var op1 = document.getElementById("history-value").innerHTML;
	var op2 = document.getElementById("output_value").innerHTML;
	
	result = getFormattedNum(result);
	clear();
	document.getElementById("output_value").innerHTML = result;
	return result;//not really used here. omitted in del function if you notice
}


/*
document.getElementById("number0").onclick = function() {print(document.getElementById("number0").innerHTML)};
document.getElementById("number1").onclick = function() {print(document.getElementById("number1").innerHTML)};
document.getElementById("number2").onclick = function() {print(document.getElementById("number2").innerHTML)};
document.getElementById("number3").onclick = function() {print(document.getElementById("number3").innerHTML)};
document.getElementById("number4").onclick = function() {print(document.getElementById("number4").innerHTML)};
document.getElementById("number5").onclick = function() {print(document.getElementById("number5").innerHTML)};
document.getElementById("number6").onclick = function() {print(document.getElementById("number6").innerHTML)};
document.getElementById("number7").onclick = function() {print(document.getElementById("number7").innerHTML)};
document.getElementById("number8").onclick = function() {print(document.getElementById("number8").innerHTML)};
document.getElementById("number9").onclick = function() {print(document.getElementById("number9").innerHTML)};


function print(num) {
	//console.log(num);
	document.getElementById("output_value").innerHTML = num;
}

for(var i = 0; i < nums.length; i++) {
	//console.log(nums[i]);
	nums[i].onclick = function() {print(nums[i])};
}
*/


